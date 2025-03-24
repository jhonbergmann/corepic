import {User as UserIcon, Briefcase, Camera, Users, Info, HelpCircle, FileText, Shield, LogOut, Heart, Star, Bell, Settings, CreditCard, Globe, Gift} from 'lucide-react-native'

import {User} from '@/contexts/interfaces/auth'
import {Theme} from '@/themes'

export interface ProfileProps {}

export interface ProfileLayoutProps extends ProfileProps {
  theme: Theme
  user: User | null
  logout: () => Promise<void>
}

export const menuItems = [
  {label: 'Suas propostas', icon: Briefcase},
  {label: 'Sua conta', icon: UserIcon},
  {label: 'Sou fotógrafo', icon: Camera},
  {label: 'Fotos para eventos', icon: Camera},
  {label: 'Contrate um fotógrafo', icon: Users},
  {label: 'Favoritos', icon: Heart},
  {label: 'Avaliações', icon: Star},
  {label: 'Notificações', icon: Bell},
  {label: 'Configurações', icon: Settings},
  {label: 'Meus pagamentos', icon: CreditCard},
  {label: 'Idioma', icon: Globe},
  {label: 'Quem somos', icon: Info},
  {label: 'Suporte', icon: HelpCircle},
  {label: 'Termos de uso', icon: FileText},
  {label: 'Política de privacidade', icon: Shield},
  {label: 'Indique e ganhe', icon: Gift},
  {label: 'Sair da conta', icon: LogOut},
]
