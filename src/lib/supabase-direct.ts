import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

// Create supabase client only if environment variables are available
let supabase: any;

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  // During build time, create a dummy client
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      eq: () => Promise.resolve({ data: [], error: null })
    })
  };
}

export interface SupabasePost {
  id: string;
  title: string;
  body?: string;
  content?: string;
  description?: string;
  excerpt?: string;
  slug: string;
  published?: string;
  created_at?: string;
  created?: string;
  updated?: string;
  updated_at?: string;
  last_updated?: string;
  tags?: string[];
  categories?: string[];
  category?: string;
  author?: string;
  image?: string;
  imageUrl?: string;
  coverImage?: string;
  featured_image?: string;
  cover_image?: string;
  thumbnail?: string;
  status?: string;
}

export interface SupabaseProduct {
  id: string;
  title: string;
  description?: string;
  price?: number;
  file_url?: string;
  category?: string;
  tags?: string[];
  status?: string;
  created_at?: string;
}

export interface SupabaseService {
  id: string;
  title: string;
  description?: string;
  content?: string;
  category?: string;
  tags?: string[];
  image?: string;
  status?: string;
  created_at?: string;
}

export interface SupabaseProject {
  id: string;
  title: string;
  description?: string;
  content?: string;
  category?: string;
  tags?: string[];
  image?: string;
  status?: string;
  created_at?: string;
}

// Fetch tags from Supabase
export async function getTagsFromSupabase(): Promise<string[]> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.log('⚠️ Supabase environment variables not available, returning empty tags');
      return [];
    }

    const { data: tagsData, error } = await supabase
      .from('tags')
      .select('name')
      .eq('status', 'published');

    if (error) {
      console.error('❌ Error fetching tags from Supabase:', error);
      return [];
    }

    return tagsData?.map((tag: any) => tag.name) || [];
  } catch (error) {
    console.error('❌ Error fetching tags from Supabase:', error);
    return [];
  }
}

// Fetch categories from Supabase
export async function getCategoriesFromSupabase(): Promise<string[]> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.log('⚠️ Supabase environment variables not available, returning empty categories');
      return [];
    }

    const { data: categoriesData, error } = await supabase
      .from('categories')
      .select('name')
      .eq('status', 'published');

    if (error) {
      console.error('❌ Error fetching categories from Supabase:', error);
      return [];
    }

    return categoriesData?.map((category: any) => category.name) || [];
  } catch (error) {
    console.error('❌ Error fetching categories from Supabase:', error);
    return [];
  }
}

// Fetch posts directly from Supabase
export async function getPostsDirectFromSupabase(
  limit: number = 1000,
  status: 'published' | 'draft' | 'all' = 'published'
): Promise<SupabasePost[]> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.log('⚠️ Supabase environment variables not available, returning empty posts');
      return [];
    }

    console.log(`🔄 Fetching ${limit} posts directly from Supabase with status: ${status}...`);

    let query = supabase
      .from('posts')
      .select('*')
      .limit(limit);

    if (status !== 'all') {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} posts from Supabase`);

    // Process and return posts
    return data?.map((post: any) => ({
      id: post.id,
      title: post.title || 'Untitled Post',
      body: post.body || post.content || '',
      content: post.content || post.body || '',
      description: post.description || post.excerpt || '',
      excerpt: post.excerpt || post.description || '',
      slug: post.slug || post.id,
      published: post.published || post.created_at || post.created,
      created_at: post.created_at || post.created || post.published,
      created: post.created || post.created_at || post.published,
      updated: post.updated || post.updated_at || post.last_updated || post.published || post.created_at,
      updated_at: post.updated_at || post.updated || post.last_updated || post.published || post.created_at,
      last_updated: post.last_updated || post.updated || post.updated_at || post.published || post.created_at,
      tags: post.tags || [],
      categories: post.categories || [post.category || 'Blog'],
      category: post.category || 'Blog',
      author: post.author || 'Kotacom.id',
      image: post.image || post.imageUrl || post.coverImage || post.featured_image || post.cover_image || post.thumbnail || '',
      imageUrl: post.imageUrl || post.image || post.coverImage || post.featured_image || post.cover_image || post.thumbnail || '',
      coverImage: post.coverImage || post.image || post.imageUrl || post.featured_image || post.cover_image || post.thumbnail || '',
      featured_image: post.featured_image || post.image || post.imageUrl || post.coverImage || post.cover_image || post.thumbnail || '',
      cover_image: post.cover_image || post.image || post.imageUrl || post.coverImage || post.featured_image || post.thumbnail || '',
      thumbnail: post.thumbnail || post.image || post.imageUrl || post.coverImage || post.featured_image || post.cover_image || '',
      status: post.status || 'published'
    })) || [];

  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

// Fetch products directly from Supabase
export async function getProductsDirectFromSupabase(
  limit: number = 1000,
  status: 'published' | 'draft' | 'all' = 'published'
): Promise<SupabaseProduct[]> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.log('⚠️ Supabase environment variables not available, returning empty products');
      return [];
    }

    console.log(`🔄 Fetching ${limit} products directly from Supabase with status: ${status}...`);

    let query = supabase
      .from('products')
      .select('*')
      .limit(limit);

    if (status !== 'all') {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} products from Supabase`);

    // Process and return products
    return data?.map((product: any) => ({
      id: product.id,
      title: product.title || 'Untitled Product',
      description: product.description || '',
      price: product.price || 0,
      file_url: product.file_url || '',
      category: product.category || 'General',
      tags: product.tags || [],
      status: product.status || 'published',
      created_at: product.created_at || ''
    })) || [];

  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

// Fetch services directly from Supabase
export async function getServicesDirectFromSupabase(
  limit: number = 10000,
  status: 'published' | 'draft' | 'all' = 'published'
): Promise<any[]> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.log('⚠️ Supabase environment variables not available, returning empty services');
      return [];
    }

    console.log(`🔄 Fetching ${limit} services directly from Supabase with status: ${status}...`);

    let query = supabase
      .from('services')
      .select('*')
      .limit(limit);

    if (status !== 'all') {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} services from Supabase`);

    // Process services data
    const processedServices = data?.map((service: any) => ({
      id: service.id,
      title: service.title || 'Untitled Service',
      description: service.description || '',
      content: service.content || '',
      category: service.category || 'General',
      tags: service.tags || [],
      image: service.image || '',
      status: service.status || 'published',
      created_at: service.created_at || ''
    })) || [];

    console.log(`✅ Successfully fetched and processed ${processedServices.length} services from Supabase`);

    return processedServices;

  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

// Fetch projects directly from Supabase
export async function getProjectsDirectFromSupabase(
  limit: number = 10000,
  status: 'published' | 'draft' | 'all' = 'published'
): Promise<any[]> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.log('⚠️ Supabase environment variables not available, returning empty projects');
      return [];
    }

    console.log(`🔄 Fetching ${limit} projects directly from Supabase with status: ${status}...`);

    let query = supabase
      .from('projects')
      .select('*')
      .limit(limit);

    if (status !== 'all') {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} projects from Supabase`);

    // Process projects data
    const processedProjects = data?.map((project: any) => ({
      id: project.id,
      title: project.title || 'Untitled Project',
      description: project.description || '',
      content: project.content || '',
      category: project.category || 'General',
      tags: project.tags || [],
      image: project.image || '',
      status: project.status || 'published',
      created_at: project.created_at || ''
    })) || [];

    console.log(`✅ Successfully fetched and processed ${processedProjects.length} projects from Supabase`);

    return processedProjects;

  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}

// Helper function to convert Supabase post to Astro-friendly format
export function convertSupabasePost(post: SupabasePost) {
  return {
    data: {
      title: post.title,
      description: post.description || post.excerpt || '',
      published: post.published ? new Date(post.published) : (post.created_at ? new Date(post.created_at) : new Date()),
      lastUpdated: post.updated ? new Date(post.updated) : (post.updated_at ? new Date(post.updated_at) : (post.last_updated ? new Date(post.last_updated) : new Date())),
      tags: post.tags || [],
      author: post.author || 'Kotacom.id'
    },
    slug: post.slug,
    url: `/posts/${post.slug}`,
    source: 'supabase-direct' as const
  };
}
