import { Form } from "react-bootstrap";

const CitiesSelect = (cities) => {
    console.log("CitiesSelect");
    console.log(cities);
   
    return (
        <Form.Select aria-label="Default select example">
            <option>Selecciona una ciudad</option>
            {
                Object.keys(cities).map((key, value) => {
                    return <option key={key} value={value.city_id}>{value.name}</option>
                })
            }
        </Form.Select>
    );
}

export default CitiesSelect;