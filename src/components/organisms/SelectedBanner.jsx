import React from "react";
import CardsContainer from "../layout/CardsContainer";
import Text from "../atoms/Text";
import { useEffect, useState } from "react";
import { getProducts } from "../../util/api";

const SelectedBanner = () => {
  const [todayToys, setTodayToys] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (data.ok) {
          const products = data.products;
          console.log("Productos recibidos:", JSON.stringify(products, null, 2));

          const uniqueToys = Array.from(new Set(products.map(toy => toy._id)))
            .map(id => products.find(toy => toy._id === id));

          const randomToys = [];
          const toysLength = uniqueToys.length;

          if (toysLength >= 3) {
            while (randomToys.length < 3) {
              const randomIndex = Math.floor(Math.random() * uniqueToys.length);
              const selectedToy = uniqueToys.splice(randomIndex, 1)[0];
              if (selectedToy) {
                randomToys.push(selectedToy);
              }
            }
          } else {
            randomToys.push(...uniqueToys);
          }

          setTodayToys(randomToys);
        } else {
          console.error("Error al obtener los productos:", data.msg);
        }
      })
      .catch((error) => console.error("Error en la solicitud:", error));
  }, []);
  
  return (
    <div>
      <Text
        renderAs="h2"
        content="Los elegidos del dia"
        className="section-cards_h2"
      />
      <CardsContainer items={todayToys} routePrefix={`/productInfo`} cardWrapperClass='card_wrapper-sm'/>
    </div>
  );
};
export default SelectedBanner;
