const Producer = require('../../../kafkaBroker/kafkaHandler/routes');

module.exports = (message) => {

    switch (message.type) {
        case 'ORDER_CREATED':
            Producer({
                topic: 'EXECUTE_PAYMENT',
                payload: message.payload.data
            })
            break;
        case 'PAYMENT_COMPLETED_STATE':
            console.log(message);
            Producer({
                topic: 'ORDER_PAYMENT_COMPLETED',
                type: 'ORDER_PAYMENT_COMPLETED',
                payload: {
                    data: message.payload.data
                }
            })
        default:
            break;

    }
}