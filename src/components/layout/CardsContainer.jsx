import React from "react";
import CardSm from "../molecules/CardSm";

const CardsContainer = ({ items, routePrefix}) => {
  console.log("Items:", items);
  const cardWrapperClass = items.length < 3 ? "card_wrapper-sm" : "card_wrapper-lg";

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
          description={item.shortDescription}
          moreInfo=""
          routePrefix={routePrefix}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
