import { createClient } from '@supabase/supabase-js';

class Logger {
  isDevelopment;
  constructor() {
    this.isDevelopment = process.env.NODE_ENV === "development";
  }
  shouldLog(level) {
    if (level === "error") {
      return true;
    }
    if (level === "warn") {
      return this.isDevelopment || undefined                              === "true";
    }
    return this.isDevelopment;
  }
  debug(...args) {
    if (this.shouldLog("debug")) {
      console.log(...args);
    }
  }
  info(...args) {
    if (this.shouldLog("info")) {
      console.log(...args);
    }
  }
  warn(...args) {
    if (this.shouldLog("warn")) {
      console.warn(...args);
    }
  }
  error(...args) {
    if (this.shouldLog("error")) {
      console.error(...args);
    }
  }
  // Special methods for specific use cases
  mediaDebug(message, data) {
    if (this.isDevelopment) {
      console.log(`🖼️ ${message}`, data || "");
    }
  }
  apiDebug(message, data) {
    if (this.isDevelopment) {
      console.log(`🔄 ${message}`, data || "");
    }
  }
  success(message, data) {
    if (this.isDevelopment) {
      console.log(`✅ ${message}`, data || "");
    }
  }
  // Production-safe method for important operations
  production(level, message, data) {
    if (level === "error") {
      console.error(`[PROD ERROR] ${message}`, data || "");
    } else if (level === "warn") {
      console.warn(`[PROD WARN] ${message}`, data || "");
    } else if (this.isDevelopment) {
      console.log(`[${level.toUpperCase()}] ${message}`, data || "");
    }
  }
}
const logger = new Logger();

const SUPABASE_URL = undefined                            ;
const SUPABASE_ANON_KEY = undefined                                 ;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function getTagsForPosts(postIds) {
  const tagsMap = /* @__PURE__ */ new Map();
  if (postIds.length === 0) return tagsMap;
  try {
    const { data: tagsData, error } = await supabase.from("posts_tags").select("_parent_id, value").in("_parent_id", postIds).order("_order", { ascending: true });
    if (!error && tagsData) {
      tagsData.forEach((tag) => {
        const postId = tag._parent_id;
        if (!tagsMap.has(postId)) {
          tagsMap.set(postId, []);
        }
        tagsMap.get(postId).push(tag.value);
      });
    }
  } catch (error) {
    console.log("⚠️ Could not fetch tags:", error);
  }
  return tagsMap;
}
async function getCategoriesForPosts(postIds) {
  const categoriesMap = /* @__PURE__ */ new Map();
  if (postIds.length === 0) return categoriesMap;
  try {
    const { data: categoriesData, error } = await supabase.from("posts_categories").select("_parent_id, value").in("_parent_id", postIds).order("_order", { ascending: true });
    if (!error && categoriesData) {
      categoriesData.forEach((category) => {
        const postId = category._parent_id;
        if (!categoriesMap.has(postId)) {
          categoriesMap.set(postId, []);
        }
        categoriesMap.get(postId).push(category.value);
      });
    }
  } catch (error) {
    console.log("⚠️ Could not fetch categories:", error);
  }
  return categoriesMap;
}
async function populateMediaInContent(posts) {
  try {
    const mediaIds = /* @__PURE__ */ new Set();
    posts.forEach((post) => {
      if (post.content && typeof post.content === "object") {
        collectMediaIds(post.content, mediaIds);
      }
    });
    if (mediaIds.size === 0) {
      return posts;
    }
    logger.debug(`Populating ${mediaIds.size} media objects`);
    const { data: mediaObjects, error } = await supabase.from("media").select("*").in("id", Array.from(mediaIds));
    if (error) {
      console.error("❌ Error fetching media objects:", error);
      return posts;
    }
    if (!mediaObjects || mediaObjects.length === 0) {
      console.warn("⚠️ No media objects found for IDs:", Array.from(mediaIds));
      return posts;
    }
    console.log(`✅ Successfully fetched ${mediaObjects.length} media objects`);
    const mediaMap = /* @__PURE__ */ new Map();
    mediaObjects.forEach((media) => {
      mediaMap.set(media.id, media);
    });
    const populatedPosts = posts.map((post) => {
      if (post.content && typeof post.content === "object") {
        const populatedContent = populateMediaIds(post.content, mediaMap);
        return {
          ...post,
          content: populatedContent
        };
      }
      return post;
    });
    console.log(`🎯 Successfully populated media in ${populatedPosts.length} posts`);
    return populatedPosts;
  } catch (error) {
    console.error("❌ Error populating media in content:", error);
    return posts;
  }
}
function collectMediaIds(obj, mediaIds) {
  if (!obj || typeof obj !== "object") return;
  if (Array.isArray(obj)) {
    obj.forEach((item) => collectMediaIds(item, mediaIds));
    return;
  }
  if (obj.blockType === "mediaBlock" && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === "number") {
      mediaIds.add(mediaId);
    }
  }
  if (obj.type === "block" && obj.fields?.blockType === "mediaBlock" && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === "number") {
      mediaIds.add(mediaId);
    }
  }
  Object.values(obj).forEach((value) => {
    if (value && typeof value === "object") {
      collectMediaIds(value, mediaIds);
    }
  });
}
function populateMediaIds(obj, mediaMap) {
  if (!obj || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => populateMediaIds(item, mediaMap));
  }
  if (obj.blockType === "mediaBlock" && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === "number" && mediaMap.has(mediaId)) {
      const mediaObject = mediaMap.get(mediaId);
      return {
        ...obj,
        fields: {
          ...obj.fields,
          media: mediaObject
        }
      };
    }
  }
  if (obj.type === "block" && obj.fields?.blockType === "mediaBlock" && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === "number" && mediaMap.has(mediaId)) {
      const mediaObject = mediaMap.get(mediaId);
      return {
        ...obj,
        fields: {
          ...obj.fields,
          media: mediaObject
        }
      };
    }
  }
  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === "object") {
      result[key] = populateMediaIds(value, mediaMap);
    } else {
      result[key] = value;
    }
  });
  return result;
}
async function getPostsDirectFromSupabase(limit = 100, status = "published") {
  try {
    logger.info(`Fetching ${limit} posts from Supabase with status: ${status}...`);
    let query = supabase.from("posts").select("*").order("published_at", { ascending: false });
    if (status !== "all") {
      query = query.eq("_status", status);
    }
    const { data, error } = await query.limit(limit);
    if (error) {
      console.error("❌ Supabase error:", error);
      return [];
    }
    console.log(`✅ Successfully fetched ${data?.length || 0} posts from Supabase`);
    if (data && data.length > 0) {
      const postIds = data.map((post) => post.id);
      const [tagsMap, categoriesMap] = await Promise.all([
        getTagsForPosts(postIds),
        getCategoriesForPosts(postIds)
      ]);
      const { marked } = await import('marked');
      marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: false,
        mangle: false
      });
      const postsWithMetadata = data.map((post) => {
        let processedBody = post.body || "";
        if (processedBody && typeof processedBody === "string") {
          try {
            processedBody = marked(processedBody);
            processedBody = processedBody.replace(/\n\s*\n/g, "</p>\n<p>").replace(/^(?!<[ph])/gm, "<p>").replace(/(?<!>)$/gm, "</p>").replace(/<p><\/p>/g, "").replace(/<p>(<[h|u|o|b])/g, "$1").replace(/(<\/[h|u|o|b][^>]*>)<\/p>/g, "$1").trim();
          } catch (error2) {
            console.log("⚠️ Could not process markdown for post:", post.slug, error2);
          }
        }
        return {
          ...post,
          // Field mapping dengan fallback untuk status dan published
          coverImage: post.cover_image || post.coverImage || "",
          imageUrl: post.cover_image || post.coverImage || post.imageUrl || "",
          publishedAt: post.published_at || post.published || post.publishedAt || "",
          // ✅ Fallback: published_at -> published -> publishedAt
          updatedAt: post.updated_at || post.updatedAt || post.last_updated || post.lastUpdated || "",
          // ✅ Fallback: updated_at -> updatedAt -> last_updated -> lastUpdated
          createdAt: post.created_at || post.createdAt || "",
          // ✅ Fallback: created_at -> createdAt
          body: processedBody,
          tags: tagsMap.get(post.id) || [],
          categories: categoriesMap.get(post.id) || [],
          category: categoriesMap.get(post.id) || [],
          // Status field dengan fallback - gunakan _status sebagai primary
          status: post._status || post.status || "draft",
          // ✅ Fallback: _status -> status -> default 'draft'
          // Additional fields with fallbacks
          lastUpdated: post.last_updated || post.lastUpdated || post.updated_at || post.updatedAt || "",
          format: post.format || "article"
        };
      });
      console.log(`📋 Enhanced ${postsWithMetadata.length} posts with tags and categories`);
      if (postsWithMetadata[0]) {
        console.log("📋 Sample enhanced post:", {
          title: postsWithMetadata[0].title,
          coverImage: postsWithMetadata[0].coverImage,
          published: postsWithMetadata[0].publishedAt,
          status: postsWithMetadata[0].status,
          tags: postsWithMetadata[0].tags,
          categories: postsWithMetadata[0].categories
        });
      }
      const postsWithPopulatedMedia = await populateMediaInContent(postsWithMetadata);
      return postsWithPopulatedMedia;
    }
    if (data && data.length > 0) {
      const populatedData = await populateMediaInContent(data);
      return populatedData;
    }
    return data || [];
  } catch (error) {
    console.error("❌ Error fetching from Supabase:", error);
    return [];
  }
}
async function getProductsDirectFromSupabase(limit = 1e4, status = "published") {
  try {
    logger.info(`Fetching ${limit} products from Supabase with status: ${status}...`);
    let query = supabase.from("products").select("*").order("published_at", { ascending: false });
    if (status !== "all") {
      query = query.eq("_status", status);
    }
    const { data, error } = await query.limit(limit);
    if (error) {
      console.error("❌ Supabase error:", error);
      return [];
    }
    console.log(`✅ Successfully fetched ${data?.length || 0} products from Supabase`);
    return data || [];
  } catch (error) {
    console.error("❌ Error fetching from Supabase:", error);
    return [];
  }
}
async function getTagsForServices(serviceIds) {
  const tagsMap = /* @__PURE__ */ new Map();
  if (serviceIds.length === 0) return tagsMap;
  try {
    const { data: tagsData, error } = await supabase.from("services_tags").select("_parent_id, value").in("_parent_id", serviceIds).order("_order", { ascending: true });
    if (!error && tagsData) {
      tagsData.forEach((tag) => {
        const serviceId = tag._parent_id;
        if (!tagsMap.has(serviceId)) {
          tagsMap.set(serviceId, []);
        }
        tagsMap.get(serviceId).push(tag.value);
      });
    }
  } catch (error) {
    console.log("⚠️ Could not fetch service tags:", error);
  }
  return tagsMap;
}
async function getCategoriesForServices(serviceIds) {
  const categoriesMap = /* @__PURE__ */ new Map();
  if (serviceIds.length === 0) return categoriesMap;
  try {
    const { data: categoriesData, error } = await supabase.from("services_categories").select("_parent_id, value").in("_parent_id", serviceIds).order("_order", { ascending: true });
    if (!error && categoriesData) {
      categoriesData.forEach((category) => {
        const serviceId = category._parent_id;
        if (!categoriesMap.has(serviceId)) {
          categoriesMap.set(serviceId, []);
        }
        categoriesMap.get(serviceId).push(category.value);
      });
    }
  } catch (error) {
    console.log("⚠️ Could not fetch service categories:", error);
  }
  return categoriesMap;
}
async function getServicesDirectFromSupabase(limit = 1e4, status = "published") {
  try {
    logger.info(`Fetching ${limit} services from Supabase with status: ${status}...`);
    let query = supabase.from("services").select("*").limit(limit).order("published_at", { ascending: false });
    if (status !== "all") {
      query = query.eq("_status", status);
    }
    const { data, error } = await query;
    if (error) {
      console.error("❌ Supabase error:", error);
      return [];
    }
    if (!data) return [];
    const serviceIds = data.map((service) => service.id);
    const [tagsMap, categoriesMap] = await Promise.all([
      getTagsForServices(serviceIds),
      getCategoriesForServices(serviceIds)
    ]);
    const { marked } = await import('marked');
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: false,
      mangle: false
    });
    const processedServices = data.map((service) => {
      let processedBody = service.body || "";
      if (processedBody && typeof processedBody === "string") {
        try {
          processedBody = marked(processedBody);
          processedBody = processedBody.replace(/\n\s*\n/g, "</p>\n<p>").replace(/^(?!<[ph])/gm, "<p>").replace(/(?<!>)$/gm, "</p>").replace(/<p><\/p>/g, "").replace(/<p>(<[h|u|o|b])/g, "$1").replace(/(<\/[h|u|o|b][^>]*>)<\/p>/g, "$1").trim();
        } catch (error2) {
          console.log("⚠️ Could not process markdown for service:", service.slug, error2);
        }
      }
      return {
        ...service,
        body: processedBody,
        tags: tagsMap.get(service.id) || [],
        category: categoriesMap.get(service.id) || Array.isArray(service.category) ? service.category : [],
        // Ensure proper field mappings
        imageUrl1: service.imageUrl1 || service.cover_image || "",
        wilayah: Array.isArray(service.wilayah) ? service.wilayah : [],
        type: Array.isArray(service.type) ? service.type : []
      };
    });
    console.log(`✅ Successfully fetched and processed ${processedServices.length} services from Supabase`);
    console.log(`🏷️ Enhanced ${processedServices.filter((s) => s.tags?.length > 0).length} services with tags`);
    console.log(`📂 Enhanced ${processedServices.filter((s) => s.category?.length > 0).length} services with categories`);
    return processedServices;
  } catch (error) {
    console.error("❌ Error fetching from Supabase:", error);
    return [];
  }
}
async function getProjectsDirectFromSupabase(limit = 1e4, status = "published") {
  try {
    logger.info(`Fetching ${limit} projects from Supabase with status: ${status}...`);
    let query = supabase.from("projects").select("*").limit(limit).order("published_at", { ascending: false });
    if (status !== "all") {
      query = query.eq("_status", status);
    }
    const { data, error } = await query;
    if (error) {
      console.error("❌ Supabase error:", error);
      return [];
    }
    if (!data) return [];
    const { marked } = await import('marked');
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: false,
      mangle: false
    });
    const processedProjects = data.map((project) => {
      let processedBody = project.body || "";
      let processedDescription = project.description || "";
      let processedReview = project.review || "";
      let processedGetInvolved = project.get_involved || "";
      const processMarkdownField = (content) => {
        if (!content || typeof content !== "string") return "";
        try {
          let processed = marked(content);
          processed = processed.replace(/\n\s*\n/g, "</p>\n<p>").replace(/^(?!<[ph])/gm, "<p>").replace(/(?<!>)$/gm, "</p>").replace(/<p><\/p>/g, "").replace(/<p>(<[h|u|o|b])/g, "$1").replace(/(<\/[h|u|o|b][^>]*>)<\/p>/g, "$1").trim();
          return processed;
        } catch (error2) {
          console.log("⚠️ Could not process markdown for project field:", project.slug, error2);
          return content;
        }
      };
      processedBody = processMarkdownField(processedBody);
      processedDescription = processMarkdownField(processedDescription);
      processedReview = processMarkdownField(processedReview);
      processedGetInvolved = processMarkdownField(processedGetInvolved);
      return {
        id: project.id,
        title: project.title,
        slug: project.slug,
        organiser: project.organiser,
        imageUrl: project.image_url || "",
        // Map image_url to imageUrl
        published: project.published,
        description: processedDescription,
        body: processedBody,
        format: project.format,
        updated_at: project.updated_at,
        created_at: project.created_at,
        url: project.url,
        gyg_url: project.gyg_url,
        maps_url: project.maps_url,
        verify: project.verify || "",
        review: processedReview,
        get_involved: processedGetInvolved,
        // Legacy field mappings for compatibility
        country: [],
        locale: [],
        cost: [],
        category: []
      };
    });
    console.log(`✅ Successfully fetched and processed ${processedProjects.length} projects from Supabase`);
    return processedProjects;
  } catch (error) {
    console.error("❌ Error fetching from Supabase:", error);
    return [];
  }
}
function processPayloadField(field) {
  if (!field) return [];
  if (typeof field === "string") {
    try {
      const parsed = JSON.parse(field);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [{ value: field }];
    }
  }
  if (Array.isArray(field)) return field;
  return [field];
}
function convertSupabasePost(post) {
  return {
    id: post.id,
    title: post.title || "",
    slug: post.slug || "",
    description: post.description || "",
    imageUrl: post.imageUrl || post.coverImage || "",
    coverImage: post.coverImage || post.imageUrl || "",
    image: post.imageUrl || post.coverImage || "",
    published: post.published ? new Date(post.published) : post.publishedAt ? new Date(post.publishedAt) : /* @__PURE__ */ new Date(),
    publishedAt: post.publishedAt ? new Date(post.publishedAt) : post.published ? new Date(post.published) : /* @__PURE__ */ new Date(),
    updated: post.updatedAt ? new Date(post.updatedAt) : /* @__PURE__ */ new Date(),
    tags: processPayloadField(post.tags).map((t) => t.value || t),
    category: processPayloadField(post.category).map((c) => c.value || c),
    body: post.body || "",
    // ✅ Body tetap markdown string
    content: post.content || null,
    // ✅ Content untuk Lexical Editor blocks
    status: post.status || "published",
    // ✅ post.status sudah di-mapping dari _status di getPostsDirectFromSupabase
    author: post.author || "Kotacom.id",
    source: "supabase-direct"
  };
}

export { getProductsDirectFromSupabase as a, getProjectsDirectFromSupabase as b, convertSupabasePost as c, getServicesDirectFromSupabase as d, getPostsDirectFromSupabase as g, logger as l };
