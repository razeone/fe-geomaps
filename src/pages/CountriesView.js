import Navigation from "../components/Navigation";
import CountriesTable from "../components/CountriesTable";
import getCountries from "../core/Country";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const CountriesView = () => {
    const [countries, setCountries] = useState([]);
    

    useEffect(() => {
        getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div>
            <Navigation />
            <h1>Países</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <CountriesTable countries={countries} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>);
  };
  
export default CountriesView;
  