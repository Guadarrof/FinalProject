import React, {useEffect, useState} from 'react';
import CardsContainer from '../components/layout/CardsContainer';
import { getProducts } from '../util/api';

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
      <main>
        <CardsContainer items={products} routePrefix={`/productInfo`}/>
      </main>
    </>
   
    </>
  )
}

export default Products