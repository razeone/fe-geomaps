const BE_ENDPOINT = "http://20.62.142.96/getCities.php";

const getCities = () => {
    return fetch(BE_ENDPOINT)
        .then((res) => res.json())
}

export default getCities;
