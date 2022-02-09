const Producer = require('./Producer');

const producer = new Producer();


const messageTypeToTopicMessaging = {
    ORDER_CREATION_TRANSACTIONS: ["ORCHESTATOR_SERVICE"],
    PAYMENT_FAILED_STATE: ["ORCHESTATOR_SERVICE"],
    ORDER_PREPARED: ["ORCHESTATOR_SERVICE"],
    OUT_OF_STOCK_ORDER: ["ORCHESTATOR_SERVICE"],
    PAYMENT_COMPLETED_STATE: ["ORCHESTATOR_SERVICE"],
    EXECUTE_PAYMENT: ["PAYMENT_SERVICE"],
    PREPARE_ORDER: ["STOCK_SERVICE"],
    ORDER_PAYMENT_COMPLETED: ["SERVICE_REPLY"],
    ORDER_DELIVERY_COMPLETED: ["SERVICE_REPLY"],
    ORDER_SERVICE: ["ORDER_SERVICE"]
}

module.exports = (payload) => {
    console.log("producer message", payload);
    messageTypeToTopicMessaging[payload.topic].forEach(topic => {
        producer.produce(topic, JSON.stringify(payload));
    })
}