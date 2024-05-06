import React from 'react';
import CardsContainer from '../components/layout/CardsContainer';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import toys from  "../data/listaProductos.json";

const Products = () => {
  return (
    <>
    <>
      <main>
        <CardsContainer items={toys} routePrefix={`/productInfo`}/>
      </main>
    </>
   
    </>
  )
}

export default Products