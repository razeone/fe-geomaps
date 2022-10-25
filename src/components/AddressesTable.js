import React from "react";
import { Table, Button } from "react-bootstrap";
import { deleteAddressById } from "../core/Address";
import { Pencil, Trash  } from 'react-bootstrap-icons';

const AddressesTable = ({ addresses }) => {
    const confirmDeleteAddress = (e) =>{
        if (window.confirm("¿Está usted seguro de querer borrar esta dirección?")) {
            deleteAddressById(e.target.value);
            window.location.reload();
        }
    }

    const editThisAddress = (e) => {
        window.location.href = "/edit-address/" + e.target.value;
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
                    <td>
                        <Button variant="outline-primary" title="Editar..." value={address.address_id} onClick={editThisAddress}><Pencil /></Button>{' '}
                        <Button variant="outline-danger" title="Eliminar..." value={address.address_id} onClick={confirmDeleteAddress}><Trash /></Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AddressesTable;
