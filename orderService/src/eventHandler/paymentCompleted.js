const orderModel = require('../Model/orderModel')
module.exports = async(message) => {
    console.log("ingreso a PAYMENT_COMPLETED");
    try {
        const transactionId = message.payload.data;
        const order = await orderModel.findOneAndUpdate({ transactionId: transactionId }, {
            status: 'PAYMENT_COMPLETED'
        });

    } catch (e) {
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}