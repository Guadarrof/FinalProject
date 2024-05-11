import React from 'react'
import Text from '../atoms/Text'
import offerOne from '../../Images/bear.png';
import offerTwo from '../../Images/truck.png';
import offerThree from '../../Images/dino.png';

const OfferBanner = () => {
  return (
    <div className="section-banner banner-2" id="ofertas-banner">
            <Text
                renderAs="h2"
                content="Ofertas del mes"
                className="banner_h2 offer_h2"
             />
            <div className="offer_container">
                <div className="offer_group">
                    <div className="img-group">
                        <img src={offerOne} alt="imagen de oso de crochet" className="offer__img offer__img-1"/>
                        <div className="img-background img-background-1"></div>
                    </div>
                    <Text
                        renderAs="p"
                        content="15% en en la segunda unidad"
                        className="offer__p"
                    />
                </div>
                <div className="offer_group">
                    <div className="img-group">
                        <img src={offerTwo} alt="imagen de camion amarillo" className="offer__img offer__img-2"/>
                        <div className="img-background img-background-2"></div>
                    </div>
                    <Text
                        renderAs="p"
                        content="2x1 en camiones"
                        className="offer__p"
                    />
                </div>
                <div className="offer_group">
                    <div className="img-group">
                        <img src={offerThree} alt="imagen de t-rex de papel" className="offer__img offer__img-3"/>
                        <div className="img-background img-background-3"></div>
                    </div>
                    <Text
                        renderAs="p"
                        content="20% en decoracion"
                        className="offer__p"
                    />
                </div>
            </div>
        </div>
  )
}

export default OfferBanner