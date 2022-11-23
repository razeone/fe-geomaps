import {React, useState} from "react";
import { Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import { XLg, CheckLg, Search, PlusLg, Globe } from 'react-bootstrap-icons';

function Navigation(token) {
  const [searchString, setSearchString] = useState("");
  const handleSearch = (e) => {
      e.preventDefault();
      window.location.href = "/search-place/" + searchString;
  }

  let sessionButton = {
    location: '/login',
    component: <CheckLg />,
    variant: 'success',
    title: 'Iniciar Sesión'
  }

  if(token){
    sessionButton = {
      location: '/logout',
      component: <XLg />,
      variant: 'danger',
      title: 'Cerrar Sesión'
    }
  }

  return (
    <>
        <Navbar key="xxl" bg="dark" variant="dark" expand="xxl" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
            <img
              alt=""
              src="/favicon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              GeoMaps
            </Navbar.Brand>
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
                </Nav>
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Dropdown>
                    <Dropdown.Toggle title="Mundo..." variant="success"> <Globe /> </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <LinkContainer to="/countries">
                        <Dropdown.Item>Países</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/top-world-population">
                        <Dropdown.Item>Top 10 Población Mundial</Dropdown.Item>
                      </LinkContainer>
                    </Dropdown.Menu>
                  </Dropdown>
                  <span className="ms-2">
                  </span>
                  <Dropdown>
                    <Dropdown.Toggle title="Agregar..." variant="success"> <PlusLg /> </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <LinkContainer to="/new-address">
                        <Dropdown.Item>Dirección</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/new-place">
                        <Dropdown.Item>Lugar</Dropdown.Item>
                      </LinkContainer>
                    </Dropdown.Menu>
                  </Dropdown>
                  <span className="ms-2"></span>
                  <Form className="d-flex" onSubmit={handleSearch}>
                    <Form.Control
                      type="search"
                      placeholder="Búsqueda..."
                      className="me-2"
                      aria-label="Search"
                      value={searchString}
                      onChange={(e) => setSearchString(e.target.value)}
                      required
                    />
                    <Button title="Buscar" variant="success" type="submit"><Search /></Button>
                  </Form>
                  <span className="ms-2">
                  </span>
                  <LinkContainer to={sessionButton.location}>
                      <Button title={sessionButton.title} variant={sessionButton.variant}>{sessionButton.component} </Button>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navigation;