const BE_ENDPOINT = "https://api.geomaps.raze.mx/api/";

const getCountries = async () => {
    return fetch(BE_ENDPOINT + "getCountries.php")
        .then((res) => res.json())
        .then((data) => data);
}

export const getTopCountriesPopulation = async () => {
    return fetch(BE_ENDPOINT + "getCountriesPopulation.php")
        .then((res) => res.json())
        .then((data) => data);
}

export const getCountryPopulationByName = async (countryName) => {
    return fetch(BE_ENDPOINT + "getCountryPopulationByName.php?countryName=" + countryName)
        .then((res) => res.json())
        .then((data) => data);
}

export default getCountries;
