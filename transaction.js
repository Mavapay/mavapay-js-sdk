const handleError = require("./utils/errorHandler");
module.exports = (client) => ({
    getAllTransactions: async () => {
        try {
            const response = await client.get('/transactions');
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },

    getTransaction: async (transactionId) => {
        try {
            const response = await client.get('/transaction', {params: {id: transactionId}});
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },
});
