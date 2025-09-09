import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          level: number
          xp: number
          streak: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          level?: number
          xp?: number
          streak?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          level?: number
          xp?: number
          streak?: number
          created_at?: string
          updated_at?: string
        }
      }
      challenges: {
        Row: {
          id: string
          title: string
          description: string
          language: 'Python' | 'JavaScript'
          difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
          xp_reward: number
          starter_code: string
          solution: string
          test_cases: any[]
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          language: 'Python' | 'JavaScript'
          difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
          xp_reward: number
          starter_code: string
          solution: string
          test_cases: any[]
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          language?: 'Python' | 'JavaScript'
          difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
          xp_reward?: number
          starter_code?: string
          solution?: string
          test_cases?: any[]
          created_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          challenge_id: string
          completed: boolean
          stars: number
          completion_date: string | null
          code_submitted: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          challenge_id: string
          completed?: boolean
          stars?: number
          completion_date?: string | null
          code_submitted?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          challenge_id?: string
          completed?: boolean
          stars?: number
          completion_date?: string | null
          code_submitted?: string | null
          created_at?: string
        }
      }
    }
  }
}