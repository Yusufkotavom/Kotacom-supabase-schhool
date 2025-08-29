// Helper functions untuk fetch data dari Payload API dengan media yang sudah populated

import { logger } from './logger';

export interface PayloadPost {
  id: number;
  title: string;
  slug: string;
  content: any; // Lexical content dengan populated media
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  _status?: 'draft' | 'published';
  coverImage?: string;
  description?: string;
  category?: Array<{ value: string; id?: string }>;
  tags?: Array<{ value: string; id?: string }>;
  format?: 'md' | 'html';
  body?: string;
  authors?: any[];
  heroImage?: any;
  meta?: {
    title?: string;
    description?: string;
    image?: any;
  };
}

export interface PayloadApiResponse {
  docs: PayloadPost[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage?: number;
  prevPage?: number;
  meta: {
    populatedAt: string;
    mediaPopulated: boolean;
  };
}

// Get Payload API URL
function getPayloadApiUrl(): string {
  // Try environment variables (both import.meta.env and process.env for compatibility)
  const payloadUrl = 
    import.meta.env.PAYLOAD_PUBLIC_SERVER_URL ||
    import.meta.env.PUBLIC_PAYLOAD_URL ||
    process.env.PAYLOAD_PUBLIC_SERVER_URL ||
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.PAYLOAD_SERVER_URL ||
    'http://localhost:3000'; // fallback for development
  
  return payloadUrl;
}

/**
 * Fetch posts dari Payload API dengan media yang sudah populated
 */
export async function getPostsFromPayload(options: {
  limit?: number;
  page?: number;
  status?: 'published' | 'draft' | 'all';
} = {}): Promise<PayloadPost[]> {
  const { limit = 100, page = 1, status = 'published' } = options;
  
  try {
    const payloadUrl = getPayloadApiUrl();
    const url = new URL('/api/posts-populated', payloadUrl);
    
    // Add query parameters
    url.searchParams.set('limit', limit.toString());
    url.searchParams.set('page', page.toString());
    url.searchParams.set('status', status);
    
    logger.apiDebug(`Fetching posts from Payload API: ${url.toString()}`);
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: PayloadApiResponse = await response.json();
    
    logger.success(`Successfully fetched ${data.docs.length} posts from Payload API`);
    logger.info(`Total docs: ${data.totalDocs}, Page: ${data.page}/${data.totalPages}`);
    
    // Debug: Minimal check for media population
    if (data.docs.length > 0) {
      const contentStr = JSON.stringify(data.docs[0].content || {});
      const mediaBlockCount = (contentStr.match(/mediaBlock/g) || []).length;
      if (mediaBlockCount > 0) {
        logger.debug(`Found ${mediaBlockCount} MediaBlocks in posts`);
      }
    }
    
    return data.docs;
    
  } catch (error) {
    logger.error('❌ Error fetching posts from Payload API:', error);
    
    // Fallback: return empty array instead of throwing
    return [];
  }
}

/**
 * Fetch single post by slug dari Payload API
 */
export async function getPostBySlugFromPayload(slug: string): Promise<PayloadPost | null> {
  try {
    const payloadUrl = getPayloadApiUrl();
    const url = new URL('/api/posts-populated', payloadUrl);
    
    // Add query parameters untuk filter by slug
    url.searchParams.set('limit', '1');
    url.searchParams.set('where[slug][equals]', slug);
    
    logger.apiDebug(`Fetching post by slug from Payload API: ${slug}`);
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: PayloadApiResponse = await response.json();
    
    if (data.docs.length === 0) {
      logger.warn(`Post not found: ${slug}`);
      return null;
    }
    
    const post = data.docs[0];
    logger.success(`Successfully fetched post: ${post.title}`);
    
    return post;
    
  } catch (error) {
    logger.error(`Error fetching post ${slug} from Payload API:`, error);
    return null;
  }
}

/**
 * Convert PayloadPost to format yang compatible dengan existing Astro code
 */
export function convertPayloadPost(post: PayloadPost): any {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    content: post.content, // Already populated!
    description: post.description || post.meta?.description || '',
    published: post.publishedAt || post.createdAt,
    updated: post.updatedAt,
    created_at: post.createdAt,
    updated_at: post.updatedAt,
    _status: post._status || 'published',
    status: post._status || 'published',
    coverImage: post.coverImage || '',
    cover_image: post.coverImage || '',
    imageUrl: post.coverImage || '',
    body: post.body || '',
    format: post.format || 'md',
    category: post.category || [],
    tags: post.tags || [],
    authors: post.authors || [],
    heroImage: post.heroImage,
    meta: post.meta,
  };
}
