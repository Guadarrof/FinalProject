import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import Alert from '../molecules/Alert';

const CartAlert = () => {
  const { showAlert, setShowAlert } = useContext(CartContext);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showAlert, setShowAlert]);

  return (
    <Alert show={showAlert} onClose={() => setShowAlert(false)}>
      <p className='alert_text'>Producto Agregado</p>
    </Alert>
  );
};

export default CartAlert;