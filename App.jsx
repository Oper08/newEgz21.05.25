import React, { useReducer, createContext } from 'react'
import ProductList from './Comp/ProductList'
import './App.css'
import Cart from './Comp/Cart'


export const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    case 'REMOVE_ITEM':
      return state.filter((item, index) => index !== action.payload)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <div>
        <h1>My React App</h1>
        <ProductList />
        <Cart />
      
      </div>
    </CartContext.Provider>
  )
}
