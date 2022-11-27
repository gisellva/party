import React from "react";
import { Container } from "react-bootstrap";
import { Formulario } from "../Components/Formulario";

const Contactanos = () => {
  return (
    <>
      <nav className="nav">.</nav>
      <Container className="container-contactanos">
      <div className="container-parrafo">
        <p>
                  Déjanos tu mensaje y un asesor se pondrá en contacto contigo
                  en la mayor brevedad. Recuerda que también nos puedes
                  contactar directamente a través de los otros canales como
                  WhatsApp y nuestra Líneas Únicas
                </p>
                <p>310 794 3812</p>
                <button className="botonwhatsapp">
                  <a
                    className="botonwhatsapptext"
                    href="https://wa.me/3107943812/?text=¿hola como estas?,me interesa agendar un evento 🎈🎂"
                  >
                    escribemos
                  </a>
                </button>
              
                </div>
            
              <Formulario />
      </Container>
           
          
        
    
    </>
  );
};

export default Contactanos;
