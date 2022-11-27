import React from "react";
import { Container } from "react-bootstrap";
import { Carrusel } from "../Components/Carrusel";

const Homepage = () => {
  return (
    <>
      <header className="header content">
        <div className="header-video">
          <video
            autoPlay
            muted
            loop
            src="https://video.wixstatic.com/video/11062b_ab90c76e981644f1a5cb91f5aaa6334a/1080p/mp4/file.mp4"
          ></video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>partydise</h1>
          <p>
            existimos para darle felicidad y diversion a tus momentos especiales
          </p>
          <a href="/Contactanos" className="hederContactanos">
            Contactanos
          </a>
        </div>
      </header>
      <p className="nuestroservicios">nuestros servicios</p>
      <Container>
      <div className="botones">
        <button className="b-1">show tematicos</button>
        <button className="b-2">recreaciones dirigidas</button>
        <button className="b-3">sonido</button>
        <button className="b-4">decoraciones</button>
      </div>
      </Container>
      <Carrusel/>
      <div className="sobrenosotros">
       <p className="parrafosobrenosotros">sobre nosotros</p>
        <p className="parrafodescripcionsobrenosotros">
          Ofrecemos servicios de animación de fiestas y eventos privadas y
          empresas. Somos la mejor empresa de entretenimiento para fiestas y
          eventos infantiles. Tenemos los mejores precios y el mejor equipo del
          mercado para crear el mejor evento del año para ti. 
          Tenemos nuestra
          sede operativa en la ciudad de bogota y realizamos eventos a en los pueblos aledaños, siendo el departamento de cundinamarca nuestro principal nicho
          de mercado.
        </p>
      </div>
     
    </>
  );
};

export default Homepage;
