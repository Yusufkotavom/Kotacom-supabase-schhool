import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  let mdxPosts = [];
  try { mdxPosts = await getCollection('postsMdx'); } catch (_) { mdxPosts = []; }

  const items = [
    ...mdxPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.published),
      link: `/blog/${post.data.slug}/`,
    })),
  ].sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
