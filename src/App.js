import {React, lazy } from "react";
// const AvatarComponent = lazy(() => import('./AvatarComponent'));
import useToken from "./components/useToken";
import 'leaflet/dist/leaflet.css';
import './App.css';

const Navigation = lazy(() => import('./components/Navigation'));
const CarouselBig = lazy(() => import('./components/CarouselBig'));
const PlacesMap = lazy(() => import('./components/PlacesMap'));
const FeaturesCards = lazy(() => import('./components/FeaturesCards'));
const Footer = lazy(() => import('./components/Footer'));
const LoginForm = lazy(() => import('./components/LoginForm'));

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
