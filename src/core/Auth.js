const BE_ENDPOINT = "https://api.geomaps.raze.mx/api/";

const authenticateUser = async (reqData) => {
    return fetch(BE_ENDPOINT + "getSessionToken.php", {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "x=" + JSON.stringify(reqData)
    }).then((res) => res.json())
      .then((data) => data);
}

const logoutUser = async (reqData) => {
    return fetch(BE_ENDPOINT + "logout.php", {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "x=" + JSON.stringify(reqData)
    }).then((res) => res.json())
        .then((data) => data);
}

export default authenticateUser;
export { logoutUser };
