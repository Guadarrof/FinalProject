import React, { useEffect } from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Alert from '../molecules/Alert'


const Counter = ({_id, initialValue=0 }) => {
  const [count, setCount] = useState(initialValue)
  const { addToys, removeToys, toysCart } = useContext(CartContext)
  const [showAlert, setShowAlert] = useState(false);


  useEffect(() => {
    const toys = toysCart.find (toy => toy._id === _id)
        setCount(toys?.quantity || 0)
    }, [toysCart, _id])

  const increment = (e)=>{
    e.stopPropagation()
    setCount (count+1);
    addToys({
      _id,
      quantity: count + 1
    })
    setShowAlert(true);
  }
  const decrement = (e)=>{
    e.stopPropagation()
    if(count> 0) setCount(count - 1);
    removeToys(_id);
}

  return (
    <>
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
    <Alert show={showAlert} onClose={() => setShowAlert(false)}>
        <p className='alert_text'>Producto Agregado</p>
    </Alert>
  </>
  )
}

export default Counter;