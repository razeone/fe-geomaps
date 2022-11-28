import React from "react";
import { Button, Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
const BE_ENDPOINT = "https://api.geomaps.raze.mx/api/recover-password/";


const RecoverPassForm = () => {
    const [email, setEmail] = React.useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log('Handling submit');
            const response = await fetch(BE_ENDPOINT + email, {
                method: 'GET',
                mode: "cors",
            });
            const data = await response.json();
            console.log(data.message);
            alert("Revise su E-mail para continuar con el proceso de recuperación de contraseña");
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Container className="mt-5">
            <Card>
                <Card.Header>
                    <h1>Recuperar Contraseña</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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