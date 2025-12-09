const { getAge } = require('./get-age.plugin');
const { getCrypto } = require('./get-id.plugin');
const { http, axiosGet } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
    getAge,
    getCrypto,
    http, 
    axiosGet,
    buildLogger
}