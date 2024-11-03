const handleError = require("./utils/errorHandler");
module.exports = (client) => ({
    getBankCode: async () => {
        try {
            const response = await client.get('/bank/bankcode');
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },

    nameEnquiry: async (accountNumber, bankCode) => {
        try {
            const response = await client.get('/bank/name-enquiry', {
                params: {accountNumber, bankCode},
            });
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },
});
