const BE_ENDPOINT = "http://20.62.142.96/"
const ALL_ADDRESSES = "getAddresses.php";
const SINGLE_ADDRESS = "getAddressById.php";

const getAddresses = async () => {
    return await fetch(BE_ENDPOINT + ALL_ADDRESSES)
        .then((res) => res.json())
        .then((data) => data);
}

const getAddressById = async (id) => {
    return await fetch(BE_ENDPOINT + SINGLE_ADDRESS + "?address_id=" + id)
        .then((res) => res.json())
        .then((data) => data);
}

const deleteAddressById = async (id) => {
    return await fetch(BE_ENDPOINT + "deleteAddressById.php?address_id=" + id)
        .then((res) => res.json())
        .then((data) => data);
}


export default getAddresses;
export { getAddressById, deleteAddressById };
