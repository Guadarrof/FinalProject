import React from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'


const Counter = (value, add, substract) => {
  return (
    <div className='counter-container'>
        <Button
        label="-"
        action={add}
        className='counter-btn'
        />
        <Text
        renderAs="p"
        content={value}
        className='counter-value'
        />
        <Button
        label='+'
        action={substract}
        className='counter-btn'
        />

    </div>
  )
}

export default Counter