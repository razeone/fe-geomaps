import { React } from "react";
import { Form } from "react-bootstrap";

const StatesSelect = (states) => {
        
        return (
            <Form.Select aria-label="Default select example">
                <option>Selecciona un estado</option>
                {
                    states.states.map((state, index) => {
                        return <option key={index} value={state.state_id}>{state.name}</option>
                    })
                }
            </Form.Select>
        );
    }

export default StatesSelect;