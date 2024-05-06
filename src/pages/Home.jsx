import React from "react";
import MainBanner from "../components/organisms/MainBanner";
import SelectedBanner from "../components/organisms/SelectedBanner"
import OfferBanner from "../components/organisms/OfferBanner";

const Home = () => {
  return (
    <>
      <main>
        <MainBanner/>
        <SelectedBanner/>
        <OfferBanner/>
      </main>
    </>
  );
};

export default Home;
