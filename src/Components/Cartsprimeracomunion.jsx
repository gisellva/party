import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Cartsprimeracomunion = () => {
  return (
    <>
      <h2 className="titulos">combos de recreacion y decoraciones</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7219516/pexels-photo-7219516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>
                  <h2>decoracion primera comunion partydise</h2>
                </Card.Title>
                <Card.Text>
                DECORACIÓN (1 hora) 0 100 BOMBAS R12 (dos torres de bombas y bombas por el salón) © mantel plástico temático © serpentinas 24 vasos temáticos 20 Cucharas temáticas 24 platos Temáticos Banner cumpleaños Cortina metalizada Piñata temática sencilla cuadrada Relleno de piñata económico Vela volcán Dos globos metalizados 1 Tarro de espuma y recuerditos de primera comunion
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/8815228/pexels-photo-8815228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>
                  <h2>decoracion primera comunion partydise</h2>
                </Card.Title>
                <Card.Text>
                -Hora Loca con sonido -Pintucaritas para 30 Niños -Competencia por Equipos -Truco de Magia Cómica -Integración Adultos -Recreación Dirigida -recuerditos de primera comunion -Show de Payasos -Baile con Rifa 1 Super Coordinador -globofexia 3 Horas
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
      <Container>
        <h1 className="titulos">nustros trabajos</h1>
        <div className="nustros-trabajos">
          <img
            src="https://dev-tusanagustin.ozonohosting.com/assets/media/categorias/primera-comunion/decoracion-para-primera-comunion-medellin/13-decoracion-para-primera-comunion-en-medellin-foto-destacada.jpg"
            alt="s"
            width={700}
            height={650}
          />
          <img
            src="https://i.pinimg.com/736x/2a/f2/91/2af291fc0207579684a0aab627b22c7f.jpg"
            alt="s"
            width={700}
            height={650}
          />
          <img
            src="https://i.pinimg.com/564x/cf/0c/81/cf0c81efcbc2609b82e3f60f2ce0ef1e.jpg"
            alt="s"
            width={700}
            height={650}
          />
          <img
            src="https://t1.uc.ltmcdn.com/es/posts/6/0/7/como_elegir_un_recuerdo_de_primera_comunion_5706_600_square.jpg"
            alt="s"
            width={700}
            height={650}
          />
        </div>
      </Container>
    </>
  );
};

export default Cartsprimeracomunion;
