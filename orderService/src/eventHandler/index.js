const paymentCompleted = require('./paymentCompleted');
module.exports = (message) => {

    switch (message.type) {
        case 'ORDER_PAYMENT_COMPLETED':
            paymentCompleted(message);
            break;
        case 'ORDER_DELIVERY_COMPLETED':
            deliveryCompleted(message);
            break;

        default:
            break;

    }

}