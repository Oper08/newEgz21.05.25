import React, { useContext } from 'react'
import { CartContext } from './src/App'

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
]

export default function ProductList() {
  const { dispatch } = useContext(CartContext)

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
