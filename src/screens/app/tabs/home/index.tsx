import {useRef} from 'react'
import {Animated} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {HomeProps} from '@/screens/app/tabs/home/data'
import {Home as Layout} from '@/screens/app/tabs/home/layout'
import {AppNavigatorTabsRoutesProps} from '@/routes/app.tabs.routes'
import {useTheme} from '@/contexts/theme'

export const Home = (props: HomeProps) => {
  const navigation = useNavigation<AppNavigatorTabsRoutesProps>()
  const {theme} = useTheme()

  const scrollY = useRef(new Animated.Value(0)).current

  const headerHeight = scrollY.interpolate({inputRange: [0, 100], outputRange: [0, 60], extrapolate: 'clamp'})
  const headerOpacity = scrollY.interpolate({inputRange: [0, 100], outputRange: [0, 1], extrapolate: 'clamp'})

  const layoutProps = {
    ...props,
    theme,
    navigation,
    scrollY,
    headerHeight,
    headerOpacity,
  }

  return <Layout {...layoutProps} />
}
