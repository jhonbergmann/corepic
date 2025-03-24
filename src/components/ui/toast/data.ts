import {Toast} from '@/contexts/interfaces/toast'

export interface ToastContainerProps {
  toasts: Toast[]
}

export interface ToastItemProps {
  toast: Toast
}
