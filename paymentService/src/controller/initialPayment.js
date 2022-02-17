const initialPayment = async(req, res) => {
    console.log("ingresa a initial");
    try {

        const name = "req.body.name";
        const itemCount = "req.body.itemCount";
        const amount = "req.body.amount";

        const order = {
            name: name,
            itemCount: itemCount,
            transactionId: "uuidv1()",
            status: 'PAYMENT_COMPLETED',
            amount: amount
        };

        res.send(order);

        return
    } catch (e) {
        console.log(e);
    }
}

module.exports = initialPayment