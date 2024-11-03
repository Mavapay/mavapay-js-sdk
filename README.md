# MavaPay JavaScript SDK

**MavaPay SDK** is a JavaScript library that provides an interface for interacting with the [MavaPay API](https://mavapay.co/). It allows users to send Bitcoin and receive the equivalent fiat amount in their bank accounts, using the Bitcoin Lightning Network for low fees and quick transfers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
    - [Bank](#bank)
    - [Quote](#quote)
    - [Order](#order)
    - [Transaction](#transaction)
- [Enums](#enums)
    - [Currency](#currency)
    - [Payment Method](#payment-method)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

To install the MavaPay SDK, simply add it to your project:

```bash
npm install mavapay-sdk
```
The SDK includes all dependencies, so you don’t need to install any additional packages.

## Usage
1. Initialize the SDK: Start by creating an instance of MavaPay with your API key and base URL (either staging or production).
```javascript
const MavaPay = require('mavapay-sdk');

const apiKey = 'your-api-key';
const baseURL = 'https://staging.mavapay.co/api';

const mavapay = new MavaPay(baseURL, apiKey);

```
2. Using API Methods: Use the SDK methods for various functionalities like retrieving bank codes, creating quotes, or viewing transactions.
```javascript
// Example: Fetching Bank Codes
mavapay.bank.getBankCode()
  .then(data => console.log('Bank Codes:', data))
  .catch(error => console.error('Error:', error));
```

## API Reference
### Bank
* getBankCode: Retrieves a list of bank codes.
```javascript
const bankCodes = await mavapay.bank.getBankCode();
```
* nameEnquiry: Verifies an account number and bank code to fetch account name details.
```javascript
const accountInfo = await mavapay.bank.nameEnquiry('0100242011', '000013');
```
### Quote
* createQuote: Creates a new quote for transferring Bitcoin to fiat.
```javascript
const newQuote = await mavapay.quote.createQuote({
  amount: 300000,
  sourceCurrency: Currency.BTC,
  targetCurrency: Currency.NGN,
  paymentMethod: PaymentMethod.LIGHTNING,
  paymentCurrency: Currency.NGN,
});
```
* acceptQuote: Accepts a quote with additional banking details.
```javascript
const acceptedQuote = await mavapay.quote.acceptQuote({
  id: 'quote_id',
  autopayout: true,
  bankAccountNumber: '12345678',
  bankCode: '000013',
  bankAccountName: 'John Doe',
  memo: 'Payment for services',
  descriptionHash: 'example_hash',
});

```

### Order
* getOrder: Retrieves details of a specific order by ID.
```javascript
const orderDetails = await mavapay.order.getOrder('order_id');
```
* getAllOrders: Retrieves a list of all orders.
```javascript
const allOrders = await mavapay.order.getAllOrders();
```




### Transaction
* getAllTransactions: Retrieves a list of all transactions.
```javascript
const transactions = await mavapay.transaction.getAllTransactions();
```
* getTransaction: Retrieves details of a specific transaction by ID.
```javascript
const transaction = await mavapay.transaction.getTransaction('transaction_id');
```




## Enums
### Currency
Currency provides constants for supported currencies in MavaPay transactions.

* BTC: Bitcoin
* NGN: Nigerian Naira
* KES: Kenyan Shilling

Example usage:
```javascript
const Currency = require('mavapay-sdk/enums/currency');
console.log(Currency.BTC); // 'BTC'

```

### Payment Method
PaymentMethod provides constants for available payment methods.

* LIGHTNING: Bitcoin Lightning Network
* ONCHAIN: On-chain Bitcoin transfer
* USDT: USDT (Tether)
  
Example usage:
```javascript
const PaymentMethod = require('mavapay-sdk/enums/paymentMethod');
console.log(PaymentMethod.LIGHTNING); // 'LIGHTNING'

```

## Error Handling
The MavaPay SDK has built-in error handling for:

* HTTP Errors: Provides specific messages for errors like 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), etc.
* Network Errors: Handles issues where the request cannot reach the server.
* Timeout Errors: Configurable timeout with a default of 10 seconds, with error handling for request timeouts.
Example of catching errors:
```javascript
mavapay.bank.getBankCode()
  .then(data => console.log('Bank Codes:', data))
  .catch(error => {
    if (error.response) {
      console.error('HTTP Error:', error.response.status, error.response.data);
    } else if (error.code === 'ECONNABORTED') {
      console.error('Timeout Error: The request took too long to complete.');
    } else {
      console.error('Error:', error.message);
    }
  });

```

## License