import {CartProps} from '@/screens/app/tabs/cart/data'
import {Cart as Layout} from '@/screens/app/tabs/cart/layout'
import {useCart} from '@/contexts/cart'
import {useToast} from '@/contexts/toast'
import {useTheme} from '@/contexts/theme'

export const Cart = (props: CartProps) => {
  const {state: cart, dispatch} = useCart()
  const {theme} = useTheme()
  const {addToast} = useToast()

  const removeItemToCart = async (id: string) => {
    try {
      dispatch({type: 'REMOVE_ITEM', payload: id})
      addToast({message: 'Item removido do carrinho.', type: 'success'})
    } catch {}
  }

  const totalAmount = cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

  const layoutProps = {
    ...props,
    theme,
    cart,
    dispatch,
    removeItemToCart,
    totalAmount,
  }

  return <Layout {...layoutProps} />
}
