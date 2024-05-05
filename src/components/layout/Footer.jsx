import React from "react";
import Icon from "../molecules/Icon";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <div className="footer_div footer_div-logo">
          <Icon className="footer__logo"></Icon>
          <Text
            renderAs="p"
            content="Avenida 60 Num 546, <br/>La Plata, Buenos Aires, Argentina"
            className="footer__p"
          />
        </div>
        <div className="footer_div">
          <Text renderAs="h3" content="Compras" className="footer_h3" />
          <Link to="/questions" className="footer__a">
            Medios de pago
          </Link>
          <Link to="/contact" className="footer__a">
            Reclamos
          </Link>
          <Link to="/questions" className="footer__a">
            Terminos y condiciones
          </Link>
        </div>
        <div className="footer_div">
          <Text renderAs="h3" content="Nosotros" className="footer_h3" />
          <Link to="/about" className="footer__a">
            Nuestra Marca
          </Link>
          <Link to="/about" className="footer__a">
            Nuestro Equipo
          </Link>
          <Link to="/questions" className="footer__a">
            Unite al grupo
          </Link>
        </div>
        <div className="footer_div">
          <Text renderAs="h3" content="Contacto" className="footer_h3" />
          <div className="footer_email">
            <Icon className="footer__span footer__span-email"></Icon>
            <a href="https://outlook.live.com" className="footer__a">
              juegueteriaCosmica@outlook.com
            </a>
          </div>
          <div className="footer_phone">
            <span className="footer__span footer__span-phone"></span>
            <a href="https://web.whatsapp.com/" className="footer__a">
              (221)456789
            </a>
          </div>
        </div>
        <div className="footer_div footer_div-social">
          <Text renderAs="h3" content="Redes" className="footer_h3" />
          <div className="footer_social">
            <a
              href="https://www.instagram.com/"
              className="footer__a footer__a-ig"
              aria-label="link to instagram"
            ></a>
            <a
              href="https://www.facebook.com/"
              className="footer__a footer__a-fb"
              aria-label="link to facebook"
            ></a>
            <a
              href="https://www.tiktok.com/"
              className="footer__a footer__a-tk"
              aria-label="link to tiktok"
            ></a>
          </div>
        </div>
        <iframe
          className="footer_iframe footer_iframe-map"
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.4687051553256!2d-57.9399814!3d-34.9197803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e622135a7231%3A0x987dcef7d90328d4!2sAv.%2060%20546%2C%20B1904%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sau!4v1705144184846!5m2!1ses!2sau"
          width="200"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
