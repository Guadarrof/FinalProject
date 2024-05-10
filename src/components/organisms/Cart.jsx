import React, { useContext } from 'react'
import Icon from '../molecules/Icon'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const {toysCart} = useContext(CartContext)
  return (
    <button>
        <Icon className='navbar__span-cart'/>
        {toysCart.reduce(
          (acc, toy)=> acc + toy.quantity,
          0
        )}
    </button>
  )
}

export default Cart