import {Image} from 'react-native'

import {Text, Wrapped} from '@/components'
import Logo from '@/assets/simple-logo.png'

export const EmptyState = () => {
  return (
    <Wrapped flex={1} justifyContent="center" alignItems="center" p={20} py={150} gap={20}>
      <Image source={Logo} style={{width: 150, height: 50}} resizeMode="contain" />
      <Wrapped center gap={5}>
        <Text fontWeight="bold" textSize="xlarge">
          Nenhuma imagem encontrada.
        </Text>
        <Text>Tente buscar por outro termo.</Text>
      </Wrapped>
    </Wrapped>
  )
}
