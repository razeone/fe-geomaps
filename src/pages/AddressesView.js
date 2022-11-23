import Navigation from "../components/Navigation";
import { Container, Row, Button } from "react-bootstrap";
import AddressesTable from "../components/AddressesTable";
import getAddresses from "../core/Address";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const AddressesView = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        getAddresses().then((data) => setAddresses(data));
    }, []);

    return (
        <div>
            <Navigation />
            <h1>Direcciones</h1>
            <Container>
                <Row>
                    <Button variant="success" href="/new-address">Agregar dirección</Button>
                </Row>
                <br />
                <Row>
                    <div className="col-12">
                        <AddressesTable addresses={addresses} />
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>);
  };
  
export default AddressesView;
  