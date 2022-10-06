import { React, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm(){

    const BE_ENDPOINT = "http://20.172.227.163/showvars.php";
    //const BE_ENDPOINT = "http://192.168.100.169/showvars.php";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log('Handling submit');
            let reqData = {
                email: email,
                password: password
            };
            const response = await fetch(BE_ENDPOINT, {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(reqData)
            });
            const data = await response.json();
            alert("Response, email: " + data.email + ", password: " + data.password);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Container className="mt-5">
        <Card>
            <Card.Header>
                <h1>Iniciar Sesión</h1>
            </Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese email" required />
            <Form.Text className="text-muted">
            Nunca compartiremos su e-mail con nadie más.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuérdame" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Enviar
        </Button>{' '}
        <LinkContainer to="/">
            <Button variant="secondary" type="submit">
                Cancelar
            </Button>
        </LinkContainer>
        <br />
        <br />
        <Link to="/recover-password">Olvidé mi contraseña</Link>
        </Form>
    </Card.Body>
    </Card>
    </Container>
    );
}

export default LoginForm;