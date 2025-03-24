import {ChevronLeft} from 'lucide-react-native'
import {Image} from 'react-native'

import {HeaderLayoutProps} from '@/components/ui/header/data'
import {Conditional} from '@/components/common'
import {Wrapped} from '@/components/ui/wrapped'
import {Text} from '@/components/ui/text'
import Logo from '@/assets/logo.png'

export const Header = ({title, goBack, showBack = true, theme}: HeaderLayoutProps) => {
  return (
    <Wrapped px={4}>
      <Wrapped height={60} flexDirection="row" justifyContent="space-between" alignItems="center">
        <Conditional render={Boolean(showBack)}>
          <ChevronLeft onPress={goBack} size={24} color={theme.colors.primary} />
          <Wrapped width={24} />
        </Conditional>
        <Image source={Logo} style={{height: 30, width: 100}} resizeMode="contain" />
        <Wrapped width={24} />
      </Wrapped>
      <Conditional render={Boolean(title)}>
        <Text fontWeight="bold" textSize="xlarge">
          {title}
        </Text>
      </Conditional>
    </Wrapped>
  )
}
