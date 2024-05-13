import React from "react";
import CardSm from "../molecules/CardSm";

const CardsContainer = ({ items, routePrefix, cardWrapperClass}) => {
  console.log("Items:", items);
  return (
    <div className= {`card_wrapper ${cardWrapperClass}`}>
      {items.map((item) => (
        <CardSm
          id={item.id}
          key={item.id}
          urlImg={item.img}
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
