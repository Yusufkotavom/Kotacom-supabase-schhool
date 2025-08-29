import { l as logger } from './supabase-direct_CBgP8j8M.mjs';

function getPayloadApiUrl() {
  const payloadUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL || process.env.PAYLOAD_SERVER_URL || "http://localhost:3000";
  return payloadUrl;
}
async function getPostsFromPayload(options = {}) {
  const { limit = 100, page = 1, status = "published" } = options;
  try {
    const payloadUrl = getPayloadApiUrl();
    const url = new URL("/api/posts-populated", payloadUrl);
    url.searchParams.set("limit", limit.toString());
    url.searchParams.set("page", page.toString());
    url.searchParams.set("status", status);
    logger.apiDebug(`Fetching posts from Payload API: ${url.toString()}`);
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    logger.success(`Successfully fetched ${data.docs.length} posts from Payload API`);
    logger.info(`Total docs: ${data.totalDocs}, Page: ${data.page}/${data.totalPages}`);
    if (data.docs.length > 0) {
      const contentStr = JSON.stringify(data.docs[0].content || {});
      const mediaBlockCount = (contentStr.match(/mediaBlock/g) || []).length;
      if (mediaBlockCount > 0) {
        logger.debug(`Found ${mediaBlockCount} MediaBlocks in posts`);
      }
    }
    return data.docs;
  } catch (error) {
    logger.error("❌ Error fetching posts from Payload API:", error);
    return [];
  }
}
function convertPayloadPost(post) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    content: post.content,
    // Already populated!
    description: post.description || post.meta?.description || "",
    published: post.publishedAt || post.createdAt,
    updated: post.updatedAt,
    created_at: post.createdAt,
    updated_at: post.updatedAt,
    _status: post._status || "published",
    status: post._status || "published",
    coverImage: post.coverImage || "",
    cover_image: post.coverImage || "",
    imageUrl: post.coverImage || "",
    body: post.body || "",
    format: post.format || "md",
    category: post.category || [],
    tags: post.tags || [],
    authors: post.authors || [],
    heroImage: post.heroImage,
    meta: post.meta
  };
}

export { convertPayloadPost as c, getPostsFromPayload as g };
