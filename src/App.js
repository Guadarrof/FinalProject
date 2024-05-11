import React from "react";
import RoutesApp from "./routes/RoutesApp";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <RoutesApp/>
      </CartProvider>
    </div>
  );
}

export default App;
