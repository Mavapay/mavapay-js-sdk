const handleError = require('./utils/errorHandler');

module.exports = (client) => ({
    createQuote: async ({
                            amount,
                            sourceCurrency,
                            targetCurrency,
                            paymentMethod,
                            paymentCurrency,
                        }) => {
        try {
            const response = await client.post('/quote', {
                amount,
                sourceCurrency,
                targetCurrency,
                paymentMethod,
                paymentCurrency,
            });
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },

    acceptQuote: async ({
                            id,
                            bankAccountNumber,
                            bankCode,
                            bankAccountName,
                            memo,
                            descriptionHash,
                        }) => {
        try {
            const response = await client.get(`/quote/accept`, {
                params: {id, bankAccountNumber, bankCode, bankAccountName, memo, descriptionHash},
            });
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },
});
