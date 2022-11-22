import { useState, React } from "react";
import { Table, Button, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CountriesTable = ({ countries }) => {
    // Function to filter the countries based on the search input
    const [search, setSearch] = useState("");
    const filteredCountries = countries.filter((country) => {
        return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
        <Container>
            <Row>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Filtrar..." />
            </Row>
            <br />
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Código de País</th>
                            <th>Código de Llamada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCountries.map((country) => (
                            <tr key={country.name}>
                                <td>
                                    <LinkContainer to={`/country-population/${country.name}`}>
                                        <Button variant="link">{country.name}</Button>
                                    </LinkContainer>
                                </td>
                                <td>{country.country_code}</td>
                                <td>{country.phone_code}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default CountriesTable;