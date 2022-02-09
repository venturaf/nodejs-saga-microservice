const uuidv1 = require('uuid/v1');

const stockModel = require('../Model/stockModel')
const Producer = require('../../../kafkaBroker/kafkaHandler/routes');

module.exports = async(message) => {
    try {
        const data = message.payload.data;
        const stock = await new stockModel({
            name: data.name,
            itemCount: data.itemCount,
            transactionId: data.transactionId,
            status: 'UPDATED_STOCK'
        });

        await stock.save();

        Producer({
            topic: 'ORDER_CREATION_TRANSACTIONS',
            type: 'UPDATED_STOCK',
            payload: {
                data: {
                    id: stock._id,
                    order_id: data.id,
                    name: data.name,
                    itemCount: data.itemCount,
                    transactionId: stock.transactionId,
                    amount: data.amount
                }
            }
        })

    } catch (e) {
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}