import {CartState} from '@/contexts/interfaces/cart'
import {Theme} from '@/themes'

export interface CartProps {}

export interface CartLayoutProps extends CartProps {
  theme: Theme
  cart: CartState
  removeItemToCart: (id: string) => Promise<void>
  totalAmount: number
}
