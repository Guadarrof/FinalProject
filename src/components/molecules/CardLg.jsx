import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../atoms/Button'
import Counter from '../molecules/Counter'
import { getProducts } from '../../util/api'


const CardLg = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts()
            .then(data => {
                setProduct(data.find(item => item.id === id))
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [id])
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    if (!product) return <p>Product not found</p>

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
                       <img src={product.img} alt=""/>
                   </div>
                   <div className="product_card">
                       <div className="product_div product_div-info">
                           <h1 className="product__h1">{product.productName}</h1>
                           <p className="product__price card__price">{product.price}</p>
                           <h4 className="product__descript product__descript-short">{product.shortDescription}</h4>
                           <p className="product__descript product__descript-long">{product.longDescription}</p>
                       </div>
                   </div>
               </div>
               <Counter id={id}/>
               <Button
               aria-label="Buy"
               id="buy-btn" 
               className="btn btn_secondary btn-m" 
               label="Pagar"/>
           </div>
       </>
     )
   }

export default CardLg
