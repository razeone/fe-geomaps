const BE_ENDPOINT = "https://api.geomaps.raze.mx/api/getStates.php";

const getStates = async () => {
    return fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export default getStates;
