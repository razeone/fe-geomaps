import {React, useState} from "react";
import { Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation(token) {
  const [searchString, setSearchString] = useState("");
  const handleSearch = (e) => {
      e.preventDefault();
      alert("TO-DO: Searching for " + searchString);
  }

  let sessionButton = {
    location: '/login',
    title: 'Iniciar Sesión',
    variant: 'success'
  }

  if(token){
    sessionButton = {
      location: '/logout',
      title: 'Cerrar Sesión',
      variant: 'danger'
    }
  }

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
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content flex-grow-1 pe-3">
                  <LinkContainer to="/home">
                    <Nav.Link>Mis Lugares</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/addresses">
                    <Nav.Link>Direcciones</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/countries">
                    <Nav.Link>Países</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to={sessionButton.location}>
                      <Button variant={sessionButton.variant}>{sessionButton.title}</Button>
                  </LinkContainer>
                  <Dropdown>
                    <Dropdown.Toggle variant="success">Agregar</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <LinkContainer to="/new-address">
                        <Dropdown.Item>Dirección</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/new-place">
                        <Dropdown.Item>Lugar</Dropdown.Item>
                      </LinkContainer>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
                <Form className="d-flex" onSubmit={handleSearch}>
                  <Form.Control
                    type="search"
                    placeholder="Búsqueda..."
                    className="me-2"
                    aria-label="Search"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                  />
                  <Button variant="success" type="submit">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navigation;