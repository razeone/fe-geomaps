import { useEffect, useState } from "react"
import Navigation from "../components/Navigation";
import SearchResultsTable from "../components/SearchResultsTable";
import Footer from "../components/Footer";
import { searchPlaces } from "../core/Place";
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const [places, setPlaces] = useState([]);
    const [message, setMessage] = useState("Buscando...");

    const { name } = useParams();

    useEffect(() => {
        searchPlaces(name).then((data) => {
            setPlaces(data);
            data ? setMessage("Resultados de la búsqueda") : setMessage("No se encontraron resultados");
        });
    }, [name, setPlaces]);

    return (
        <div>
            <Navigation />
            <h1>Búsqueda:</h1>
            <div className="container">
                <h3>{message}</h3>
                <SearchResultsTable results={places} />
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default SearchResults;