import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import { LinkContainer } from 'react-router-bootstrap';


const NewPlaceForm = () => {
    const BE_ENDPOINT = "http://localhost:8080/places";
    const HEADERS = {
        'Content-Type': 'application/json'
    };

    const successMessage = {"text": "Place created successfully", "type": "success"};
    const errorMessage = {"text":"Error happened", "type": "danger"};
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [serviceTime, setServiceTime] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [message, setMessage] = useState({});

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await fetch(BE_ENDPOINT, {
                method: "POST",
                headers: HEADERS,
                body: JSON.stringify({
                    name: name,
                    description: description,
                    phoneNumber: phoneNumber,
                    address: address,
                    serviceTime: serviceTime,
                    geometry: {
                        type: "Point",
                        coordinates: [latitude, longitude]
                    }
                }),
            });

            let resJson = await res.json();
            if(res.status === 201){
                setName("");
                setDescription("");
                setPhoneNumber("");
                setAddress("");
                setServiceTime("");
                setLatitude("");
                setLongitude("");
                console.log(resJson);
                setMessage({
                    ...successMessage
                });
            } else {
                setMessage({
                    ...errorMessage
                });
                console.log(resJson);
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    

    return(
    <Container className="mt-5">
    <Card>
        <Card.Header>
            <h1>Nuevo Lugar</h1>
        </Card.Header>
    <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ingrese descripción" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Número de Teléfono</Form.Label>
            <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Ingrese número telefónico" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ingrese dirección" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicServiceTime">
            <Form.Label>Horario de Servicio</Form.Label>
            <Form.Control type="text" value={serviceTime} onChange={(e) => setServiceTime(e.target.value)} placeholder="Ingrese horario de servicio" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLatitude">
            <Form.Label>Latitud</Form.Label>
            <Form.Control type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="Ingrese latitud" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLongitude">
            <Form.Label>Longitud</Form.Label>
            <Form.Control type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="Ingrese longitud" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Enviar
        </Button>{' '}
        <LinkContainer to="/">
            <Button variant="secondary" type="button">
                Cancelar
            </Button>
        </LinkContainer>
        <br />
        <br />
        <Alert key="success" variant={message.type}>
            {message.text ? <p>{message.text}</p> : null}
        </Alert>
        </Form>
    </Card.Body>
    </Card>
    </Container>);
};

export default NewPlaceForm;