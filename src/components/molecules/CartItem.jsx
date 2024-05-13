import React from 'react'
import Text from '../atoms/Text'
import Counter from './Counter';

const CartItem = ({id, productData, quantity}) => {
    
  return (
    <div className='modal__cart'>
        <Text renderAs="p" content={productData.productName} className="cart__title"/>
        <Counter id={id} productData={productData} initialValue={quantity}/>
        {/*Eventually logic for price <Text renderAs="p" content='0' className="cart__price"/> */}
    </div>
  )
}

export default CartItem