import React, {createContext, useContext, useReducer, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {CartAction, CartContextType, CartState} from '@/contexts/interfaces/cart'

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return {...state, items: state.items.map((item) => (item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item))}
      } else {
        return {...state, items: [...state.items, action.payload]}
      }
    case 'REMOVE_ITEM':
      return {...state, items: state.items.filter((item) => item.id !== action.payload)}
    case 'CLEAR_CART':
      return {...state, items: []}
    case 'SET_CART':
      return {...state, items: action.payload}
    default:
      return state
  }
}

const initialState: CartState = {items: []}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    ;(async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart')
        if (storedCart) dispatch({type: 'SET_CART', payload: JSON.parse(storedCart).items})
      } catch {}
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const cartData = {items: state.items}
        await AsyncStorage.setItem('cart', JSON.stringify(cartData))
      } catch {}
    })()
  }, [state.items])

  return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
}
