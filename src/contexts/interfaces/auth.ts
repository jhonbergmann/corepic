import {ReactNode} from 'react'

export interface User {
  uid: string
  email?: string
  displayName?: string
  photoURL?: string
}

export interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => Promise<void>
}
