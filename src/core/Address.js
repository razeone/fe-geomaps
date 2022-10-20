const BE_ENDPOINT = "http://20.72.155.32/api/";
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

export { getAddressById, deleteAddressById };
export default getAddresses;