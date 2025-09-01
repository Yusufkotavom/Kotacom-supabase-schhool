import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

// ✅ IMPORTANT: Field mapping for database schema
// - Use 'status' field for filtering (not 'status')
// - Use 'published' field for ordering (not 'published') for products/services/projects
// - Use 'published' field for ordering for posts table
// - Field fallbacks are implemented for backward compatibility

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

export interface Product {
  id: number;
  title?: string;
  name?: string;
  slug?: string;
  image_url?: string;
  imageUrl?: string;
  price?: string;
  original_price?: string;
  published?: string;
  description?: string;
  body?: string;
  status?: string;
  category?: string[];
  tags?: string[];
  [key: string]: any;
}

export interface Service {
  id: number;
  title?: string;
  slug?: string;
  image_url1?: string;
  published?: string;
  provider?: string;
  price?: string;
  url?: string;
  whatsapp_url?: string;
  maps_url?: string;
  verify?: string;
  body?: string;
  format?: string;
  status?: string;
  tags?: string[];
  category?: string[];
  wilayah?: string[];
  type?: string[];
  [key: string]: any;
}

export interface Project {
  id: number;
  title?: string;
  slug?: string;
  organiser?: string;
  image_url?: string;
  imageUrl?: string;
  published?: string;
  description?: string;
  body?: string;
  format?: string;
  status?: string;
  url?: string;
  gyg_url?: string;
  maps_url?: string;
  verify?: string;
  review?: string;
  get_involved?: string;
  category?: string[];
  country?: string[];
  locale?: string[];
  cost?: string[];
  [key: string]: any;
}

// Common types for metadata functions
export type EntityType = 'posts' | 'products' | 'services' | 'projects';
export type MetadataMap = Map<number, string[]>;
