const uuidv1 = require('uuid/v1');

const OrderModel = require('../Model/stockModel');

const CreateOrder = async(req, res) => {

    try {

        const name = req.body.name;
        const itemCount = req.body.itemCount;
        const amount = req.body.amount;

        const order = await new OrderModel({ name: name, itemCount: itemCount, transactionId: uuidv1(), status: 'UPDATED_STOCK' });

        await order.save();

        res.send(order);

    } catch (e) {
        console.log(e);
    }
}

module.exports = CreateOrder