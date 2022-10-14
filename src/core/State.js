const BE_ENDPOINT = "http://20.72.160.116/getStates.php";

const getStates = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export default getStates;
