import React from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import { useState } from 'react'

const INITIAL_STATE=0;

const Counter = () => {
  const [count, setCount] = useState(INITIAL_STATE)
  const increment = ()=>{
    if(count> 0) setCount(count-1)}
  const decrement = ()=> setCount(count+1)

  return (
    <div className='counter-container'>
        <Button
        label="-"
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
        action={increment}
        className='counter-btn'
        />

    </div>
  )
}

export default Counter