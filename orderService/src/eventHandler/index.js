const paymentCompleted = require('./paymentCompleted');
const stockUpdated = require('./stockUpdated');
module.exports = (message) => {

    switch (message.type) {
        case 'ORDER_PAYMENT_COMPLETED':
            paymentCompleted(message);
            break;
        case 'ORDER_DELIVERY_COMPLETED':
            stockUpdated(message);
            break;

        default:
            break;

    }

}