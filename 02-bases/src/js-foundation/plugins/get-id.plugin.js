const cryptoPlugin = require('crypto');

const getCrypto = () => {
    return cryptoPlugin.randomBytes(16).toString('hex');
}

module.exports = {
    getCrypto
}
