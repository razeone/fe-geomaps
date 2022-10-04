import { React, useState } from "react";
import { Container, Button, Form, Card, Alert } from "react-bootstrap";

const NewAddressForm = () => {
    const BE_ENDPOINT = "http://localhost:8080/addresses";
    const HEADERS = {
        'Content-Type': 'application/json'
    };
    const [firstLine, setFirstLine] = useState("");
    const [secondLine, setSecondLine] = useState("");
    const [colony, setColony] = useState("");
    const [city, setCity] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log('Handling submit');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Container className="mt-5">
            <Card>
                <Card.Header>
                    <h1>Nueva Dirección</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Primera línea</Form.Label>
                            <Form.Control type="text" value={firstLine} maxLength="255" onChange={(e) => setFirstLine(e.target.value)} placeholder="Calle, número" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress2">
                            <Form.Label>Segunda línea</Form.Label>
                            <Form.Control type="text" value={secondLine} maxLength="255" onChange={(e) => setSecondLine(e.target.value)} placeholder="Información adicional" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicColony">
                            <Form.Label>Colonia</Form.Label>
                            <Form.Control type="text" value={colony} maxLength="255" onChange={(e) => setColony(e.target.value)} placeholder="Colonia" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" value={city} maxLength="255" onChange={(e) => setCity(e.target.value)} placeholder="Ingrese ciudad" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPostalCode">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control type="text" maxLength="5" placeholder="Ingrese código postal" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>{' '}
                        <Button variant="secondary" type="button">
                            Cancelar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
            
    );
};

export default NewAddressForm;