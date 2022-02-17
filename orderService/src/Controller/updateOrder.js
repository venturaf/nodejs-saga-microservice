const orderModel = require('../Model/orderModel')

const updateOrder = async(req, res) => {
    console.log("ingresa a updateOrder");
    console.log("req: ", req.body);

    try {
        const order = await orderModel.findOneAndUpdate({ transactionId: req.body.transactionId }, {
            status: req.body.status
        }, {
            new: true
        });

        res.send(order);

    } catch (e) {
        console.log(e);
    }
}

module.exports = updateOrder