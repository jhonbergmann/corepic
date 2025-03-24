import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

import {AppTabsRoutes} from '@/routes/app.tabs.routes'
import {PictureDetail} from '@/screens/app/picture-detail'

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>()

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

export type AppRoutes = {
  app: undefined
  pictureDetail: {id: string}
}

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="app">
      <Screen name="app" component={AppTabsRoutes} />
      <Screen name="pictureDetail" component={PictureDetail} />
    </Navigator>
  )
}
