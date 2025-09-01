import { supabase } from './types';

// Helper function to add timeout to Supabase queries
export async function withTimeout<T>(
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
export function cleanWhitespace(text: string): string {
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
export function cleanMarkdownContent(content: string): string {
  if (!content || typeof content !== 'string') return '';

  return cleanWhitespace(content)
    // Pastikan tidak ada empty lines di awal/akhir yang berlebihan
    .replace(/^\n+|\n+$/g, '')
    // Untuk markdown, pastikan ada line break minimal antara paragraphs
    // tapi jangan terlalu agresif - hanya ganti single line dengan double line jika diperlukan
    .replace(/([.!?])\n([A-Z])/g, '$1\n\n$2');
}

// ✅ Recursive function untuk collect media IDs dari Lexical structure
export function collectMediaIds(obj: any, mediaIds: Set<number>): void {
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
export function populateMediaIds(obj: any, mediaMap: Map<number, any>): any {
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

// ✅ Function untuk populate media relationships dalam Lexical content
export async function populateMediaInContent(posts: any[]): Promise<any[]> {
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

    console.log(`🎯 Populating ${mediaIds.size} media objects`);

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
export function convertSupabasePost(post: any) {
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
