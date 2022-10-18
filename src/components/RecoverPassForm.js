import React from "react";
import { Button, Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';



const RecoverPassForm = () => {

    const BE_ENDPOINT = "http://20.172.227.163/showvars.php";
    const [email, setEmail] = React.useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let reqData = {
                email: email
            };
            console.log('Handling submit');
            console.log(reqData);
            const response = await fetch(BE_ENDPOINT, {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(reqData)
            });
            const data = await response.json();
            alert("Response, email: " + data.email);
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