import React from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";

const CardSm = ({
  routePrefix,
  urlImg,
  imgDescription,
  price,
  productName,
  brand,
  description,
  id,
}) => {
  return (
    <div className="card card-m" id="product1">
      <img src={urlImg} alt={imgDescription} className="card_img" />
      <Link to={`${routePrefix}/${id}`} className="card_text">
      <Text renderAs="p" content={price} className="card__price"/>
      <Text renderAs="h3" content={productName} className="card__h3"/>
      <Text renderAs="h4" content={brand} className="card__h4"/>
      <Text renderAs="p" content={description} className="card__p"/>
      </Link>
      <Counter 
      id={id} 
      productData={{
        productName, 
        urlImg,
        price
      }}
      />
    </div>
  );
};

export default CardSm;
