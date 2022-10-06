const BE_ENDPOINT = "http://localhost/geomaps/getCountries.php";

const getCountries = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export default getCountries;
