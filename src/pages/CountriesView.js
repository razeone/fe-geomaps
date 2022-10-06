import Navigation from "../components/Navigation";
import CountriesTable from "../components/CountriesTable";
import getCountries from "../core/Country";
import { useState } from "react";

const CountriesView = () => {
    //const countries = getCountries();
    const [countries, setCountries] = useState([]);
    getCountries().then((data) => setCountries(data));

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
            
        </div>);
  };
  
export default CountriesView;
  