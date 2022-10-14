const BE_ENDPOINT = "http://20.72.160.116/getCountries.php";

const getCountries = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export default getCountries;
