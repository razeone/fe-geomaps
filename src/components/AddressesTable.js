import React from "react";
import { Table } from "react-bootstrap";

const AddressesTable = ({ addresses }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Primera línea</th>
                <th>Segunda línea</th>
                <th>ID Ciudad</th>
                <th>Colonia</th>
                <th>Código postal</th>
                </tr>
            </thead>
            <tbody>
                {addresses.map((address) => (
                <tr key={address.address_id}>
                    <td>{address.address_id}</td>
                    <td>{address.first_line}</td>
                    <td>{address.second_line}</td>
                    <td>{address.city_id}</td>
                    <td>{address.colony}</td>
                    <td>{address.postal_code}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AddressesTable;
