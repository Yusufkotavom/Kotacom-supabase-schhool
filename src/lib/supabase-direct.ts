import { createClient } from '@supabase/supabase-js';
import { logger } from './logger';

// Supabase configuration
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

// ✅ IMPORTANT: Field mapping for database schema
// - Use 'status' field for filtering (not 'status')
// - Use 'published' field for ordering (not 'published') for products/services/projects
// - Use 'published' field for ordering for posts table
// - Field fallbacks are implemented for backward compatibility

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper function to add timeout to Supabase queries
async function withTimeout<T>(
  query: Promise<T> | any,
  timeoutMs: number = 30000
): Promise<T> {
  // If it's already a promise, use it directly
  const promise = query instanceof Promise ? query : query;

  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`Query timeout after ${timeoutMs}ms`)), timeoutMs)
    )
  ]);
}

// ✅ Utility function untuk membersihkan whitespace berlebihan
function cleanWhitespace(text: string): string {
  if (!text || typeof text !== 'string') return '';

  // Split by lines, process each line, then join back
  const lines = text
    .split(/\r?\n/) // Split by line endings (handle both \r\n and \n)
    .map(line => line.trim()) // Trim each line (remove leading/trailing spaces)
    .filter(line => line.length > 0); // Remove empty lines

  // Join with double line breaks for proper markdown formatting
  return lines.join('\n\n').trim();
}

// ✅ Utility function untuk membersihkan markdown content
function cleanMarkdownContent(content: string): string {
  if (!content || typeof content !== 'string') return '';

  return cleanWhitespace(content)
    // Pastikan tidak ada empty lines di awal/akhir yang berlebihan
    .replace(/^\n+|\n+$/g, '')
    // Untuk markdown, pastikan ada line break minimal antara paragraphs
    // tapi jangan terlalu agresif - hanya ganti single line dengan double line jika diperlukan
    .replace(/([.!?])\n([A-Z])/g, '$1\n\n$2');
}

export interface SupabasePost {
  id: string;
  title?: string;
  slug?: string;
  description?: string;
  coverImage?: string;
  imageUrl?: string;
  published?: string;
  publishedAt?: string;
  tags?: any[];
  category?: any[];
  body?: string;
  content?: any; // ✅ Add support for Lexical Editor blocks
  status?: string;
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  // Add new fields for fallback support
  lastUpdated?: string;
  format?: string;
}

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

// ✅ Function untuk populate media relationships dalam Lexical content
async function populateMediaInContent(posts: any[]): Promise<any[]> {
  try {
    // 1. Collect all media IDs from all posts' content
    const mediaIds = new Set<number>();
    
    posts.forEach(post => {
      if (post.content && typeof post.content === 'object') {
        collectMediaIds(post.content, mediaIds);
      }
    });
    
    if (mediaIds.size === 0) {
      return posts;
    }
    
    logger.debug(`Populating ${mediaIds.size} media objects`);
    
    // 2. Fetch all media objects from Supabase with timeout
    const { data: mediaObjects, error } = await withTimeout(
      supabase
        .from('media')
        .select('*')
        .in('id', Array.from(mediaIds)),
      10000 // 10 second timeout for media query
    ) as any;
    
    if (error) {
      console.error('❌ Error fetching media objects:', error);
      return posts;
    }
    
    if (!mediaObjects || mediaObjects.length === 0) {
      console.warn('⚠️ No media objects found for IDs:', Array.from(mediaIds));
      return posts;
    }
    
    console.log(`✅ Successfully fetched ${mediaObjects.length} media objects`);
    
    // 3. Create media map for quick lookup
    const mediaMap = new Map<number, any>();
    mediaObjects.forEach((media: any) => {
      mediaMap.set(media.id, media);
    });
    
    // 4. Replace media IDs with full objects in each post's content
    const populatedPosts = posts.map(post => {
      if (post.content && typeof post.content === 'object') {
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
    console.error('❌ Error populating media in content:', error);
    return posts;
  }
}

// ✅ Recursive function untuk collect media IDs dari Lexical structure
function collectMediaIds(obj: any, mediaIds: Set<number>): void {
  if (!obj || typeof obj !== 'object') return;
  
  if (Array.isArray(obj)) {
    obj.forEach(item => collectMediaIds(item, mediaIds));
    return;
  }
  
  // Check untuk MediaBlock structure
  if (obj.blockType === 'mediaBlock' && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === 'number') {
      mediaIds.add(mediaId);
    }
  }
  
  // Check untuk block structure dalam Lexical root/children
  if (obj.type === 'block' && obj.fields?.blockType === 'mediaBlock' && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === 'number') {
      mediaIds.add(mediaId);
    }
  }
  
  // Recursive check untuk nested objects
  Object.values(obj).forEach(value => {
    if (value && typeof value === 'object') {
      collectMediaIds(value, mediaIds);
    }
  });
}

// ✅ Recursive function untuk replace media IDs dengan full objects
function populateMediaIds(obj: any, mediaMap: Map<number, any>): any {
  if (!obj || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => populateMediaIds(item, mediaMap));
  }
  
  // Check untuk MediaBlock structure
  if (obj.blockType === 'mediaBlock' && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === 'number' && mediaMap.has(mediaId)) {
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
  
  // Check untuk block structure dalam Lexical root/children
  if (obj.type === 'block' && obj.fields?.blockType === 'mediaBlock' && obj.fields?.media) {
    const mediaId = obj.fields.media;
    if (typeof mediaId === 'number' && mediaMap.has(mediaId)) {
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
  
  // Recursive replacement untuk nested objects
  const result: any = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === 'object') {
      result[key] = populateMediaIds(value, mediaMap);
    } else {
      result[key] = value;
    }
  });
  
  return result;
}

export async function getPostsDirectFromSupabase(
  limit: number = null, // null = fetch all posts, or specify limit
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

export async function getProductsDirectFromSupabase(
  limit: number = 1000, // Reduced from 1000 for build performance
  status: 'published' | 'draft' | 'all' = 'published' // Default hanya published
): Promise<any[]> {
  try {
    logger.info(`Fetching ${limit} products from Supabase with status: ${status}...`);
    
    // Build query with status filter
    let query = supabase
      .from('products')
      .select('*')
      .order('published', { ascending: false }); // ✅ Use 'published' field for ordering

    // Filter by status - hanya ambil published products untuk production
    if (status !== 'all') {
      query = query.eq('status', status); // ✅ Use 'status' field for products
    }

    const { data, error } = await withTimeout(query.limit(limit), 15000) as any; // 15 second timeout

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} products from Supabase`);
    return data || [];
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

// Helper function to get tags for services
async function getTagsForServices(serviceIds: number[]): Promise<Map<number, string[]>> {
  const tagsMap = new Map<number, string[]>();
  
  if (serviceIds.length === 0) return tagsMap;
  
  try {
    const { data: tagsData, error } = await withTimeout(
      supabase
        .from('services_tags')
        .select('_parent_id, value')
        .in('_parent_id', serviceIds)
        .order('_order', { ascending: true }),
      8000 // 8 second timeout for service tags query
    ) as any;
      
    if (!error && tagsData) {
      tagsData.forEach((tag: any) => {
        const serviceId = tag._parent_id;
        if (!tagsMap.has(serviceId)) {
          tagsMap.set(serviceId, []);
        }
        tagsMap.get(serviceId)!.push(tag.value);
      });
    }
  } catch (error) {
    console.log('⚠️ Could not fetch service tags:', error);
  }
  
  return tagsMap;
}

// Helper function to get categories for services
async function getCategoriesForServices(serviceIds: number[]): Promise<Map<number, string[]>> {
  const categoriesMap = new Map<number, string[]>();
  
  if (serviceIds.length === 0) return categoriesMap;
  
  try {
    const { data: categoriesData, error } = await withTimeout(
      supabase
        .from('services_categories')
        .select('_parent_id, value')
        .in('_parent_id', serviceIds)
        .order('_order', { ascending: true }),
      8000 // 8 second timeout for service categories query
    ) as any;
      
    if (!error && categoriesData) {
      categoriesData.forEach((category: any) => {
        const serviceId = category._parent_id;
        if (!categoriesMap.has(serviceId)) {
          categoriesMap.set(serviceId, []);
        }
        categoriesMap.get(serviceId)!.push(category.value);
      });
    }
  } catch (error) {
    console.log('⚠️ Could not fetch service categories:', error);
  }
  
  return categoriesMap;
}

export async function getServicesDirectFromSupabase(limit: number = 200, status: 'published' | 'draft' | 'all' = 'published'): Promise<any[]> {
  try {
    logger.info(`Fetching ${limit} services from Supabase with status: ${status}...`);

    let query = supabase
      .from('services')
      .select('*')
      .limit(limit)
      .order('published', { ascending: false }); // ✅ Use 'published' field for ordering

    // Add status filtering if not 'all'
    if (status !== 'all') {
      query = query.eq('status', status); // ✅ Use 'status' field for services
    }

    const { data, error } = await withTimeout(query, 15000) as any; // 15 second timeout

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    if (!data) return [];

    // Get tags and categories for services with timeout
    const serviceIds = data.map((service: any) => service.id);
    const [tagsMap, categoriesMap] = await withTimeout(
      Promise.all([
        getTagsForServices(serviceIds),
        getCategoriesForServices(serviceIds)
      ]),
      10000 // 10 second timeout for metadata fetching
    ) as [Map<number, string[]>, Map<number, string[]>];

    // Process markdown content for services
    const { marked } = await import('marked');
    
    // Configure marked for better HTML output
    marked.setOptions({
      breaks: true,
      gfm: true
    });
    
    const processedServices = await Promise.all(data.map(async (service: any) => {
      let processedBody = service.body || '';

      // ✅ Bersihkan whitespace berlebihan dari markdown content
      if (processedBody && typeof processedBody === 'string') {
        processedBody = cleanMarkdownContent(processedBody);
      }

      // Convert markdown to HTML if content exists
      if (processedBody && typeof processedBody === 'string') {
        try {
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
          console.log('⚠️ Could not process markdown for service:', service.slug, error);
        }
      }

      return {
        ...service,
        body: processedBody,
        tags: tagsMap.get(service.id) || [],
        category: categoriesMap.get(service.id) || Array.isArray(service.category) ? service.category : [],
        // Ensure proper field mappings
        imageUrl1: service.imageUrl1 || service.cover_image || '',
        wilayah: Array.isArray(service.wilayah) ? service.wilayah : [],
        type: Array.isArray(service.type) ? service.type : [],
      };
    }));

    console.log(`✅ Successfully fetched and processed ${processedServices.length} services from Supabase`);
    console.log(`🏷️ Enhanced ${processedServices.filter((s: any) => s.tags?.length > 0).length} services with tags`);
    console.log(`📂 Enhanced ${processedServices.filter((s: any) => s.category?.length > 0).length} services with categories`);
    
    return processedServices;
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

export async function getProjectsDirectFromSupabase(limit: number = 200, status: 'published' | 'draft' | 'all' = 'published'): Promise<any[]> {
  try {
    logger.info(`Fetching ${limit} projects from Supabase with status: ${status}...`);

    let query = supabase
      .from('projects')
      .select('*')
      .limit(limit)
      .order('published', { ascending: false }); // ✅ Use 'published' field for ordering

    // Add status filtering if not 'all'
    if (status !== 'all') {
      query = query.eq('status', status); // ✅ Use 'status' field for projects
    }

    const { data, error } = await withTimeout(query, 15000) as any; // 15 second timeout

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    if (!data) return [];

    // Process markdown content for projects
    const { marked } = await import('marked');
    
    // Configure marked for better HTML output
    marked.setOptions({
      breaks: true,
      gfm: true
    });
    
    const processedProjects = await Promise.all(data.map(async (project: any) => {
      // ✅ Bersihkan whitespace berlebihan dari semua markdown fields
      let processedBody = cleanMarkdownContent(project.body || '');
      let processedDescription = cleanMarkdownContent(project.description || '');
      let processedReview = cleanMarkdownContent(project.review || '');
      let processedGetInvolved = cleanMarkdownContent(project.get_involved || '');

      // Helper function to process markdown with cleanup
      const processMarkdownField = async (content: string): Promise<string> => {
        if (!content || typeof content !== 'string') return '';

        try {
          let processed = await marked(content);

          // Clean up the HTML for better prose rendering
          processed = processed
            .replace(/\n\s*\n/g, '</p>\n<p>')
            .replace(/^(?!<[ph])/gm, '<p>')
            .replace(/(?<!>)$/gm, '</p>')
            .replace(/<p><\/p>/g, '')
            .replace(/<p>(<[h|u|o|b])/g, '$1')
            .replace(/(<\/[h|u|o|b][^>]*>)<\/p>/g, '$1')
            .trim();

          return processed;
        } catch (error) {
          console.log('⚠️ Could not process markdown for project field:', project.slug, error);
          return content;
        }
      };

      // Convert markdown to HTML for each field
      processedBody = await processMarkdownField(processedBody);
      processedDescription = await processMarkdownField(processedDescription);
      processedReview = await processMarkdownField(processedReview);
      processedGetInvolved = await processMarkdownField(processedGetInvolved);

      return {
        id: project.id,
        title: project.title,
        slug: project.slug,
        organiser: project.organiser,
        imageUrl: project.image_url || '', // Map image_url to imageUrl
        published: project.published,
        description: processedDescription,
        body: processedBody,
        format: project.format,
        updated_at: project.updated_at,
        created_at: project.created_at,
        url: project.url,
        gyg_url: project.gyg_url,
        maps_url: project.maps_url,
        verify: project.verify || '',
        review: processedReview,
        get_involved: processedGetInvolved,
        // Legacy field mappings for compatibility
        country: [],
        locale: [],
        cost: [],
        category: [],
      };
    }));

    console.log(`✅ Successfully fetched and processed ${processedProjects.length} projects from Supabase`);
    return processedProjects;
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}




// Helper function to process Payload JSON fields
export function processPayloadField(field: any): any[] {
  if (!field) return [];
  if (typeof field === 'string') {
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

// Convert Supabase post to Astro-friendly format
export function convertSupabasePost(post: SupabasePost) {
  return {
    id: post.id,
    title: post.title || '',
    slug: post.slug || '',
    description: post.description || '',
    imageUrl: post.imageUrl || post.coverImage || '',
    coverImage: post.coverImage || post.imageUrl || '',
    image: post.imageUrl || post.coverImage || '',
    published: post.published ? new Date(post.published) : (post.publishedAt ? new Date(post.publishedAt) : new Date()),
    publishedAt: post.publishedAt ? new Date(post.publishedAt) : (post.published ? new Date(post.published) : new Date()),
    updated: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    tags: processPayloadField(post.tags).map((t: any) => t.value || t),
    category: processPayloadField(post.category).map((c: any) => c.value || c),
    body: post.body || '', // ✅ Body tetap markdown string
    content: post.content || null, // ✅ Content untuk Lexical Editor blocks
    status: post.status || 'published', // ✅ post.status sudah di-mapping dari status di getPostsDirectFromSupabase
    author: post.author || 'Kotacom.id',
    source: 'supabase-direct' as const
  };
}
