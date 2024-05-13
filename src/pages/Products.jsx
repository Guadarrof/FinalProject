import React, {useEffect, useState} from 'react';
import CardsContainer from '../components/layout/CardsContainer';
import { getProducts } from '../util/api';
import Text from '../components/atoms/Text';

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(
        data => setProducts(data)
      )
      .catch(error => console.error(error)
      )
  }, [])
  return (
    <>
    <>
      <main className='main_products'>
        <Text renderAs="h1" content="Nuestros productos" className="section-cards_h2"/>
        <CardsContainer items={products} routePrefix={`/productInfo`} cardWrapperClass='card_wrapper-lg'/>
      </main>
    </>
   
    </>
  )
}

export default Products