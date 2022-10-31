import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryPopulationChart from "../components/CountryPopulationChart";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import {getCountryPopulationByName} from "../core/Country";

const CountryPopulation = () => {
    const { country } = useParams();
    const [countryData, setCountryData] = useState([]);
    
    useEffect(() => {
        getCountryPopulationByName(country).then((data) => {
            setCountryData(data);
        });
    }, [country]);
    
    return (
        <div>
        <Navigation />
        <h1>{country}</h1>
        <CountryPopulationChart countryData={countryData} />
        <Footer />
        </div>
    );
};

export default CountryPopulation;