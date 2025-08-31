import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPostsDirectFromSupabase, convertSupabasePost } from '../lib/supabase-direct';

export async function GET(context) {
  let mdxPosts = [];
  try { mdxPosts = await getCollection('postsMdx'); } catch (_) { mdxPosts = []; }
  const supabasePosts = await getPostsDirectFromSupabase(null); // Fetch all for RSS feed
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
