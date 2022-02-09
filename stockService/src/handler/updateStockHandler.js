const uuidv1 = require('uuid/v1');

const stockModel = require('../Model/stockModel')
const Producer = require('../../../kafkaBroker/kafkaHandler/routes');

module.exports = async(message) => {
    try {
        const transactionId = message.payload.data;

        const stock = await new stockModel({
            name: data,
            itemCount: data,
            transactionId: uuidv1(),
            status: 'UPDATED_STOCK'
        });

        await stock.save();

        Producer({
            topic: 'ORDER_PREPARED',
            type: 'UPDATED_STOCK',
            payload: {
                data: {
                    id: order._id,
                    transactionId: order.transactionId,
                    amount: amount
                }
            }
        })

    } catch (e) {
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}