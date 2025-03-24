import React, {createContext, useContext, useState, ReactNode} from 'react'

import ToastContainer from '@/components/ui/toast'
import {Toast, ToastContextType} from '@/contexts/interfaces/toast'

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within a ToastProvider')
  return context
}

export const ToastProvider = ({children}: {children: ReactNode}) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>, duration: number = 5000) => {
    if (toasts.some((t) => t.message === toast.message)) return

    const id = Date.now().toString()

    const newToast = {id, ...toast}
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, duration)
  }

  return (
    <ToastContext.Provider value={{toasts, addToast}}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}
