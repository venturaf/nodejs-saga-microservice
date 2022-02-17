const orderModel = require('../Model/orderModel')

module.exports = async(message) => {
    try {
        const data = message.payload.data;
        const order = await orderModel.findOneAndUpdate({ transactionId: data.transactionId }, {
            status: 'PAYMENT_COMPLETED'
        });

    } catch (e) {
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}