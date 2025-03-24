import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getAuth, signOut} from 'firebase/auth'

import {app} from '@/configs/firebase'
import {AuthContextType, User} from '@/contexts/interfaces/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const auth = getAuth(app)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUserState] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const setUser = (user: User | null) => {
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user))
      setUserState(user)
      setIsAuthenticated(true)
      return
    }
    AsyncStorage.removeItem('user')
    setUserState(null)
    setIsAuthenticated(false)
  }

  const logout = async () => {
    try {
      await signOut(auth)
      await AsyncStorage.removeItem('user')
      setUserState(null)
      setIsAuthenticated(false)
    } catch {}
  }

  useEffect(() => {
    ;(async () => {
      const userData = await AsyncStorage.getItem('user')
      if (userData) {
        const parsedUser = JSON.parse(userData)
        setUserState(parsedUser)
        setIsAuthenticated(true)
      }
    })()
  }, [])

  return <AuthContext.Provider value={{user, isAuthenticated, setUser, logout}}>{children}</AuthContext.Provider>
}
