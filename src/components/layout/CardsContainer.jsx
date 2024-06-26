import React from "react";
import CardSm from "../molecules/CardSm";

const CardsContainer = ({ items, routePrefix, cardWrapperClass}) => {
  return (
    <div className= {`card_wrapper ${cardWrapperClass}`}>
      {items.map((item) => (
        <CardSm
          id={item._id}
          key={item._id}
          urlImg={item.imgUrl}
          imgDescription={item.imgAlt}
          price={item.price}
          productName={item.productName}
          brand={item.brand}
          description={item.shortDescription}
          moreInfo=""
          routePrefix={routePrefix}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
