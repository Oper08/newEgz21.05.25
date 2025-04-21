import React, { useContext } from 'react'
import { CartContext } from './src/App'

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext)

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: index })}>
              Remove
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <>
          <h3>Total Price: ${totalPrice}</h3>
          <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
        </>
      )}
    </div>
  )
}
