import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import getMyPlaces from "../core/Place";
import { Button, Container, Row } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import PlacesMap from "../components/PlacesMap";


const Home = () => {
    const [places , setPlaces] = useState([]);

    useEffect(() => {
        getMyPlaces().then((data) => {
            setPlaces(data);
        });
    }, []);

    return (
        <>
            <Navigation />
            <h1>Mis Lugares</h1>
            <Container>
                <Row>
                    <Button variant="success" href="/new-place">Agregar lugar</Button>
                </Row>
                <br />
                <Row>
                    <PlacesMap places={places} />
                </Row>
            </Container>
            <br />
            <Footer />
        </>);
  };
  
export default Home;
  