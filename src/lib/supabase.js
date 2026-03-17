import { createClient } from '@supabase/supabase-js'

// ─── Replace with your actual project values ────────────────────────────────
// You can also expose them via Vite env vars:
//   VITE_SUPABASE_URL  and  VITE_SUPABASE_ANON_KEY  in a .env file
const SUPABASE_URL      = import.meta.env.VITE_SUPABASE_URL      ?? 'https://YOUR_PROJECT.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'YOUR_SUPABASE_ANON_KEY'

export const isConfigured =
  SUPABASE_URL      !== 'https://YOUR_PROJECT.supabase.co' &&
  SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'

export const supabase = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null
