/**
 * Variables d'entorn públiques de l'app. Expo només exposa les que comencen per EXPO_PUBLIC_.
 * Els valors reals van a .env (ignorat); la llista és a /.env.example.
 */
export const env = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000/api/v1',
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '',
} as const;
