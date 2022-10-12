const BE_ENDPOINT = "http://20.62.142.96/getStates.php";

const getStates = async () => {
    return await fetch(BE_ENDPOINT)
        .then((res) => res.json())
        .then((data) => data);
}

export default getStates;
