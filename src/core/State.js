const BE_ENDPOINT = "http://localhost/geomaps/getStates.php";

const getStates = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export default getStates;
