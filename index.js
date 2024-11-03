const { createClient } = require('./config');
const bankEndpoints = require('./bank');
const quoteEndpoints = require('./quote');
const orderEndpoints = require('./order');
const transactionEndpoints = require('./transaction');

class MavaPay {
    constructor(baseURL, apiKey, timeout) {
        this.client = createClient(baseURL, apiKey, timeout);
        this.bank = bankEndpoints(this.client);
        this.quote = quoteEndpoints(this.client);
        this.order = orderEndpoints(this.client);
        this.transaction = transactionEndpoints(this.client);
    }
}

module.exports = MavaPay;
