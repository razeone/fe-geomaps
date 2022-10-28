const BE_ENDPOINT = "http://20.72.155.32/api/";

const getCountries = async () => {
    return await fetch(BE_ENDPOINT + "getCountries.php")
        .then((res) => res.json())
        .then((data) => data);
}

export const getTopCountriesPopulation = async () => {
    return await fetch(BE_ENDPOINT + "getCountriesPopulation.php")
        .then((res) => res.json())
        .then((data) => data);
}

export default getCountries;
