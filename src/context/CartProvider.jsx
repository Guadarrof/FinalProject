import React, { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({children}) => {
const [toysCart, setToysCart] = useState([])
  return (
    <CartContext.Provider value={{
        toysCart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider