import React from 'react'
import Text from '../atoms/Text'
import Counter from './Counter';

const CartItem = ({id, productData, quantity}) => {
    
  return (
    <div className='modal__cart'>
        <img src={productData.img} alt="product thumb" className='img_cart-thumb'/>
        <Text renderAs="p" content={productData.productName} className="cart__title"/>
        <Counter id={id} productData={productData} initialValue={quantity}/>
        <Text renderAs="p" content='0' className="cart__price"/>
    </div>
  )
}

export default CartItem