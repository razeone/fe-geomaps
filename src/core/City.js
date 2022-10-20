const BE_ENDPOINT = "http://20.72.155.32/api/getCities.php";

const getCities = () => {
    return fetch(BE_ENDPOINT)
        .then((res) => res.json())
}

export default getCities;
