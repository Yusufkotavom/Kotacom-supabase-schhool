import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import DOMPurify from 'isomorphic-dompurify';

export type PayloadDoc<T> = T & { id: string };

const API_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://172.29.32.1:3000';

async function fetchJSON(path: string, limit: number = 100): Promise<any[]> {
  if (!API_URL) {
    console.log('❌ No API_URL configured');
    return [];
  }
  try {
    // Use reasonable limit to avoid timeout
    const safeLimit = Math.min(limit, 100);
    const url = `${API_URL}/api/${path}?limit=${safeLimit}&depth=0`;
    console.log(`🔄 Fetching ${url}`);
    
    // Add timeout for Heroku requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
    
    const res = await fetch(url, { 
      signal: controller.signal,
      headers: {
        'User-Agent': 'Astro-Build/1.0',
        'Accept': 'application/json'
      }
    });
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      console.log(`❌ HTTP error: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    console.log(`✅ ${path}: found ${data?.docs?.length || 0} items (total: ${data?.totalDocs || 0})`);
    return Array.isArray(data?.docs) ? data.docs : [];
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.log(`⏰ Timeout for ${path} - Heroku might be sleeping`);
    } else {
      console.log(`❌ Fetch error for ${path}:`, error);
    }
    return [];
  }
}

// Advanced fetch with query parameters
async function fetchJSONWithQuery(path: string, params: Record<string, any> = {}): Promise<any[]> {
  if (!API_URL) {
    console.log('❌ No API_URL configured');
    return [];
  }
  try {
    const queryParams = new URLSearchParams();
    
    // Set default parameters with safe limits
    queryParams.set('limit', params.limit?.toString() || '100');
    queryParams.set('depth', params.depth?.toString() || '0');
    
    // Override limit if it's too high to prevent timeout
    if (parseInt(params.limit || '100') > 500) {
      queryParams.set('limit', '100');
      console.log('⚠️ Limit reduced to 100 to prevent timeout');
    }
    
    // Add any additional parameters
    Object.entries(params).forEach(([key, value]) => {
      if (key !== 'limit' && key !== 'depth' && value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(v => queryParams.append(key, v.toString()));
        } else {
          queryParams.set(key, value.toString());
        }
      }
    });
    
    const url = `${API_URL}/api/${path}?${queryParams.toString()}`;
    console.log(`🔄 Fetching ${url}`);
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`❌ HTTP error: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    console.log(`✅ ${path}: found ${data?.docs?.length || 0} items (total: ${data?.totalDocs || 0})`);
    return Array.isArray(data?.docs) ? data.docs : [];
  } catch (error) {
    console.log(`❌ Fetch error for ${path}:`, error);
    return [];
  }
}

export async function payloadGetPosts(limit = 50) { 
  // For build time, use pagination to get ALL posts
  if (limit > 500) {
    console.log('🔄 Using pagination to fetch all posts...');
    return payloadGetAllPaginated('posts', { maxTotal: limit, pageSize: 100 });
  }
  return fetchJSON('posts', limit); 
}

// Get only published posts (backward compatibility)
export async function payloadGetPublishedPosts(limit = 50) {
  return fetchJSONWithQuery('posts', {
    limit,
    'where[or]': [
      { 'status[equals]': 'published' }, // Status field
      { 'status[exists]': false }, // Fallback for old posts without status
    ]
  });
}

// Get posts with specific status
export async function payloadGetPostsByStatus(status: 'draft' | 'published', limit = 50) {
  return fetchJSONWithQuery('posts', {
    limit,
    'where[status][equals]': status
  });
}

export async function payloadGetProjects(limit = 1000) { 
  return fetchJSON('projects', limit); 
}

export async function payloadGetProducts(limit = 100) { 
  return fetchJSON('products', limit); 
}

// Get only published products (backward compatibility)
export async function payloadGetPublishedProducts(limit = 100) {
  return fetchJSONWithQuery('products', {
    limit,
    'where[or]': [
      { 'status[equals]': 'published' }, // Status field
      { 'status[exists]': false }, // Fallback for old products without status
    ]
  });
}

// Get products with specific status
export async function payloadGetProductsByStatus(status: 'draft' | 'published', limit = 100) {
  return fetchJSONWithQuery('products', {
    limit,
    'where[status][equals]': status
  });
}

// Get draft versions of posts
export async function payloadGetPostVersions(limit = 50) {
  return fetchJSON('posts/versions', limit);
}

// Get draft versions of products  
export async function payloadGetProductVersions(limit = 100) {
  return fetchJSON('products/versions', limit);
}

// Get specific post with its latest draft
export async function payloadGetPostWithDraft(id: string) {
  try {
    const url = `${API_URL}/api/posts/${id}?draft=true&depth=0`;
    console.log(`🔄 Fetching draft: ${url}`);
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`❌ HTTP error: ${res.status} ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    console.log(`✅ Draft loaded for post ${id}`);
    return data;
  } catch (error) {
    console.log(`❌ Draft fetch error for post ${id}:`, error);
    return null;
  }
}

// Get specific product with its latest draft
export async function payloadGetProductWithDraft(id: string) {
  try {
    const url = `${API_URL}/api/products/${id}?draft=true&depth=0`;
    console.log(`🔄 Fetching draft: ${url}`);
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`❌ HTTP error: ${res.status} ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    console.log(`✅ Draft loaded for product ${id}`);
    return data;
  } catch (error) {
    console.log(`❌ Draft fetch error for product ${id}:`, error);
    return null;
  }
}

export async function payloadGetServices(limit = 1000) { 
  const services = await fetchJSON('services', limit);
  // Process services to ensure description is populated
  return services.map(service => ({
    ...service,
    description: service.description || renderPayloadBody(service) || service.body || ''
  }));
}

export async function payloadGetPages(limit = 100) { 
  return fetchJSON('pages', limit); 
}

// Get all items with pagination (for large datasets)
export async function payloadGetAllPaginated(collection: 'posts' | 'products' | 'projects' | 'services', 
  options: { 
    status?: 'draft' | 'published' | 'archived';
    maxTotal?: number;
    pageSize?: number;
  } = {}
): Promise<any[]> {
  const { status, maxTotal = 1000, pageSize = 50 } = options;
  
  let allItems: any[] = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore && allItems.length < maxTotal) {
    const params: Record<string, any> = {
      limit: Math.min(pageSize, maxTotal - allItems.length),
      page
    };
    
    if (status) {
      params['where[status][equals]'] = status;
    }
    
    try {
      const items = await fetchJSONWithQuery(collection, params);
      
      if (items.length === 0) {
        hasMore = false;
      } else {
        allItems.push(...items);
        page++;
        
        // If we got less than pageSize, we've reached the end
        if (items.length < pageSize) {
          hasMore = false;
        }
      }
    } catch (error) {
      console.log(`❌ Error fetching page ${page}:`, error);
      hasMore = false;
    }
  }
  
  console.log(`✅ ${collection}: collected ${allItems.length} items total`);
  return allItems;
}

// Advanced product fetching with filtering
export async function payloadGetProductsFiltered(options: {
  limit?: number;
  category?: string[];
  country?: string[];
  locale?: string[];
  publishedAfter?: string; // Filter products published after this date
  publishedBefore?: string; // Filter products published before this date
  hasPrice?: boolean; // Filter products with or without price
  isSponsored?: boolean; // Filter sponsored products
  priority?: string; // Filter by priority (featured, bestseller, etc)
  status?: 'draft' | 'published'; // Filter by status
  onlyPublished?: boolean; // Quick filter for published items only
  sort?: string;
} = {}) {
  const params: Record<string, any> = {
    limit: options.limit || 1000,
  };
  
  // Handle status filtering
  if (options.status) {
    params['where[status][equals]'] = options.status;
  } else if (options.onlyPublished) {
    // Get published items or items without status (backward compatibility)
    params['where[or]'] = JSON.stringify([
      { 'status[equals]': 'published' },
      { 'status[exists]': false }
    ]);
  }
  
  // Add filtering parameters
  if (options.category?.length) {
    params['where[category.value][in]'] = options.category.join(',');
  }
  
  if (options.country?.length) {
    params['where[country.value][in]'] = options.country.join(',');
  }
  
  if (options.locale?.length) {
    params['where[locale.value][in]'] = options.locale.join(',');
  }
  
  if (options.publishedAfter) {
    params['where[published][greater_than]'] = options.publishedAfter;
  }
  
  if (options.publishedBefore) {
    params['where[published][less_than]'] = options.publishedBefore;
  }
  
  if (options.hasPrice !== undefined) {
    if (options.hasPrice) {
      params['where[price][exists]'] = 'true';
    } else {
      params['where[price][exists]'] = 'false';
    }
  }
  
  if (options.isSponsored !== undefined) {
    params['where[isSponsored][equals]'] = options.isSponsored.toString();
  }
  
  if (options.priority) {
    params['where[priority][equals]'] = options.priority;
  }
  
  if (options.sort) {
    params.sort = options.sort;
  }
  
  return fetchJSONWithQuery('products', params);
}

// Advanced posts fetching with filtering
export async function payloadGetPostsFiltered(options: {
  limit?: number;
  tags?: string[];
  publishedAfter?: string;
  publishedBefore?: string;
  status?: 'draft' | 'published'; // Filter by status
  onlyPublished?: boolean;
  sort?: string;
} = {}) {
  const params: Record<string, any> = {
    limit: options.limit || 1000,
  };
  
  // Handle status filtering
  if (options.status) {
    params['where[status][equals]'] = options.status;
  } else if (options.onlyPublished) {
    // Get published items or items without status (backward compatibility)
    params['where[or]'] = JSON.stringify([
      { 'status[equals]': 'published' },
      { 'status[exists]': false }
    ]);
  }
  
  if (options.tags?.length) {
    params['where[tags.value][in]'] = options.tags.join(',');
  }
  
  if (options.publishedAfter) {
    params['where[published][greater_than]'] = options.publishedAfter;
  }
  
  if (options.publishedBefore) {
    params['where[published][less_than]'] = options.publishedBefore;
  }
  
  if (options.sort) {
    params.sort = options.sort;
  }
  
  return fetchJSONWithQuery('posts', params);
}

// --- MarkdownIt instance (singleton) ---
const md = new MarkdownIt({
  html: true,        // izinkan HTML inline di markdown
  linkify: true,     // auto-link URL
  typographer: true, // kutipan pintar, dll
  breaks: true,      // '\n' -> <br>
  highlight(code: string, lang: string): string {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>` + hljs.highlight(code, { language: lang }).value + `</code></pre>`;
      } catch {}
    }
    // fallback tanpa bahasa
    const escaped: string = md.utils.escapeHtml(code);
    return `<pre class="hljs"><code>${escaped}</code></pre>`;
  },
});

export function renderPayloadBody(doc: { body?: string; format?: 'md' | 'html' }): string {
  if (!doc?.body) return '';
  const rawHtml = doc.format === 'html' ? doc.body : md.render(doc.body);
  // Sanitasi supaya aman untuk dipasang di React/Astro/Next
  const safeHtml = DOMPurify.sanitize(rawHtml);
  return safeHtml;
}

// ==== DRAFT VERSIONING FUNCTIONS ====

// Get all posts with draft support
export async function payloadGetPostsWithDrafts(options: {
  limit?: number;
  includeDrafts?: boolean; // Include draft versions
  onlyDrafts?: boolean; // Only get drafts
  status?: 'draft' | 'published';
  category?: string[];
  tags?: string[];
  sort?: string;
} = {}) {
  const params: Record<string, any> = {
    limit: options.limit || 50,
  };
  
  // Handle draft inclusion
  if (options.includeDrafts) {
    params['draft'] = 'true';
  }
  
  // Handle status filtering for _status field (built-in Payload versioning)
  if (options.onlyDrafts) {
    params['where[_status][equals]'] = 'draft';
  } else if (options.status) {
    // Use custom status field for filtering
    params['where[status][equals]'] = options.status;
  }
  
  // Add other filtering parameters
  if (options.category?.length) {
    params['where[category.value][in]'] = options.category.join(',');
  }
  
  if (options.tags?.length) {
    params['where[tags.value][in]'] = options.tags.join(',');
  }
  
  if (options.sort) {
    params['sort'] = options.sort;
  }
  
  return fetchJSONWithQuery('posts', params);
}

// Get all products with draft support
export async function payloadGetProductsWithDrafts(options: {
  limit?: number;
  includeDrafts?: boolean; // Include draft versions
  onlyDrafts?: boolean; // Only get drafts
  status?: 'draft' | 'published';
  category?: string[];
  tags?: string[];
  sort?: string;
} = {}) {
  const params: Record<string, any> = {
    limit: options.limit || 100,
  };
  
  // Handle draft inclusion
  if (options.includeDrafts) {
    params['draft'] = 'true';
  }
  
  // Handle status filtering for _status field (built-in Payload versioning)
  if (options.onlyDrafts) {
    params['where[_status][equals]'] = 'draft';
  } else if (options.status) {
    // Use custom status field for filtering
    params['where[status][equals]'] = options.status;
  }
  
  // Add other filtering parameters
  if (options.category?.length) {
    params['where[category.value][in]'] = options.category.join(',');
  }
  
  if (options.tags?.length) {
    params['where[tags.value][in]'] = options.tags.join(',');
  }
  
  if (options.sort) {
    params['sort'] = options.sort;
  }
  
  return fetchJSONWithQuery('products', params);
}

