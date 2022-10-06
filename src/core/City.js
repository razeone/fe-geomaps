const BE_ENDPOINT = "http://localhost/geomaps/getCities.php";

const getCities = () => {
    return fetch(BE_ENDPOINT)
        .then((res) => res.json())
}

export default getCities;
