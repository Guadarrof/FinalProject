import React, { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({children}) => {
  const [toysCart, setToysCart] = useState([])
  console.log(toysCart)
  
  const addToys = data => {
      const toyFound = toysCart.find(toy => toy.id === data.id)
      if (toyFound){
        setToysCart(
          toysCart.map(
            toy => toy.id === data.id ? data : toy
          )
        )
      }else{
        setToysCart([...toysCart, data])
      }
  }
  
  const removeToys = id => {
    const toyFound = toysCart.find(toy => toy.id === id)
    if (toyFound?.quantity > 1 ){
      setToysCart(
        toysCart.map(
          toy => toy.id === id ?{
            ...toy, 
            quantity: toy.quantity -1
          }: toy
        )
      )
    }else{
      setToysCart([toysCart.filter(toy => toy.id !== id)])
    }
  }


  return (
    <CartContext.Provider value={{
        toysCart,
        addToys,
        removeToys
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider