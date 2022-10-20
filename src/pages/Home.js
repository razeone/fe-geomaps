import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import getMyPlaces from "../core/Place";
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
        <div>
            <Navigation />
            <h1>Mis Lugares</h1>
            <PlacesMap places={places} />
            <br />
            <Footer />
        </div>);
  };
  
export default Home;
  