import React from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const INITIAL_STATE=0;

const Counter = ({id}) => {
  const [count, setCount] = useState(INITIAL_STATE)
  const { addToys, removeToys} = useContext(CartContext)


  const increment = ()=>{
    setCount (count+1);
    addToys({
      id,
      quantity: count + 1
    })
  }
  const decrement = ()=>{
    if(count> 0) setCount(count-1)
      removeToys(id);
  }

  return (
    <div className='counter-container'>
        <Button
        label="-"
        ariaLabel="decrement"
        action={decrement}
        className='counter-btn'
        disabled ={count === 0}
        />
        <Text
        renderAs="p"
        content={count}
        className='counter-value'
        />
        <Button
        label='+'
        ariaLabel="increment"
        action={increment}
        className='counter-btn'
        />

    </div>
  )
}

export default Counter