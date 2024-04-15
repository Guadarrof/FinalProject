import React from 'react'

const CardSm = ({urlImg, imgDescription, price, title, description, moreInfo}) => {
  return (
    <div className="card card-m" id="product1">
        <img src={urlImg} alt={imgDescription} className="card_img"/>
        <div className="card_text">
            <p className="card__price">{price}</p>
            <h3 className="card__h3">{title}</h3>
            <p className="card__p">{description}</p>
            <a href={moreInfo} className="card__a">Mas informacion</a>
        </div>
    </div>
  )
}

export default CardSm