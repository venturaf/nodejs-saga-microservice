const uuidv1 = require('uuid/v1');

const stockModel = require('../Model/stockModel')

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

    } catch (e) {
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}