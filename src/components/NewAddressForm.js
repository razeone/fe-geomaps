import { React, useState } from "react";
import { Container, Button, Form, Card, Modal } from "react-bootstrap";


const NewAddressForm = () => {
    const BE_POST_ENDPOINT = "http://localhost/geomaps/postAddress.php";
    
    const [firstLine, setFirstLine] = useState("");
    const [secondLine, setSecondLine] = useState("");
    const [colony, setColony] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

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
    const handleShow = () => setShow(true);
    
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
            console.log(reqData);
            let response = await fetch(BE_POST_ENDPOINT, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "x=" + JSON.stringify(reqData)
            });
            let data = await response.json();
            if(data > 0){
                handleShow();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch(err){
            console.log(err);
        }
    }

    return (
        <Container className="mt-5">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>La dirección se ha creado con éxito!</Modal.Body>
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
                            <Form.Control type="text" value={secondLine} maxLength="255" onChange={(e) => setSecondLine(e.target.value)} placeholder="Información adicional" required />
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