const handleError = require("./utils/errorHandler");
module.exports = (client) => ({
    getOrder: async (orderId) => {
        try {
            const response = await client.get(`/order`, {params: {id: orderId}});
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },

    getAllOrders: async () => {
        try {
            const response = await client.get('/order/all');
            return response.data;
        } catch (error) {
            handleError(error);
        }
    },
});
