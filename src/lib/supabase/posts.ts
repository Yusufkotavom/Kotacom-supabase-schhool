import { supabase, SupabasePost, MetadataMap } from './types';
import { withTimeout, cleanMarkdownContent, populateMediaInContent } from './utils';
import { logger } from '../logger';

// Helper function to get tags for posts
async function getTagsForPosts(postIds: number[]): Promise<Map<number, string[]>> {
  const tagsMap = new Map<number, string[]>();

  if (postIds.length === 0) return tagsMap;

  try {
    logger.info(`Fetching tags for ${postIds.length} posts...`);

    const { data: tagsData, error } = await withTimeout(
      supabase
        .from('posts_tags')
        .select('_parent_id, value')
        .in('_parent_id', postIds)
        .order('_order', { ascending: true }),
      12000 // Increased timeout for large batches (12 seconds)
    ) as any;

    if (!error && tagsData) {
      tagsData.forEach((tag: any) => {
        const postId = tag._parent_id;
        if (!tagsMap.has(postId)) {
          tagsMap.set(postId, []);
        }
        tagsMap.get(postId)!.push(tag.value);
      });

      logger.success(`Successfully fetched ${tagsData.length} tags for ${tagsMap.size} posts`);
    } else if (error) {
      logger.warn('Tags query error:', error);
    }
  } catch (error) {
    logger.warn('Could not fetch tags:', error);
  }

  return tagsMap;
}

// Helper function to get categories for posts (if exists)
async function getCategoriesForPosts(postIds: number[]): Promise<Map<number, string[]>> {
  const categoriesMap = new Map<number, string[]>();

  if (postIds.length === 0) return categoriesMap;

  try {
    logger.info(`Fetching categories for ${postIds.length} posts...`);

    const { data: categoriesData, error } = await withTimeout(
      supabase
        .from('posts_category')
        .select('_parent_id, value')
        .in('_parent_id', postIds)
        .order('_order', { ascending: true }),
      12000 // Increased timeout for large batches (12 seconds)
    ) as any;

    if (!error && categoriesData) {
      categoriesData.forEach((category: any) => {
        const postId = category._parent_id;
        if (!categoriesMap.has(postId)) {
          categoriesMap.set(postId, []);
        }
        categoriesMap.get(postId)!.push(category.value);
      });

      logger.success(`Successfully fetched ${categoriesData.length} categories for ${categoriesMap.size} posts`);
    } else if (error) {
      logger.warn('Categories query error:', error);
    }
  } catch (error) {
    logger.warn('Could not fetch categories:', error);
  }

  return categoriesMap;
}

export async function getPostsDirectFromSupabase(
  limit: number | null = null, // null = fetch all posts, or specify limit
  status: 'published' | 'draft' | 'all' = 'published' // Default hanya published
): Promise<SupabasePost[]> {
  try {
    const fetchMessage = limit === null ? 'all posts' : `${limit} posts`;
    logger.info(`Fetching ${fetchMessage} from Supabase with status: ${status}...`);

    // Build query with status filter - include all necessary fields for complete post data
    let query = supabase
      .from('posts')
      .select('id, title, slug, description, cover_image, published, body, status, created_at, updated_at, last_updated, format')
      .order('published', { ascending: false }); // ✅ Use 'published_at' field for ordering

    // Filter by status - hanya ambil published posts untuk production
    if (status !== 'all') {
      query = query.eq('status', status); // ✅ Use 'status' field for filtering
    }

    // Apply limit only if specified, otherwise fetch all
    if (limit !== null) {
      query = query.limit(limit);
    }

    const { data, error } = await withTimeout(query, 20000) as any; // Increased timeout for large datasets (20 seconds)

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} posts from Supabase`);

    if (data && data.length > 0) {
      // Get all post IDs
      const postIds = data.map((post: any) => post.id);

      // Fetch tags and categories for all posts with timeout
      let tagsMap = new Map<number, string[]>();
      let categoriesMap = new Map<number, string[]>();

      try {
        // Always fetch tags and categories for better content enrichment
        [tagsMap, categoriesMap] = await withTimeout(
          Promise.all([
            getTagsForPosts(postIds),
            getCategoriesForPosts(postIds)
          ]),
          15000 // Increased timeout for larger batches
        ) as [Map<number, string[]>, Map<number, string[]>];

        logger.success(`Successfully fetched tags/categories for ${postIds.length} posts`);
      } catch (error) {
        logger.warn('Failed to fetch tags/categories, continuing without metadata:', error);
        // Continue with empty maps - posts will still work without metadata
      }

      // Attach tags and categories to posts and process markdown
      const { marked } = await import('marked');

      // Configure marked for better HTML output
      marked.setOptions({
        breaks: true,
        gfm: true
      });

      // Process posts with optimization for build performance
      const postsWithMetadata = await Promise.all(data.map(async (post: any, index: number) => {
        let processedBody = post.body || '';

        // ✅ Bersihkan whitespace berlebihan dari markdown content
        if (processedBody && typeof processedBody === 'string') {
          processedBody = cleanMarkdownContent(processedBody);
        }

        // Convert markdown to HTML if content exists
        if (processedBody && typeof processedBody === 'string') {
          try {
            // Add small delay for build performance (only for large batches)
            if (data.length > 50 && index > 0 && index % 10 === 0) {
              await new Promise(resolve => setTimeout(resolve, 10)); // 10ms delay every 10 posts
            }

            // Always process through marked for consistent HTML output
            processedBody = await marked(processedBody);

            // Clean up the HTML for better prose rendering
            processedBody = processedBody
              .replace(/\n\s*\n/g, '</p>\n<p>')
              .replace(/^(?!<[ph])/gm, '<p>')
              .replace(/(?<!>)$/gm, '</p>')
              .replace(/<p><\/p>/g, '')
              .replace(/<p>(<[h|u|o|b])/g, '$1')
              .replace(/(<\/[h|u|o|b][^>]*>)<\/p>/g, '$1')
              .trim();
          } catch (error) {
            console.log('⚠️ Could not process markdown for post:', post.slug, error);
          }
        }

        return {
          ...post,
          // Field mapping dengan fallback untuk status dan published
          coverImage: post.cover_image || post.coverImage || '',
          imageUrl: post.cover_image || post.coverImage || post.imageUrl || '',
          publishedAt: post.published || post.published || post.publishedAt || '', // ✅ Fallback: published -> published -> publishedAt
          updatedAt: post.updated_at || post.updatedAt || post.last_updated || post.lastUpdated || '', // ✅ Fallback: updated_at -> updatedAt -> last_updated -> lastUpdated
          createdAt: post.created_at || post.createdAt || '', // ✅ Fallback: created_at -> createdAt
          body: processedBody,
          tags: tagsMap.get(post.id) || [],
          categories: categoriesMap.get(post.id) || [],
          category: categoriesMap.get(post.id) || [],
          // Status field dengan fallback - gunakan status sebagai primary
          status: post.status || post.status || 'draft', // ✅ Fallback: status -> status -> default 'draft'
          // Additional fields with fallbacks
          lastUpdated: post.last_updated || post.lastUpdated || post.updated_at || post.updatedAt || '',
          format: post.format || 'article'
        };
      }));

      console.log(`📋 Enhanced ${postsWithMetadata.length} posts with tags and categories`);

      // Debug first post with field mapping
      if (postsWithMetadata[0]) {
        console.log('📋 Sample enhanced post:', {
          title: postsWithMetadata[0].title,
          coverImage: postsWithMetadata[0].coverImage,
          published: postsWithMetadata[0].publishedAt,
          status: postsWithMetadata[0].status,
          tags: postsWithMetadata[0].tags,
          categories: postsWithMetadata[0].categories
        });
      }

      // ✅ Populate media relationships dalam content blocks with timeout
      const postsWithPopulatedMedia = await withTimeout(
        populateMediaInContent(postsWithMetadata),
        8000 // 8 second timeout for media population
      ) as any[];

      return postsWithPopulatedMedia;
    }

    // ✅ Populate media untuk posts yang tidak diprocess (fallback case)
    if (data && data.length > 0) {
      const populatedData = await withTimeout(
        populateMediaInContent(data),
        8000 // 8 second timeout for media population
      ) as any[];
      return populatedData;
    }

    return data || [];
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}
