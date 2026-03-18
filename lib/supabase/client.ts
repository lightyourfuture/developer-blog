import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Supabase client configuration
// Make sure to set these environment variables in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are not set. Database features will not work.');
}

/**
 * Creates a Supabase client instance
 * @returns Supabase client
 */
export function createClient() {
    return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
