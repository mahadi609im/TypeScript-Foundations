// In - operator
const processPayment = (payment) => {
    if ('cardNumber' in payment) {
        console.log(`Processing Credit Card for ${payment.cardHolderName}...`);
        console.log(`Card Number: **** **** **** ${payment.cardNumber.slice(-4)}`);
    }
    else {
        console.log(`Processing ${payment.provider.toUpperCase()} payment...`);
        console.log(`Account: ${payment.accountNumber} | TrxID: ${payment.transactionId}`);
    }
};
processPayment({
    cardNumber: '4532112233445566',
    cardHolderName: 'Mahadi Hasan',
    cvv: 123,
});
// out: Processing Credit Card for Mahadi Hasan...
// out: Card Number: **** **** **** 5566
processPayment({
    accountNumber: '01711223344',
    provider: 'bkash',
    transactionId: 'TRX987654321',
});
// out: Processing BKASH payment...
// out: Account: 01711223344 | TrxID: TRX987654321
// instanceof
const showDate = (x) => {
    if (x instanceof Date) {
        console.log('date -', x.toISOString());
    }
    else {
        const date = new Date(x);
        console.log(date.toISOString());
    }
};
showDate('4-24-2024');
export {};
