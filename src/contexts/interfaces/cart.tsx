export interface CartItem {
  id: string
  price: number
  quantity: number
  description?: string
  imageUrl: string
}

export interface CartState {
  items: CartItem[]
}

export type CartAction = {type: 'ADD_ITEM'; payload: CartItem} | {type: 'REMOVE_ITEM'; payload: string} | {type: 'CLEAR_CART'} | {type: 'SET_CART'; payload: CartItem[]}

export interface CartContextType {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}
