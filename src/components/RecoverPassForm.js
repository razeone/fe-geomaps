import React from "react";
import { Button, Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';



const RecoverPassForm = () => {
    return (
        <Container className="mt-5">
            <Card>
                <Card.Header>
                    <h1>Recuperar Contraseña</h1>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email" required />
                            <Form.Text className="text-muted">
                                Nunca compartiremos su e-mail con nadie más.
                            </Form.Text>
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
};

export default RecoverPassForm;