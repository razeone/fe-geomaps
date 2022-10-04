const getGeoLocation = async () => {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    } else {
        return Promise.reject("Geolocation is not supported by this browser.");
    }
};

export default getGeoLocation;
