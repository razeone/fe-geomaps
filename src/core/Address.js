const BE_ENDPOINT = "http://20.72.155.32/api/";
const ALL_ADDRESSES = "getAddresses.php";
const SINGLE_ADDRESS = "getAddressById.php";
const HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

const getAddresses = async () => {
    return fetch(BE_ENDPOINT + ALL_ADDRESSES)
        .then((res) => res.json())
        .then((data) => data);
}

const getAddressById = async (id) => {
    return fetch(BE_ENDPOINT + SINGLE_ADDRESS + "?address_id=" + id)
        .then((res) => res.json())
        .then((data) => data);
}

const deleteAddressById = async (id) => {
    return fetch(BE_ENDPOINT + "deleteAddressById.php?address_id=" + id)
        .then((res) => res.json())
        .then((data) => data);
}

const putAddress = async (reqData) => {
    return fetch(BE_ENDPOINT + "putAddress.php", {
        method: 'POST',
        mode: "cors",
        headers: HEADERS,
        body: "x=" + JSON.stringify(reqData)
    })
        .then((res) => res.json())
        .then((data) => data);
}

const postAddress = async (reqData) => {
    return fetch(BE_ENDPOINT + "postAddress.php", {
        method: 'POST',
        mode: "cors",
        headers: HEADERS,
        body: "x=" + JSON.stringify(reqData)
    })
        .then((res) => res.json())
        .then((data) => data);
}

export { getAddressById, deleteAddressById, putAddress, postAddress };
export default getAddresses;