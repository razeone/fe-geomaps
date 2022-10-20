import {React} from "react";
import Navigation from "./components/Navigation";
import CarouselBig from "./components/CarouselBig";
import LoginForm from "./components/LoginForm";
import FeaturesCards from "./components/FeaturesCards";
import './App.css';
import useToken from "./components/useToken";
import Footer from "./components/Footer";
import PlacesMap from "./components/PlacesMap";
import 'leaflet/dist/leaflet.css';

function App() {

  const { token, setToken } = useToken();

  if(!token){
    return <LoginForm setToken={setToken} />
  }
  
  return (
    <div className="App">
      <Navigation token={token} />
      <CarouselBig />
      <br />
      <PlacesMap places={[]} />
      <br />
      <FeaturesCards />
      <Footer />
    </div>
  );
}

export default App;
