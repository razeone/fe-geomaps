import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

function Login() {
  return (
    <Container className="mt-5">
    <Card>
        <Card.Header>
            <h1>Iniciar Sesión</h1>
        </Card.Header>
    <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese email" />
            <Form.Text className="text-muted">
            Nunca compartiremos su e-mail con nadie más.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuérdame" />
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
  );
}

export default Login;