import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
  return (
    <>
        <Navbar key="xxl" bg="light" expand="xxl" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">GeoMaps</Navbar.Brand>
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
                  <Nav.Link href="#action1">Mis Lugares</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-$"xxl"`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
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