import React from 'react'
import Counter from "./Counter";
import { Link } from 'react-router-dom';

const CardSm = ({routePrefix, urlImg, imgDescription, price, title, description, id}) => {
  return (
    <div className="card card-m" id="product1">
        <img src={urlImg} alt={imgDescription} className="card_img"/>
        <div className="card_text">
            <p className="card__price">{price}</p>
            <h3 className="card__h3">{title}</h3>
            <p className="card__p">{description}</p>
            <Link to={`${routePrefix}/${id}`} className="card__a">Mas informacion</Link>
        </div>
        <Counter id={id}/>
    </div>
  )
}

export default CardSm