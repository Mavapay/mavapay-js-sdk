function handleError(error) {
    if (error.response) {
        // Server responded with a status outside the 2xx range
        const status = error.response.status;
        switch (status) {
            case 400:
                console.error("Bad Request: ", error.response.data.message || "Invalid request parameters.");
                break;
            case 401:
                console.error("Unauthorized: Please check your API key.");
                break;
            case 404:
                console.error("Not Found: The requested resource does not exist.");
                break;
            default:
                console.error(`Error ${status}: `, error.response.data.message || "An error occurred.");
        }
    } else if (error.request) {
        // No response received, possibly a network error
        console.error("Network Error: No response received from server.");
    } else if (error.code === 'ECONNABORTED') {
        // Timeout error
        console.error("Request Timeout: The request took too long to complete.");
    } else {
        // Other errors
        console.error("Error: ", error.message);
    }
    // throw error; // Re-throw the error to be handled by the calling function if necessary
}

module.exports = handleError;
