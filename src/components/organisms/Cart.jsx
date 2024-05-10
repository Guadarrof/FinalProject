import React, { useContext } from "react";
import Icon from "../molecules/Icon";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { toysCart } = useContext(CartContext);
  return (
    <div className="navbar__cart-container">
      <button className="navbar__cart-btn">
        <Icon className="navbar__cart-span" />
      </button>
      {toysCart.length > 0 &&
        <div className="navbar__cart-badge">
          {toysCart.reduce((acc, toy) => acc + toy.quantity, 0)}
        </div>
      }
    </div>
  );
};

export default Cart;
