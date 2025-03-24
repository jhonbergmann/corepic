import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {Home as HomeIcon, Search as SearchIcon, ShoppingBag as CartIcon, Image as MyPicturesIcon, User as ProfileIcon} from 'lucide-react-native'

import {Home} from '@/screens/app/tabs/home'
import {Search} from '@/screens/app/tabs/search'
import {Cart} from '@/screens/app/tabs/cart'
import {MyPictures} from '@/screens/app/tabs/my-pictures'
import {Profile} from '@/screens/app/tabs/profile'

import {useTheme} from '@/contexts/theme'
import {useCart} from '@/contexts/cart'

export type AppTabsRoutes = {
  home: undefined
  search: {category?: string; focused?: boolean}
  cart: undefined
  myPictures: undefined
  profile: undefined
}

const {Navigator, Screen} = createBottomTabNavigator<AppTabsRoutes>()

export type AppNavigatorTabsRoutesProps = BottomTabNavigationProp<AppTabsRoutes>

export const AppTabsRoutes = () => {
  const {theme} = useTheme()
  const {state: cart} = useCart()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {backgroundColor: theme.colors.background, borderTopWidth: 0, elevation: 10, shadowOpacity: 0.1, height: 60},
        tabBarLabelStyle: {fontSize: 12},
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => <HomeIcon size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({size, color}) => <SearchIcon size={size} color={color} />,
          tabBarLabel: 'Buscar',
        }}
      />
      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({size, color}) => <CartIcon size={size} color={color} />,
          tabBarLabel: 'Carrinho',
          ...(cart.items.length && {tabBarBadge: cart.items.length}),
          tabBarBadgeStyle: {backgroundColor: theme.colors.primary},
        }}
      />
      <Screen
        name="myPictures"
        component={MyPictures}
        options={{
          tabBarIcon: ({size, color}) => <MyPicturesIcon size={size} color={color} />,
          tabBarLabel: 'Suas Fotos',
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => <ProfileIcon size={size} color={color} />,
          tabBarLabel: 'Perfil',
        }}
      />
    </Navigator>
  )
}
