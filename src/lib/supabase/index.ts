// Export all types
export * from './types';

// Export all utilities
export * from './utils';

// Export all functions from individual modules
export { getPostsDirectFromSupabase } from './posts';
export { getProductsDirectFromSupabase } from './products';
export { getServicesDirectFromSupabase } from './services';
export { getProjectsDirectFromSupabase } from './projects';

// Re-export the supabase client for convenience
export { supabase } from './types';
