import {useNavigation} from '@react-navigation/native'

import {WelcomeProps} from '@/screens/auth/welcome/data'
import {Welcome as Layout} from '@/screens/auth/welcome/layout'
import {AuthNavigatorRoutesProps} from '@/routes/auth.routes'

export const Welcome = (props: WelcomeProps) => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const layoutProps = {
    ...props,
    navigation,
  }

  return <Layout {...layoutProps} />
}
