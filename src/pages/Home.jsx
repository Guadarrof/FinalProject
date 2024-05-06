import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MainBanner from "../components/organisms/MainBanner";
import SelectedBanner from "../components/organisms/SelectedBanner"
import OfferBanner from "../components/organisms/OfferBanner";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MainBanner/>
        <SelectedBanner/>
        <OfferBanner/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
