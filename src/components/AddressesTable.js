import { React} from "react";
import { Table, Button } from "react-bootstrap";
import { deleteAddressById } from "../core/Address";
import { Pencil, Trash  } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const AddressesTable = ({ addresses }) => {
    const navigate = useNavigate();

    const confirmDeleteAddress = (e) =>{
        if (window.confirm("¿Está usted seguro de querer borrar esta dirección?")) {
            deleteAddressById(e);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }

    const editThisAddress = (e) => {
        navigate("/edit-address/" + e);
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
                        <Button variant="outline-primary" title="Editar..." onClick={() => editThisAddress(address.address_id)}><Pencil /></Button>{' '}
                        <Button variant="outline-danger" title="Eliminar..." onClick={() => confirmDeleteAddress(address.address_id)}><Trash /></Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AddressesTable;
