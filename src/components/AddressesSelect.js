import React from "react";
import { Form } from "react-bootstrap";

const AddressesSelect = ({ addresses, onChange }) => {

    return (
        <Form.Select onChange={onChange}>
            {addresses.map((address) => (
                <option key={address.address_id} value={address.address_id}>{address.first_line}: {address.colony} {address.postal_code}</option>
            ))}
        </Form.Select>
    );

};

export default AddressesSelect;