import {ProfileProps} from '@/screens/app/tabs/profile/data'
import {Profile as Layout} from '@/screens/app/tabs/profile/layout'
import {useAuth} from '@/contexts/auth'
import {useTheme} from '@/contexts/theme'
import {useCart} from '@/contexts/cart'

export const Profile = (props: ProfileProps) => {
  const {user, logout: userLogout} = useAuth()
  const {theme} = useTheme()
  const {dispatch} = useCart()

  const logout = async () => {
    try {
      await userLogout()
      dispatch({type: 'CLEAR_CART'})
    } catch {}
  }

  const layoutProps = {
    ...props,
    theme,
    user,
    logout,
  }

  return <Layout {...layoutProps} />
}
