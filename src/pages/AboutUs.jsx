import React from "react";
import Text from "../components/atoms/Text";
import Icon from "../components/molecules/Icon";
import me from "../Images/me.svg"
import FormSm from "../components/organisms/FormSm";

const AboutUs = () => {
  return (
    <>
        <main>
          <div className="about_container" id="about">
            <div className="about_img">
              <img src={me} alt="imagen de Guadalupe" />
            </div>
            <div className="about_card">
              <div className="about_div about_div-info">
                <Text
                  renderAs="h1"
                  content="Guadalupe Arroferia"
                  className="about__h1"
                />
                <Text
                  renderAs="h3"
                  content="Disenadora UX/UI - FullStack developer"
                  className="about__h3"
                />
                <Text
                  renderAs="p"
                  content="Nacida en Puerto Madryn, recibida en La Plata y ahora explorando el mundo y mi pasion por la tecnologia. Busco costantemente crecer y desarrollarme, aspiro a ser desarrolladora web y posiblemente algo mas. Mi sueño es ayudar a las personas dedicandome a lo que realmente me gusta"
                  className="about__p"
                />
              </div>
              <div className="about_div about_div-social">
                <div className="social_group">
                  <Icon className="social-icon social_linked" />
                  <a
                    href="https://www.linkedin.com/in/guadalupe-arroferia"
                    className="social__a social__a-linked"
                    aria-label="link to my Linkedin"
                  >
                    Encontrame en Linkedin
                  </a>
                </div>
                <div className="social_group">
                  <Icon className="social-icon social_git" />
                  <a
                    href="https://github.com/Guadarrof"
                    className="social__a social__a-git"
                  >
                    Mis proyectos en GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <FormSm formTitle="Trabaja con nosotros"/>
        </main>
    </>
  );
};

export default AboutUs;
