import Carousel from 'react-bootstrap/Carousel';

function CarouselBig() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner3.png"
          alt="Encuantra todo lo que buscas... - Camello"
        />
        <Carousel.Caption>
          <h3>Geo referenciación</h3>
          <p>Utiliza los servicios de geo referenciación de GeoMaps</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner1.png"
          alt="Guarda un lugar y vuelve a él cuantas veces quieras - Combi Volkswagen"
        />

        <Carousel.Caption>
          <h3>Lugares Personalizados</h3>
          <p>Crea y almacena tus propios lugares de relevancia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner2.png"
          alt="Llega a donde tu imaginación desee - Torre Eiffel"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBig;