import React from "react";
import Navbar from "../components/layout/Navbar";
import Banner from "../components/layout/Banner"

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner/>
      </main>
    </>
  );
};

export default Home;
