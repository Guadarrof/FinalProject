import React from "react";
import toys from "../../data/listaProductos.json";
import CardSm from "../molecules/CardSm";

// const toyList = JSON.stringify(toys)

const CardsContainer = () => {
  return (
    <div className="card_wrapper">
      {toys.map((toy) => (
        <CardSm
          urlImg={toy.img}
          imgDescrption={toy.descripcion_corta}
          price={toy.precio}
          title={toy.nombre}
          description={toy.descripcion_larga}
          moreInfo=""
        />
      ))}
    </div>
  );
};

export default CardsContainer;
