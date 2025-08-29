import { createClient } from '@supabase/supabase-js';
import { logger } from './logger';

// Supabase configuration
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

// ✅ IMPORTANT: Field mapping for database schema
// - Use '_status' field for filtering (not 'status')
// - Use 'published_at' field for ordering (not 'published')
// - Field fallbacks are implemented for backward compatibility

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
    const { data: tagsData, error } = await supabase
      .from('posts_tags')
      .select('_parent_id, value')
      .in('_parent_id', postIds)
      .order('_order', { ascending: true });
      
    if (!error && tagsData) {
      tagsData.forEach((tag: any) => {
        const postId = tag._parent_id;
        if (!tagsMap.has(postId)) {
          tagsMap.set(postId, []);
        }
        tagsMap.get(postId)!.push(tag.value);
      });
    }
  } catch (error) {
    console.log('⚠️ Could not fetch tags:', error);
  }
  
  return tagsMap;
}

// Helper function to get categories for posts (if exists)
async function getCategoriesForPosts(postIds: number[]): Promise<Map<number, string[]>> {
  const categoriesMap = new Map<number, string[]>();
  
  if (postIds.length === 0) return categoriesMap;
  
  try {
    const { data: categoriesData, error } = await supabase
      .from('posts_categories')
      .select('_parent_id, value')
      .in('_parent_id', postIds)
      .order('_order', { ascending: true });
      
    if (!error && categoriesData) {
      categoriesData.forEach((category: any) => {
        const postId = category._parent_id;
        if (!categoriesMap.has(postId)) {
          categoriesMap.set(postId, []);
        }
        categoriesMap.get(postId)!.push(category.value);
      });
    }
  } catch (error) {
    console.log('⚠️ Could not fetch categories:', error);
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
    
    // 2. Fetch all media objects from Supabase
    const { data: mediaObjects, error } = await supabase
      .from('media')
      .select('*')
      .in('id', Array.from(mediaIds));
    
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
    mediaObjects.forEach(media => {
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
  limit: number = 100, 
  status: 'published' | 'draft' | 'all' = 'published' // Default hanya published
): Promise<SupabasePost[]> {
  try {
    logger.info(`Fetching ${limit} posts from Supabase with status: ${status}...`);
    
    // Build query with status filter
    let query = supabase
      .from('posts')
      .select('*')
      .order('published_at', { ascending: false }); // ✅ Use 'published_at' field for ordering

    // Filter by status - hanya ambil published posts untuk production
    if (status !== 'all') {
      query = query.eq('_status', status); // ✅ Use '_status' field for filtering
    }

    const { data, error } = await query.limit(limit);

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} posts from Supabase`);
    
    if (data && data.length > 0) {
      // Get all post IDs
      const postIds = data.map(post => post.id);
      
      // Fetch tags and categories for all posts
      const [tagsMap, categoriesMap] = await Promise.all([
        getTagsForPosts(postIds),
        getCategoriesForPosts(postIds)
      ]);
      
      // Attach tags and categories to posts and process markdown
      const { marked } = await import('marked');
      
      // Configure marked for better HTML output
      marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: false,
        mangle: false
      });
      
      const postsWithMetadata = data.map((post: any) => {
        let processedBody = post.body || '';
        
        // Convert markdown to HTML if content exists
        if (processedBody && typeof processedBody === 'string') {
          try {
            // Always process through marked for consistent HTML output
            processedBody = marked(processedBody);
            
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
          publishedAt: post.published_at || post.published || post.publishedAt || '', // ✅ Fallback: published_at -> published -> publishedAt
          updatedAt: post.updated_at || post.updatedAt || post.last_updated || post.lastUpdated || '', // ✅ Fallback: updated_at -> updatedAt -> last_updated -> lastUpdated
          createdAt: post.created_at || post.createdAt || '', // ✅ Fallback: created_at -> createdAt
          body: processedBody,
          tags: tagsMap.get(post.id) || [],
          categories: categoriesMap.get(post.id) || [],
          category: categoriesMap.get(post.id) || [],
          // Status field dengan fallback - gunakan _status sebagai primary
          status: post._status || post.status || 'draft', // ✅ Fallback: _status -> status -> default 'draft'
          // Additional fields with fallbacks
          lastUpdated: post.last_updated || post.lastUpdated || post.updated_at || post.updatedAt || '',
          format: post.format || 'article'
        };
      });
      
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
      
      // ✅ Populate media relationships dalam content blocks
      const postsWithPopulatedMedia = await populateMediaInContent(postsWithMetadata);
      
      return postsWithPopulatedMedia;
    }
    
    // ✅ Populate media untuk posts yang tidak diprocess (fallback case)
    if (data && data.length > 0) {
      const populatedData = await populateMediaInContent(data);
      return populatedData;
    }
    
    return data || [];
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

export async function getProductsDirectFromSupabase(
  limit: number = 10000,
  status: 'published' | 'draft' | 'all' = 'published' // Default hanya published
): Promise<any[]> {
  try {
    logger.info(`Fetching ${limit} products from Supabase with status: ${status}...`);
    
    // Build query with status filter
    let query = supabase
      .from('products')
      .select('*')
      .order('published_at', { ascending: false }); // ✅ Use 'published_at' field for ordering

    // Filter by status - hanya ambil published products untuk production
    if (status !== 'all') {
      query = query.eq('_status', status); // ✅ Use '_status' field for filtering
    }

    const { data, error } = await query.limit(limit);

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
    const { data: tagsData, error } = await supabase
      .from('services_tags')
      .select('_parent_id, value')
      .in('_parent_id', serviceIds)
      .order('_order', { ascending: true });
      
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
    const { data: categoriesData, error } = await supabase
      .from('services_categories')
      .select('_parent_id, value')
      .in('_parent_id', serviceIds)
      .order('_order', { ascending: true });
      
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

export async function getServicesDirectFromSupabase(limit: number = 10000, status: 'published' | 'draft' | 'all' = 'published'): Promise<any[]> {
  try {
    logger.info(`Fetching ${limit} services from Supabase with status: ${status}...`);
    
    let query = supabase
      .from('services')
      .select('*')
      .limit(limit)
      .order('published_at', { ascending: false }); // ✅ Use 'published_at' field for ordering

    // Add status filtering if not 'all'
    if (status !== 'all') {
      query = query.eq('_status', status); // ✅ Use '_status' field for filtering
    }

    const { data, error } = await query;

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    if (!data) return [];

    // Get tags and categories for services
    const serviceIds = data.map((service: any) => service.id);
    const [tagsMap, categoriesMap] = await Promise.all([
      getTagsForServices(serviceIds),
      getCategoriesForServices(serviceIds)
    ]);

    // Process markdown content for services
    const { marked } = await import('marked');
    
    // Configure marked for better HTML output
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: false,
      mangle: false
    });
    
    const processedServices = data.map((service: any) => {
      let processedBody = service.body || '';
      
      // Convert markdown to HTML if content exists
      if (processedBody && typeof processedBody === 'string') {
        try {
          processedBody = marked(processedBody);
          
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
    });

    console.log(`✅ Successfully fetched and processed ${processedServices.length} services from Supabase`);
    console.log(`🏷️ Enhanced ${processedServices.filter((s: any) => s.tags?.length > 0).length} services with tags`);
    console.log(`📂 Enhanced ${processedServices.filter((s: any) => s.category?.length > 0).length} services with categories`);
    
    return processedServices;
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

export async function getProjectsDirectFromSupabase(limit: number = 10000, status: 'published' | 'draft' | 'all' = 'published'): Promise<any[]> {
  try {
    logger.info(`Fetching ${limit} projects from Supabase with status: ${status}...`);
    
    let query = supabase
      .from('projects')
      .select('*')
      .limit(limit)
      .order('published_at', { ascending: false }); // ✅ Use 'published_at' field for ordering

    // Add status filtering if not 'all'
    if (status !== 'all') {
      query = query.eq('_status', status); // ✅ Use '_status' field for filtering
    }

    const { data, error } = await query;

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
      gfm: true,
      headerIds: false,
      mangle: false
    });
    
    const processedProjects = data.map((project: any) => {
      // Process body, description, review, and get_involved content
      let processedBody = project.body || '';
      let processedDescription = project.description || '';
      let processedReview = project.review || '';
      let processedGetInvolved = project.get_involved || '';
      
      // Helper function to process markdown with cleanup
      const processMarkdownField = (content: string): string => {
        if (!content || typeof content !== 'string') return '';
        
        try {
          let processed = marked(content);
          
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
      processedBody = processMarkdownField(processedBody);
      processedDescription = processMarkdownField(processedDescription);
      processedReview = processMarkdownField(processedReview);
      processedGetInvolved = processMarkdownField(processedGetInvolved);

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
    });

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
    status: post.status || 'published', // ✅ post.status sudah di-mapping dari _status di getPostsDirectFromSupabase
    author: post.author || 'Kotacom.id',
    source: 'supabase-direct' as const
  };
}
