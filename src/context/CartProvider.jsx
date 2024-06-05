import React, { useState } from "react";
import { CartContext } from "./CartContext";
import { editCart, postCart } from "../util/api";

const CartProvider = ({ children }) => {
  const [idCart, setIdCart] = useState(null);
  const [toysCart, setToysCart] = useState([]);

  const addToys = ({ _id, quantity }) => {
    const data = {
      quantity,
      product: _id
    };
    const toyFound = toysCart.find((toy) => toy.product?._id === _id);
    if (toyFound) {
      const newCart = toysCart.map((toy) =>
        toy.product?._id === data.product ? { ...toy, quantity: toy.quantity + quantity } : toy
      );
      editCart(idCart, newCart)
              .then(({cart}) => {
                console.log(cart)
                setToysCart(cart.items)
              });
    } else {
      if (!idCart) {
        postCart([data])
          .then(({cart}) => {
            console.log(cart)
            setIdCart(cart._id);
            setToysCart(cart.items);
            });
      } else {
        const newCart = [...toysCart, data];
        editCart(idCart, newCart)
                .then(({cart}) => {
                  console.log(cart)
                  setToysCart(cart.items)});
      }
    }
  };

  const removeToys = (id) => {
    const toyFound = toysCart.find((toy) => toy.id === id);
    if (idCart) {
      if (toyFound?.quantity > 1) {
        const newCart = toysCart.map((toy) =>
          toy._id === id
            ? {
                ...toy,
                quantity: toy.quantity - 1,
              }
            : toy
        );
        editCart(idCart, newCart)
                .then(({cart})=> setToysCart(cart.items));

      } else {
        const newCart = toysCart.filter(toy => toy.product?._id !== id)
        editCart(idCart, newCart)
                .then(({cart}) => setToysCart(cart.items));
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        toysCart,
        addToys,
        removeToys,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
