import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <>
        <Navbar key="xxl" bg="light" expand="xxl" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">GeoMaps</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"xxl"`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-$"xxl"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-$"xxl"`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"xxl"`}>
                  GeoMaps Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content flex-grow-1 pe-3">
                  <LinkContainer to="/home">
                    <Nav.Link>Mis Lugares</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/newPlace" >
                    <Button variant="success">Nuevo Lugar</Button>
                  </LinkContainer>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/login">
                      <Button>Iniciar Sesión</Button>
                  </LinkContainer>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Búsqueda..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="success">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navigation;