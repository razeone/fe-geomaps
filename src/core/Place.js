const BE_ENDPOINT = 'http://localhost/geomaps/getMyPlaces.php';

export const getMyPlaces = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export const searchPlaces = async (searchTerm) => {
    return await fetch("http://localhost:8000/like/" + searchTerm)
        .then((res) => res.json())
        .then((data) => data);
}

export const getPlaceById = async (id) => {
    return await fetch("http://localhost/geomaps/getPlaceById.php?place_id=" + id)
        .then((res) => res.json())
        .then((data) => data);
}

export default getMyPlaces;