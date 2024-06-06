import React from 'react'
import Text from '../atoms/Text'
import Counter from './Counter';

const CartItem = ({product, quantity}) => {
    
  return (
    <div className='modal__cart'>
        <Text renderAs="p" content={product.productName} className="cart__title"/>
        <Counter _id={product._id} initialValue={quantity}/>
        {/*Eventually logic for price <Text renderAs="p" content='0' className="cart__price"/> */}
    </div>
  )
}

export default CartItem