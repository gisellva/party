import React from "react";
import { Container } from "react-bootstrap";
import Clientesfelicescomponente from "../Components/clientesfelices";
import {} from "../css/clientesfelices.css";
const Clientesfelices = () => {
  return (
    <>
      <nav className="nav">.</nav>
      <div className="imgen-fondo-cieltesfelices"></div>
      
      <Container className="container-conetenido-clienetes"> 
      <section >
        <h1 className="clientes-titulo">clientes felices</h1>
        <p>
          Aquí en partydise nos enorgullecemos de nuestro enfoque centrado en la
          satisfacion de nuestros cliente, estamos comprometidos a agregar un
          valor significativo en los momentos especiales a través de un enfoque
          de recreacion,magia y shows. Nuestra filosofía es asociarnos con
          nuestros clientes para garantizar la diversion,satisfaciony felicida
        </p>
     <Clientesfelicescomponente/>
   
      </section>
      

 
      </Container>
    </>
  );
};

export default Clientesfelices;
