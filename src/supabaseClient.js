import { createClient } from "@supabase/supabase-js";

// TODO: Sustituye estas constantes por los valores reales de tu proyecto Supabase.
const supabaseUrl = "https://ajcgwoipqvuhbqlrhtyo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY2d3b2lwcXZ1aGJxbHJodHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyOTAzNzUsImV4cCI6MjA3Njg2NjM3NX0.K4cq-wzHhrVWaWO1olTIsIFe_DsOnijE1VedDOmCAVM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
