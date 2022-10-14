const BE_ENDPOINT = "http://20.72.160.116/getCities.php";

const getCities = () => {
    return fetch(BE_ENDPOINT)
        .then((res) => res.json())
}

export default getCities;
