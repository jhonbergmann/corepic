import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

import {Welcome} from '@/screens/auth/welcome'
import {SignIn} from '@/screens/auth/sign-in'
import {SignUp} from '@/screens/auth/sign-up'

type AuthRoutes = {
  welcome: undefined
  signIn: undefined
  signUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>()

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}
