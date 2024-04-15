import React from "react";
import Counter from "./components/molecules/Counter"
import CardsContainer from "./components/organisms/CardsContainer";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Counter/>
      <CardsContainer/>
    </div>
  );
}

export default App;
