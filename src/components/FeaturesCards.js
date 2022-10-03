import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const FeaturesCards = () => {
    return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Privacidad en Mente</Card.Title>
          <Card.Text>
            Nuestro objetivo es que tu privacidad sea respetada, por eso solamente almacenamos la información que tu nos das.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Leer mas...</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Mapas Personalizados</Card.Title>
          <Card.Text>
            Nosotros creemos en la personalización, por eso te damos la posibilidad de crear tus propios mapas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Leer más...</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Compartir!</Card.Title>
          <Card.Text>
            Comparte tus lugares, guarda fotos y mucho más!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Leer más...</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default FeaturesCards;