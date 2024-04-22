import React from 'react'
import Counter from "./Counter";
import { Link } from 'react-router-dom';

const CardSm = ({id, urlImg, imgDescription, price, title, description}) => {
  return (
    <div className="card card-m" id="product1">
        <img src={urlImg} alt={imgDescription} className="card_img"/>
        <div className="card_text">
            <p className="card__price">{price}</p>
            <h3 className="card__h3">{title}</h3>
            <p className="card__p">{description}</p>
            <Link to={`/productInfo/${id}`} className="card__a">Mas informacion</Link>
        </div>
        <Counter/>
    </div>
  )
}

export default CardSm