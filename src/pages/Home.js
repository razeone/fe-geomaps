import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


const Home = () => {
    return (
        <div>
            <Navigation />
            <h1>Mis Lugares</h1>
            <MapContainer center={[19.39, -99.13]} zoom={11} scrollWheelZoom={false} id="map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <br />
            <Footer />
        </div>);
  };
  
export default Home;
  