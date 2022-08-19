import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const NewPlace = () => {
    return(
    <Container className="mt-5">
    <Card>
        <Card.Header>
            <h1>Nuevo Lugar</h1>
        </Card.Header>
    <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="email" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="email" placeholder="Ingrese descripción" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Número de Teléfono</Form.Label>
            <Form.Control type="email" placeholder="Ingrese número telefónico" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="email" placeholder="Ingrese dirección" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicServiceTime">
            <Form.Label>Horario de Servicio</Form.Label>
            <Form.Control type="email" placeholder="Ingrese horario de servicio" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLatitude">
            <Form.Label>Latitud</Form.Label>
            <Form.Control type="email" placeholder="Ingrese latitud" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLongitude">
            <Form.Label>Longitud</Form.Label>
            <Form.Control type="email" placeholder="Ingrese longitud" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Enviar
        </Button>{' '}
        <LinkContainer to="/">
            <Button variant="secondary" type="button">
                Cancelar
            </Button>
        </LinkContainer>
        </Form>
    </Card.Body>
    </Card>
    </Container>
  )};
  
export default NewPlace;
  
