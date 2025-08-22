import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPostsDirectFromSupabase, convertSupabasePost } from '../lib/supabase-direct';

export async function GET(context) {
  let mdxPosts = [];
  try { 
    mdxPosts = await getCollection('postsMdx'); 
  } catch (_) { 
    mdxPosts = []; 
  }
  
  const supabasePosts = await getPostsDirectFromSupabase(200);
  const supa = supabasePosts.map(convertSupabasePost);

  // Transform posts to RSS format with proper validation
  const items = [
    ...mdxPosts.map((post) => ({
      title: post.data.title || 'Untitled Post',
      description: post.data.description || 'No description available',
      pubDate: new Date(post.data.published || Date.now()),
      link: `/${post.data.slug}/`,
    })),
    ...supa.map((post) => ({
      title: post.data.title || 'Untitled Post',
      description: post.data.description || 'No description available',
      pubDate: new Date(post.data.published || Date.now()),
      link: post.url || `/${post.slug}/`,
    })),
  ]
  .filter(item => item.title && item.description) // Filter out invalid items
  .sort((a, b) => b.pubDate - a.pubDate)
  .slice(0, 100);

  // Ensure we have valid items for RSS
  if (items.length === 0) {
    console.warn('⚠️ No valid RSS items found, creating fallback');
    items.push({
      title: 'Welcome to Kotacom',
      description: 'Latest posts and updates from Kotacom',
      pubDate: new Date(),
      link: '/',
    });
  }

  return rss({
    title: SITE_TITLE || 'Kotacom Blog',
    description: SITE_DESCRIPTION || 'Latest posts and updates from Kotacom',
    site: context.site || 'https://kotacom.id',
    items,
  });
}
