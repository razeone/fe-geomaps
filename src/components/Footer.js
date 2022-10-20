import { Container, Button } from "react-bootstrap"
import Nav from "react-bootstrap/Nav";
import { ChevronUp } from "react-bootstrap-icons";

const Footer = () => {

    const backToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <Container fluid className="bg-dark text-light text-center p-3">
            <p>GeoMaps &copy; 2022</p>
            <Nav.Link href="mailto:contacto@geomaps.raze.mx">Contacto</Nav.Link>
            <br />
            <Button title="Subir..." variant="outline-light" onClick={backToTop}><ChevronUp /></Button>
        </Container>
    );
};

export default Footer;