import React from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CountriesTable = ({ countries }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Código de País</th>
                    <th>Código de Llamada</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((country) => (
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
    );
}

export default CountriesTable;