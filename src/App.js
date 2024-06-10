import React from "react";
import RoutesApp from "./routes/RoutesApp";
import CartProvider from "./context/CartProvider";
import CartAlert from "./components/organisms/CartAlert";

function App() {
  return (
    <div className="App" id="app">
      <CartProvider>
        <CartAlert/>
        <RoutesApp/>
      </CartProvider>
    </div>
  );
}

export default App;
