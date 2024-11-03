// test.js
// const MavaPay = require('mavapay-sdk');
const MavaPay = require('./index');
const Currency = require('./enums/currency');
const PaymentMethod = require('./enums/paymentMethod');


// Replace with actual API key and base URL
const apiKey = 'api-key';
const baseURL = 'https://staging.mavapay.co/api';
const timeout = 15000;

// Initialize the SDK
const mavapay = new MavaPay(baseURL, apiKey, timeout);

// Test each endpoint in the SDK
async function runTests() {
    try {
        // Bank Endpoints
        console.log("Testing getBankCode...");
        const bankCodes = await mavapay.bank.getBankCode();
        console.log("Bank Codes:", bankCodes);

        // console.log("Testing nameEnquiry...");
        // const accountInfo = await mavapay.bank.nameEnquiry('0126242022', '000013');
        // console.log("Account Info:", accountInfo);

        // // Quote Endpoints
        // console.log("Testing createQuote...");
        // const newQuote = await mavapay.quote.createQuote({
        //     amount: 300000,
        //     sourceCurrency: Currency.BTC,
        //     targetCurrency: Currency.NGN,
        //     paymentMethod: PaymentMethod.LIGHTNING,
        //     paymentCurrency: Currency.NGN,
        // });
        // console.log("New Quote:", newQuote);

        // console.log("Testing acceptQuote...");
        // const acceptedQuote = await mavapay.quote.acceptQuote({
        //     id: '6424902d-1cdb-44fd-bc68-590579f3688f',
        //     bankAccountNumber: '12345678',
        //     bankCode: '000013',
        //     bankAccountName: 'John Doe',
        //     memo: 'Payment for services',
        //     descriptionHash: 'example_hash',
        // });
        // console.log("Accepted Quote:", acceptedQuote);
        //
        // // Order Endpoints
        // console.log("Testing getOrder...");
        // const orderDetails = await mavapay.order.getOrder('85144-2662');
        // console.log("Order Details:", orderDetails);
        //
        // console.log("Testing getAllOrders...");
        // const allOrders = await mavapay.order.getAllOrders();
        // console.log("All Orders:", JSON.stringify(allOrders));
        //
        // // Transaction Endpoints
        // console.log("Testing getAllTransactions...");
        // const transactions = await mavapay.transaction.getAllTransactions();
        // console.log("Transactions:", transactions);
        //
        // console.log("Testing getTransaction...");
        // const transaction = await mavapay.transaction.getTransaction('transaction_id');
        // console.log("Transaction:", transaction);

        console.log("All tests completed successfully!");
    } catch (error) {
        console.error("Test failed:", error);
    }
}

// Run the tests
runTests();
