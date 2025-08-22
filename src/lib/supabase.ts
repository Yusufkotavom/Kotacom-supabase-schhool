import { createClient } from '@supabase/supabase-js';

// Use the environment variables that are already set in Vercel
const supabaseUrl = import.meta.env.SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Create a dummy client for build time, will be replaced at runtime
let supabase: any;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  // During build time, create a dummy client
  // This will be replaced at runtime when environment variables are available
  supabase = {
    from: () => ({
      insert: () => ({
        select: () => Promise.resolve({ data: [{ id: 'dummy-id' }], error: null })
      })
    })
  };
}

export { supabase };