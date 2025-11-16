import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.POSTGRES_SUPABASE_URL ?? process.env.NEXT_PUBLIC_POSTGRES_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.POSTGRES_SUPABASE_SERVICE_ROLE_KEY;

let cachedClient: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient | null {
  if (cachedClient) return cachedClient;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn(
      "[Supabase] Env vars no configuradas. POSTGRES_SUPABASE_URL o POSTGRES_SUPABASE_SERVICE_ROLE_KEY faltan.",
    );
    return null;
  }

  cachedClient = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });

  return cachedClient;
}
