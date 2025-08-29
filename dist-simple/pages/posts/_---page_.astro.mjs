import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Dq2hjnnk.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_C9zGFYzy.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BmwawJdT.mjs';
import { l as logger, g as getPostsDirectFromSupabase, c as convertSupabasePost } from '../../chunks/supabase-direct_CBgP8j8M.mjs';
import { g as getPostsFromPayload, c as convertPayloadPost } from '../../chunks/payload-api_CAscSAW8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths({ paginate }) {
  const mdxPosts = await getCollection("postsMdx").catch(() => []);
  let supabasePosts = [];
  try {
    logger.info("Posts page: Attempting to fetch from Payload API...");
    const payloadPosts = await getPostsFromPayload({
      limit: 1e4,
      status: "published"
    });
    if (payloadPosts && payloadPosts.length > 0) {
      supabasePosts = payloadPosts.map(convertPayloadPost);
      logger.success(`Posts page: Successfully fetched ${supabasePosts.length} posts from Payload API`);
    } else {
      throw new Error("No posts returned from Payload API");
    }
  } catch (error) {
    logger.warn("Posts page: Payload API failed, falling back to Supabase direct:", error);
    supabasePosts = await getPostsDirectFromSupabase(1e4);
  }
  const normalizedMdxPosts = mdxPosts.map((entry) => ({
    ...entry,
    source: "mdx",
    data: {
      ...entry.data,
      properties: {
        bTitle: entry.data.title,
        bTags: entry.data.tags,
        bSlug: entry.data.slug,
        bCoverImage: entry.data.coverImage || "",
        bPublished: { start: entry.data.published },
        bLastUpdated: { start: entry.data.lastUpdated || entry.data.published },
        bDescription: entry.data.description
      }
    }
  }));
  const normalizedSupabasePosts = supabasePosts.filter((post) => post.slug && typeof post.slug === "string").map(convertSupabasePost).map((post) => ({
    id: post.id,
    slug: post.slug,
    source: "supabase",
    // Direct properties for modern PostCard mapping
    title: post.title,
    description: post.description || "",
    published: post.published,
    lastUpdated: post.updated,
    body: post.body || "",
    format: post.format || "md",
    imageUrl: post.coverImage || post.imageUrl || "",
    coverImage: post.coverImage || post.imageUrl || "",
    tags: post.tags || [],
    category: post.category || [],
    data: {
      title: post.title,
      description: post.description || "",
      published: post.published,
      lastUpdated: post.updated,
      body: post.body || "",
      format: post.format || "md",
      properties: {
        bTitle: post.title,
        bTags: post.tags || [],
        bSlug: post.slug,
        bCoverImage: post.coverImage || post.imageUrl || "",
        bPublished: { start: post.published || post.created },
        bLastUpdated: { start: post.updated || post.created },
        bDescription: post.description || ""
      }
    }
  }));
  const allPosts = [...normalizedMdxPosts, ...normalizedSupabasePosts].sort((a, b) => {
    const dateA = new Date(a.data.published || a.data.properties.bPublished.start);
    const dateB = new Date(b.data.published || b.data.properties.bPublished.start);
    return dateB.getTime() - dateA.getTime();
  });
  return paginate(allPosts, {
    pageSize: 24
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `All Posts - Page ${page.currentPage} of ${page.lastPage}` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
Semua Artikel
</h1> <p class="text-gray-500 sm:text-xl dark:text-gray-400">
Kumpulan artikel terbaru dari tim kotacom.id
</p> </div> <div class="mb-4"> <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
Menampilkan <span class="font-semibold text-gray-900 dark:text-white"> ${page.start + 1}-${page.end + 1} </span> dari <span class="font-semibold text-gray-900 dark:text-white"> ${page.total} </span> artikel
</span> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> </div> </section>  ${page.data.length > 0 && renderTemplate`<section class="bg-gray-50 dark:bg-gray-800"> <div class="py-8 px-4 mx-auto max-w-screen-xl"> <div class="flex flex-col sm:flex-row justify-between items-center gap-4"> <!-- Previous Button --> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="flex items-center justify-center px-6 py-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Sebelumnya
</a>` : renderTemplate`<div></div>`} <!-- Page Info --> <div class="text-sm text-gray-600 dark:text-gray-400">
Halaman ${page.currentPage} dari ${page.lastPage} </div> <!-- Next Button --> ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex items-center justify-center px-6 py-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors">
Selanjutnya
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>` : renderTemplate`<div></div>`} </div> </div> </section>`}`, "head": async ($$result2) => renderTemplate`<fragment> ${page.url.prev && renderTemplate`<link rel="prev"${addAttribute(page.url.prev, "href")}>`} ${page.url.next && renderTemplate`<link rel="next"${addAttribute(page.url.next, "href")}>`} ${page.currentPage > 1 && renderTemplate`<meta name="robots" content="noindex,follow">`} </fragment>` })}`;
}, "/workspace/src/pages/posts/[...page].astro", void 0);

const $$file = "/workspace/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
