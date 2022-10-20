import React from "react";
import { Table } from "react-bootstrap";

const SearchResultsTable = ({ results }) => {

    if(results.length === 0){
        return (
            <div>
                <h3>No se han encontrado resultados</h3>
            </div>
        )
    }
    else {

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Teléfono</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((place) => (
                    <tr key={place.place_id}>
                        <td>{place.place_id}</td>
                        <td>{place.name}</td>
                        <td>{place.description}</td>
                        <td>{place.phone_number}</td>
                        <td>{place.latitude}</td>
                        <td>{place.longitude}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
};

export default SearchResultsTable;
