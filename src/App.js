import React from "react";
import RoutesApp from "./routes/RoutesApp";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RoutesApp/>
      <Footer />
    </div>
  );
}

export default App;
