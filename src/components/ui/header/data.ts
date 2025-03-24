import {Theme} from '@/themes'

export interface HeaderProps {
  title?: string
  showBack?: boolean
}

export interface HeaderLayoutProps extends HeaderProps {
  theme: Theme
  goBack: () => void
}
