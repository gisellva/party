import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../css/contactanos.css";
export function Formulario() {
  return (
    <Container className="container-formulario">
    <Form className="formulario-conten" action="https://formsubmit.co/pipe8598@gmail.com " method="POST"> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>nombre</Form.Label>
        <Form.Control type="text" name="nombre"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>telefono</Form.Label>
        <Form.Control type="tel" />
      </Form.Group>
      <p>informacion del evento</p>
      <Form.Group className="mb-3">
        <Form.Label>fecha y hora</Form.Label>
        <Form.Control type="datetime-local" name="fecha"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ubicacion del evento</Form.Label>
        <Form.Control type="text" name="ubicacion"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>mensaje</Form.Label>
        <Form.Control type="text" name="mensaje"/>
      </Form.Group>
      <button  type="submit" className="botonwhatsapp">
        Submit
      </button>
      <input type="hidden" name="_next" value="http://localhost:3000/Homepage"/>
    
    </Form>
    </Container>
  );
}
