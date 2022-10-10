import React from "react";
import { Table, Button } from "react-bootstrap";
import { deleteAddressById } from "../core/Address";

const AddressesTable = ({ addresses }) => {
    const confirmDeleteAddress = (e) =>{
        console.log(e.target.value);
        if (window.confirm("Are you sure you want to delete this address?")) {
            deleteAddressById(e.target.value);
            window.location.reload();
        }
    }
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
                <th>Acciones</th>
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
                    <td><Button variant="outline-primary">Editar</Button> <Button variant="outline-danger" value={address.address_id} onClick={confirmDeleteAddress}>Eliminar</Button></td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AddressesTable;
