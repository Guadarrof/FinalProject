import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toys from "../data/listaProductos.json"
import Button from '../components/atoms/Button'

const ProductInfo = () => {
 const { id } = useParams()
 const [toy, setToy] = useState({})
 const  navigate = useNavigate()

 useEffect(()=>{
  const toyInfo = toys.find(data => data.id === parseInt(id))
  setToy(toyInfo);
 },[id])


  return (
    <>
      <Button
      aria-label="Back"
      id="back-btn" 
      className="btn btn_secondary btn-m" 
      action={() => navigate(-1)}
      label="Back"
      />
      <div className="product_container">
            <div className="product_content">
                <div className="product_img">
                    <img src={toy.img} alt=""/>
                </div>
                <div className="product_card">
                    <div className="product_div product_div-info">
                        <h1 className="product__h1">{toy.nombre}</h1>
                        <p className="product__price card__price">{toy.precio}</p>
                        <h4 className="product__descript product__descript-short">{toy.descripcion_corta}</h4>
                        <p className="product__descript product__descript-long">{toy.descripcion_larga}</p>
                    </div>
                </div>
            </div>
            <Button
            aria-label="Buy"
            id="buy-btn" 
            className="btn btn_secondary btn-m" 
            label="Comprar"/>
        </div>
    </>
  )
}

export default ProductInfo