'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface UserProfile {
  id: string
  email: string
  organization_id: string
  role: 'admin' | 'manager' | 'user'
  full_name: string
  avatar_url?: string
}

interface AuthContextType {
  user: User | null
  userProfile: UserProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  isAdmin: boolean
  isManager: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Verificar sessão atual
    checkUser()

    // Escutar mudanças de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth event:', event)
        
        if (session?.user) {
          setUser(session.user)
          await fetchUserProfile(session.user.id)
        } else {
          setUser(null)
          setUserProfile(null)
        }
        
        setLoading(false)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  async function checkUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        setUser(user)
        await fetchUserProfile(user.id)
      }
    } catch (error) {
      console.error('Error checking user:', error)
    } finally {
      setLoading(false)
    }
  }

  async function fetchUserProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) throw error
      setUserProfile(data)
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (data.user) {
        await fetchUserProfile(data.user.id)
        router.push('/dashboard')
      }

      return { error: null }
    } catch (error: any) {
      console.error('Error signing in:', error)
      return { error }
    }
  }

  async function signUp(email: string, password: string, fullName: string) {
    try {
      // 1. Criar usuário no Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) throw error

      if (data.user) {
        // 2. Criar organização
        const { data: orgData, error: orgError } = await supabase
          .from('organizations')
          .insert([
            {
              name: `${fullName}'s Organization`,
              plan: 'free',
            },
          ])
          .select()
          .single()

        if (orgError) throw orgError

        // 3. Criar perfil do usuário
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: data.user.id,
              organization_id: orgData.id,
              role: 'admin',
              full_name: fullName,
            },
          ])

        if (profileError) throw profileError

        router.push('/login?registered=true')
      }

      return { error: null }
    } catch (error: any) {
      console.error('Error signing up:', error)
      return { error }
    }
  }

  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
    setUserProfile(null)
    router.push('/login')
  }

  const isAdmin = userProfile?.role === 'admin'
  const isManager = userProfile?.role === 'manager' || isAdmin

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        signIn,
        signUp,
        signOut,
        isAdmin,
        isManager,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
