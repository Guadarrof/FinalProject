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
        const randomToys = [];
        while (randomToys.length < 3) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const selectedToy = data[randomIndex];
          randomToys.push(selectedToy);
        }
        setTodayToys(randomToys);
      })
      .catch((error) => console.error(error));
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
