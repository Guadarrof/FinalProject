import React, { useContext, useState } from "react";
import Icon from "../molecules/Icon";
import { CartContext } from "../../context/CartContext";
import Modal from "../molecules/Modal";
import Button from "../atoms/Button";
import CartItem from "../molecules/CartItem";

const Cart = () => {
  const { toysCart, resetCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePurchase = () => {
    setShowThankYou(true);
    setTimeout(() => {
      resetCart();
      setShowThankYou(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <>
      <div className="navbar__cart-container">
        <button className="navbar__cart-btn" onClick={() => setOpen(!open)} disabled= {!toysCart.length}>
          <Icon className="navbar__cart-span" />
        </button>
        {toysCart.length > 0 && (
          <div className="navbar__cart-badge">
            {toysCart.reduce((acc, toy) => acc + toy.quantity, 0)}
          </div>
        )}
      </div>
      <Modal show={open} onClose={()=>setOpen(false)}>
        <div className="modal_container-header">
          <Button
            aria-label="Close cart"
            id="btnClose"
            action={() => setOpen(false)}
            className="btn btn_icon btn_icon-s"
            iconClass='btn_icon-close'
          />
        </div>
        <div className="modal_container-content">
        {showThankYou ? (
          <div className="cart__thanks">
            <Icon className="cart__thanks-logo" />
            <p className="cart__thanks-text">¡Gracias por tu compra!</p>
          </div>
        ) : toysCart.length > 0 ? (
          toysCart.map((data) => <CartItem key={data._id} {...data} />)
        ) : (
          <div className="cart__empty-group">
            <Icon className="cart__empty-logo" />
            <p className="cart__empty-text">OH NO! Tu carrito está vacío.</p>
          </div>
        )}
      </div>
      {!showThankYou && toysCart.length > 0 && (
        <Button
          aria-label="Purchase"
          id="btnBuy"
          label="Pagar"
          action={handlePurchase}
          className="btn btn-m"
        />
      )}
    </Modal>
    </>
  );
};

export default Cart;
