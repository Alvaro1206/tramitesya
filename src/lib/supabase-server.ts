import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.POSTGRES_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.POSTGRES_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Env var POSTGRES_SUPABASE_URL no está definida. Pon aquí la Project URL de Supabase (https://xxxxx.supabase.co).",
  );
}

if (!supabaseServiceRoleKey) {
  throw new Error(
    "Env var POSTGRES_SUPABASE_SERVICE_ROLE_KEY no está definida. Pon aquí la service_role key de Supabase.",
  );
}

export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});
