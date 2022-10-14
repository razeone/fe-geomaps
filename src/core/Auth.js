const BE_ENDPOINT = "http://20.72.160.116/";

const authenticateUser = async (reqData) => {
    return await fetch(BE_ENDPOINT + "getSessionToken.php", {
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
    return await fetch(BE_ENDPOINT + "logout.php", {
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
