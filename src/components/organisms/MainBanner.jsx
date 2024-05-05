import React from 'react';
import Text from '../atoms/Text'
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="section-banner banner-1">
            <img src="../Images/duck.png" alt="imagen de patito de goma" className="banner_img"/>
            <div className="banner_container-text">
              <Text
                renderAs="h1"
                content="Subite a la ola de descuentos"
                className="banner__h1"
              />
              <Text
                renderAs="p"
                content="Desde el 25 de Diciembre al 25 de Enero 15% en la segunda unidad y 30% en la tercera unidad"
                className="banner__p"
              />
              <Link to="/products" className="btn btn-offers btn-l btn_primary-inverse" aria-label="boton a ver ofertas"> Ver Productos</Link>
            </div>
        </div>
  )
}

export default MainBanner