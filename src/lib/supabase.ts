import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper para pegar o usuário atual
export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

// Helper para pegar a organização do usuário
export async function getUserOrganization(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('organization_id, organizations(*)')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}
