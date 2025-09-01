// Re-export everything from the new modular structure
// This maintains backward compatibility while using the new modular architecture

export * from './supabase';

// Keep the original SupabasePost interface for backward compatibility
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