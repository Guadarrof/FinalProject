import React from "react";
import CardSm from "../molecules/CardSm";

const CardsContainer = ({ items, routePrefix}) => {
  return (
    <div className="card_wrapper">
      {items.map((item) => (
        <CardSm
          id={item.id}
          key={item.id}
          urlImg={item.img}
          imgDescrption={item.descripcion_corta}
          price={item.precio}
          title={item.nombre}
          description={item.descripcion_larga}
          moreInfo=""
          routePrefix={routePrefix}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
