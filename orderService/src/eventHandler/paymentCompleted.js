const orderModel = require('../Model/orderModel')
const Producer = require('../../../kafkaBroker/kafkaHandler/routes');
module.exports = async(message) => {
    try {
        const transactionId = message.payload.data;
        const order = await orderModel.findOneAndUpdate({ transactionId: transactionId }, {
            status: 'PAYMENT_COMPLETED'
        });

        Producer({
            topic: 'ORDER_CREATION_TRANSACTIONS',
            type: 'PREPARE_DELIVERY',
            payload: {
                data: {
                    id: order._id,
                    name: order.name,
                    itemCount: order.itemCount,
                    transactionId: order.transactionId,
                }
            }
        })

    } catch (e) {
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}