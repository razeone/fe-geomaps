const BE_ENDPOINT = 'http://20.72.155.32/api/getMyPlaces.php';

export const getMyPlaces = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export const searchPlaces = async (searchTerm) => {
    return await fetch("http://20.72.155.32/api/search/" + searchTerm)
        .then((res) => res.json())
        .then((data) => data);
}

export const getPlaceById = async (id) => {
    return await fetch("http://20.72.155.32/api/getPlaceById.php?place_id=" + id)
        .then((res) => res.json())
        .then((data) => data);
}

export default getMyPlaces;