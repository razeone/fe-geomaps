const BE_ENDPOINT = "https://api.geomaps.raze.mx/api/getCities.php";

const getCities = () => {
    return fetch(BE_ENDPOINT)
        .then((res) => res.json())
}

export default getCities;
