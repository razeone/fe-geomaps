import { Form } from "react-bootstrap";

const CountriesSelect = (countries) => {
    
    return (
        <Form.Select aria-label="Seleccione un país">
            <option>Seleccione una País</option>
            {
                countries.countries.map((country, index) => {
                    return <option key={index} value={country.country_id}>{country.name}</option>
                })
            }
        </Form.Select>
    );
}

export default CountriesSelect;