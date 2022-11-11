const BE_ENDPOINT = "https://api.geomaps.raze.mx";
const HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

export const getMyPlaces = async () => {
    return fetch(BE_ENDPOINT + '/api/getMyPlaces.php')
        .then((res) => res.json())
        .then((data) => data);
}

export const searchPlaces = async (searchTerm) => {
    return fetch(BE_ENDPOINT + "/api/search/" + searchTerm)
        .then((res) => res.json())
        .then((data) => data);
}

export const getPlaceById = async (id) => {
    return fetch(BE_ENDPOINT + "/api/getPlaceById.php?place_id=" + id)
        .then((res) => res.json())
        .then((data) => data);
}

export const postPlace = async (reqData) => {
    return fetch(BE_ENDPOINT + '/api/postPlace.php', {
        method: 'POST',
        mode: "cors",
        headers: HEADERS,
        body: "x=" + JSON.stringify(reqData)
    })
        .then((res) => res.json())
        .then((data) => data);
}


export default getMyPlaces;