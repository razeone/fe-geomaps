import { React, useState } from "react";
import { Container, Button, Form, Card, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { postAddress } from "../core/Address";


const NewAddressForm = () => {
   
    const [firstLine, setFirstLine] = useState("");
    const [secondLine, setSecondLine] = useState("");
    const [colony, setColony] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");

    const handleChangeCountrySelect = (e) => {
        setCountry(e.target.value);
    }

    const handleChangeCitySelect = (e) => {
        setCity(e.target.value);
    }

    const handleChangeStateSelect = (e) => {
        setState(e.target.value);
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
                state: state,
                country: country,
                postalCode: postalCode
            };
            let response = await postAddress(reqData);
            if(response > 0){
                setMessage("La dirección se ha creado con éxito!");
                handleShow();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch(err){
            console.log(err);
            setMessage("Error al guardar la dirección");
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
                    <h1>Nueva Dirección</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Label>País</Form.Label>
                            <Form.Select onChange={handleChangeCountrySelect} required>
                                <option value="">Seleccione un país</option>
                                <option value="119">México</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select onChange={handleChangeStateSelect} required>
                                <option value="">Seleccione un estado</option>
                                <option value="15">Estado de México</option>
                                <option value="9">Ciudad de México</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Select onChange={handleChangeCitySelect} required>
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
                        <LinkContainer to="/">
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

export default NewAddressForm;