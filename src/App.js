import React from "react";
import Navigation from "./components/Navigation";
import CarouselBig from "./components/CarouselBig";

import './App.css';
import FeaturesCards from "./components/FeaturesCards";


function App() {
  return (
    <div className="App">
      <Navigation />
      <CarouselBig />
      <br />
      <FeaturesCards />
    </div>
  );
}

export default App;
