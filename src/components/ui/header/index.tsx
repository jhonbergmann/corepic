import * as React from 'react'
import {useNavigation} from '@react-navigation/native'

import {HeaderProps} from '@/components/ui/header/data'
import {Header as Layout} from '@/components/ui/header/layout'
import {useTheme} from '@/contexts/theme'

export const Header = (props: HeaderProps) => {
  const navigation = useNavigation()
  const {theme} = useTheme()

  const goBack = () => {
    navigation.goBack()
  }

  const layoutProps = {
    ...props,
    theme,
    goBack,
  }

  return <Layout {...layoutProps} />
}
