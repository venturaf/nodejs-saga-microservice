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
            Producer({
                topic: 'ORDER_PAYMENT_COMPLETED',
                type: 'ORDER_PAYMENT_COMPLETED',
                payload: {
                    data: message.payload.data
                }
            })
            break;
        case 'PREPARE_DELIVERY':
            Producer({
                topic: 'PREPARE_ORDER',
                type: 'PREPARE_DELIVERY',
                payload: {
                    data: message.payload.data
                }
            })
            break;
        case 'UPDATED_STOCK':
            Producer({
                topic: 'ORDER_DELIVERY_COMPLETED',
                type: 'ORDER_DELIVERY_COMPLETED',
                payload: {
                    data: message.payload.data
                }
            })
            break;
        default:
            break;

    }
}