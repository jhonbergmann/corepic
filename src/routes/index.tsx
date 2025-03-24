import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import {Conditional, Wrapped} from '@/components'
import {useAuth} from '@/contexts/auth'

import {AuthRoutes} from '@/routes/auth.routes'
import {AppRoutes} from '@/routes/app.routes'

export const Routes = () => {
  const {isAuthenticated} = useAuth()

  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Wrapped flex={1}>
          <Conditional render={isAuthenticated}>
            <AppRoutes />
            <AuthRoutes />
          </Conditional>
        </Wrapped>
      </NavigationContainer>
    </>
  )
}
