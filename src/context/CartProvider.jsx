import React, { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { editCart, getCart, postCart } from "../util/api";

const CartProvider = ({ children }) => {
  const [idCart, setIdCart] = useState(null);
  const [toysCart, setToysCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const storedIdCart = localStorage.getItem("cartId")
      if(storedIdCart){
        getCart(storedIdCart)
          .then(({ cart }) => {
            setToysCart(cart.items);
            setIdCart(storedIdCart);
          });
      }
  }, [])
  

  const addToys = ({ _id, quantity }) => {
    const data = {
      quantity,
      product: _id,
    };
    const toyFound = toysCart.find((toy) => toy.product?._id === _id);

    try {
      if (toyFound) {
        const newCart = toysCart.map((toy) =>
          toy.product?._id === data.product
            ? { ...toy, quantity: quantity }
            : toy
        );
        editCart(idCart, newCart).then(({ cart }) => {
          setToysCart(cart.items);
        });
        setShowAlert(true);
      } else {
        if (!idCart) {
          postCart([data])
          .then(({ cart }) => {
            localStorage.setItem("cartId", cart._id)
            setIdCart(cart._id);
            setToysCart(cart.items);
          });
        } else {
          const newCart = [...toysCart, data];
          editCart(idCart, newCart).then(({ cart }) => {
            setToysCart(cart.items);
          });
        }
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error al agregar productos al carrito:", error);
    }
  };

  const removeToys = ({ _id }) => {
    const toyFound = toysCart.find((toy) => toy.product._id === _id);
    if (idCart) {
      if (toyFound?.quantity > 1) {
        const newCart = toysCart.map((toy) =>
          toy.product._id === _id
            ? {
                ...toy,
                quantity: toy.quantity - 1,
              }
            : toy
        );
        editCart(idCart, newCart).then(({ cart }) => setToysCart(cart.items));
      } else {
        const newCart = toysCart.filter((toy) => toy.product?._id !== _id);
        editCart(idCart, newCart).then(({ cart }) => setToysCart(cart.items));
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        toysCart,
        addToys,
        removeToys,
        showAlert,
        setShowAlert
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
