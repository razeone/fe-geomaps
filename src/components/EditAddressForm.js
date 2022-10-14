import { React, useState, useEffect } from "react";
import { Container, Button, Form, Card, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAddressById } from "../core/Address";
import { LinkContainer } from 'react-router-bootstrap';

const EditAddressForm = () => {
    const BE_PUT_ENDPOINT = "http://20.72.160.116/putAddress.php";

    const { addressId } = useParams();
    
    const [firstLine, setFirstLine] = useState("");
    const [secondLine, setSecondLine] = useState("");
    const [colony, setColony] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        getAddressById(addressId).then((data) => {
            setCity(data[0].city_id);
            setFirstLine(data[0].first_line);
            setSecondLine(data[0].second_line);
            setColony(data[0].colony);
            setPostalCode(data[0].postal_code);
        });
    }, [addressId, setFirstLine, setSecondLine, setCity, setPostalCode]);

    const handleChangeCitySelect = (e) => {
        setCity(e.target.value);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let reqData = {
                firstLine: firstLine,
                secondLine: secondLine,
                colony: colony,
                city: city,
                postalCode: postalCode,
                addressId: addressId
            };
            console.log(reqData);
            let response = await fetch(BE_PUT_ENDPOINT, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "x=" + JSON.stringify(reqData)
            });
            let data = await response.json();
            if(data !== ""){
                setMessage("La dirección se ha actualizado con éxito!");
                handleShow();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch(err){
            console.log(err);
            setMessage("Error al guardar la dirección");
            handleShow();
            window.location.reload();
        }
    }

    return (
        <Container className="mt-5">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            <Card>
                <Card.Header>
                    <h1>Editar Dirección</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Select value={city} onChange={handleChangeCitySelect} required>
                                <option value="">Seleccione una ciudad</option>
                                <option value="15024">Cuautitlán</option>
                                <option value="9014">Benito Juárez</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Primera línea</Form.Label>
                            <Form.Control type="text" value={firstLine} maxLength="255" onChange={(e) => setFirstLine(e.target.value)} placeholder="Calle, número" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress2">
                            <Form.Label>Segunda línea</Form.Label>
                            <Form.Control type="text" value={secondLine} maxLength="255" onChange={(e) => setSecondLine(e.target.value)} placeholder="Información adicional"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicColony">
                            <Form.Label>Colonia</Form.Label>
                            <Form.Control type="text" value={colony} maxLength="255" onChange={(e) => setColony(e.target.value)} placeholder="Colonia" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPostalCode">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control type="text" maxLength="5" pattern="[0-9]{5}" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} title="El código postal permitido es de 5 dígitos, por ejemplo: 03510" placeholder="Ingrese código postal" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>{' '}
                        <LinkContainer to="/addresses">
                            <Button variant="secondary" type="submit">
                                Cancelar
                            </Button>
                        </LinkContainer>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
            
    );
};

export default EditAddressForm;