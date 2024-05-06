import React from "react";
import toys from "../../data/listaProductos.json";
import CardsContainer from "../layout/CardsContainer";
import Text from "../atoms/Text";
import { useEffect, useState } from "react";

const SelectedBanner = () => {
  const [todayToys, setTodayToys] = useState([]);

  useEffect(() => {
    const fetchRandomToys = async () => {
      const randomToys = [];
      while (randomToys.length < 3) {
        const randomIndex = Math.floor(Math.random() * toys.length);
        const selectedToy = toys[randomIndex];
        randomToys.push(selectedToy);
      }
      setTodayToys(randomToys);
    };

    fetchRandomToys();
  }, []);

  return (
    <div>
      <Text
        renderAs="h2"
        content="Los elegidos del dia"
        className="section-cards_h2"
      />
      <CardsContainer items={todayToys} routePrefix={`/productInfo`} />
    </div>
  );
};
export default SelectedBanner;
