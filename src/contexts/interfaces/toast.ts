export interface Toast {
  id: string
  title?: string
  message?: string
  type: 'success' | 'warning' | 'error' | 'info'
  icon?: React.ReactNode
}

export interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>, duration?: number) => void
}
