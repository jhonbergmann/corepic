import {Image} from 'react-native'

import {Wrapped, Button} from '@/components'
import {WelcomeLayoutProps} from '@/screens/auth/welcome/data'
import Logo from '@/assets/logo.png'

export const Welcome = ({navigation}: WelcomeLayoutProps) => {
  return (
    <Wrapped flex={1} justifyContent="space-around" alignItems="center" px={4}>
      <Wrapped center gap={4}>
        <Image source={Logo} style={{width: 180, height: 50}} resizeMode="contain" />
      </Wrapped>
      <Wrapped center gap={15} width="100%">
        <Button variant="solid" title="Entrar" onPress={() => navigation.navigate('signIn')} />
        <Button variant="outline" title="Criar uma conta" onPress={() => navigation.navigate('signUp')} />
      </Wrapped>
    </Wrapped>
  )
}
