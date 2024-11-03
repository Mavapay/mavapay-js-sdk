const axios = require('axios');

const createClient = (baseURL, apiKey, timeout = 10000) => {
    return axios.create({
        baseURL,
        timeout,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
        },
    });
};

module.exports = { createClient };
