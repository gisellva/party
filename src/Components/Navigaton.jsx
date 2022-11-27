import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigaton = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="navegator">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://mario.nintendo.com/static/70a63717b736085b71768be7a2558da7/e30b6/luigi-unstack-closed.png"
              alt="logo"
              width={170}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/Homepage" className="c">
                Home
              </Nav.Link>

              <Nav.Link href="/Clientesfelices" className="c">
                clientes felices
              </Nav.Link>
              <NavDropdown
                title="nuestros servicios"
                id="navbarScrollingDropdown"
                className="c"
              >
                <NavDropdown.Item href="/FiestasInfantiles">
                  fiestas infantiles y chiquitecas
                </NavDropdown.Item>
               
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Babyshower" className="c">
                  baby shower
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/PrimerasComuniones" className="c">
                  primeras comuniones
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Contactanos" className="c">
                contactanos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigaton;
