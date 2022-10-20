import Navigation from "../components/Navigation";
import AddressesTable from "../components/AddressesTable";
import getAddresses from "../core/Address";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const AddressesView = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        getAddresses().then((data) => setAddresses(data));
    }, []);

    return (
        <div>
            <Navigation />
            <h1>Direcciones</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <AddressesTable addresses={addresses} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>);
  };
  
export default AddressesView;
  