const axios = require("axios");

const fetchResponseByURL = async (relativeURL) => {
    return await axios.get(`https://api.deezer.com/${relativeURL}`)
        .then(res => res)
        .catch(err => err);
}

module.exports = fetchResponseByURL
