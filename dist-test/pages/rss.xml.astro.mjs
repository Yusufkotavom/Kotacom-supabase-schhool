import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_DvVCR5uu.mjs';
import { d as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/consts_BQzPd2gi.mjs';
import { g as getPostsDirectFromSupabase, c as convertSupabasePost } from '../chunks/supabase-direct_CBgP8j8M.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  let mdxPosts = [];
  try { mdxPosts = await getCollection('postsMdx'); } catch (_) { mdxPosts = []; }
  const supabasePosts = await getPostsDirectFromSupabase(200);
  const supa = supabasePosts.map(convertSupabasePost);

  const items = [
    ...mdxPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.published),
      link: `/${post.data.slug}/`,
    })),
    ...supa.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.published),
      link: `/${post.slug}/`,
    })),
  ].sort((a, b) => b.pubDate - a.pubDate).slice(0, 100);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
