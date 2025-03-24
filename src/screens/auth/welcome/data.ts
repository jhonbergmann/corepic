import {AuthNavigatorRoutesProps} from '@/routes/auth.routes'

export interface WelcomeProps {}

export interface WelcomeLayoutProps extends WelcomeProps {
  navigation: AuthNavigatorRoutesProps
}
