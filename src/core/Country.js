const BE_ENDPOINT = "http://20.62.142.96/getCountries.php";

const getCountries = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export default getCountries;
