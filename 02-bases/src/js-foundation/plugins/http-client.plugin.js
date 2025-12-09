const axios = require('axios');

const axiosGet = async(url) => {
    const { data } = await axios.get(url);
    return data;
} 

const httpClientPlugin = {
    get: async(url) => {
        const resp = await fetch(url);
        return await resp.json();
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
};


module.exports = {
    http: httpClientPlugin,
    axiosGet
};