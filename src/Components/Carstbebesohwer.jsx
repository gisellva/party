import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CartsBebeshower = () => {
  return (
    <>
      <h2 className="titulos">combos de recreacion y decoraciones</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7802428/pexels-photo-7802428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>
                  <h2>recreacion mega Babyshowe partydise</h2>
                </Card.Title>
                <Card.Text>
                  1 Recreador de alto nivel. Sonido adicional Recreación
                  dirigida (Integración con los padres. Show de biberón (incluye
                  3 cervezas q D) Pinta la barriga de la mamá. »» (opcional) El
                  pañal más rápido (incluye 3 pañales de adulto). Dinámicas de
                  aperturas de regalos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1682462/pexels-photo-1682462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>
                  <h2>decoracion Babyshower partydise</h2>
                </Card.Title>
                <Card.Text>
                  Puedes elegir 4 tonos de colores quieras de globos Arco
                  organico en globos guirnalda, trenzado, cuadrado Nombre del
                  futuro Baby en icopore o letras metalizadas). 1 Mantel de la
                  mesa principal. Arco o guirnalda en globos. Dos torres en
                  globos de 1.50 cm cada una. 2 metalizados de baby o animalitos
                  Globos alrededor del salón 1 Globo gigante 1 Festón,1
                  banderín, 1 guirnalda 1 cortina 6 Chupones en globos
                  Decoración del resto salón Cilindros (3 horas) 3 horas
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/9215236/pexels-photo-9215236.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
              <Card.Body>
                <Card.Title>
                  <h2>decoracion bebeshower basica partydise</h2>
                </Card.Title>
                <Card.Text>
                  DECORACIÓN (1 hora) 0 100 BOMBAS R12 (dos torres de bombas y
                  bombas por el salon) © mantel plástico temático © serpentinas
                  24 vasos temáticos 20 Cucharas temáticos 24 platos Temáticos
                  Banner baby shower Cortina metalizada Globo gigante con bombas
                  pequeñas por dentro Dos globos metalizados
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSOhvBImuZcbkxVhHP8RxMUWQIoVQp46-xDSBP_S1XJ6UBr7mWSUf31IDOf96mlNkozQ&usqp=CAU"
            alt="s"
            width={700}
            height={650}
          />
          <img
            src="https://cdn.manomano.com/decoraciones-para-baby-shower-de-nio-kit-de-guirnalda-de-globos-azules-124-globos-de-ltex-de-macarrn-azul-globo-de-confeti-tira-de-guirnalda-de-globos-para-decoraciones-de-fiesta-de-cumpleaos-de-nio-tema-de-elefante-ba-L-22087224-50201869_1.jpg"
            alt="s"
            width={700}
            height={650}
          />
          <img
            src="https://i.pinimg.com/originals/05/e7/bd/05e7bd466a18f27c787256ec1ca569ad.jpg"
            alt="s"
            width={700}
            height={650}
          />
          <img
            src="https://keefiesta.com/wp-content/uploads/2021/01/gender-reveal-party-2-1.jpg"
            alt="s"
            width={700}
            height={650}
          />
        </div>
      </Container>
    </>
  );
};

export default CartsBebeshower;
