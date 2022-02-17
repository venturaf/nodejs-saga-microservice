const uuidv1 = require('uuid/v1');
const axios = require('axios');

const OrderModel = require('../Model/orderModel');

var conductor_tasks_inProgress = {};
var conductor_tasks_complete = {};

const InitialOrder = async(req, res) => {
    console.log("ingresa a initial");

    /////////////////////////////////////////////////
    /*
    axios.get('http://localhost:8080/api/tasks/poll/order_service_initial_order')
        .then((response) => {
            console.log(`order_service_initial_order status: ${response.status}`);
            console.log(response.data);
            conductor_tasks_inProgress = response.data;
        });
    */
    /////////////////////////////////////////////////

    try {

        const name = "req.body.name";
        const itemCount = "req.body.itemCount";
        const amount = "req.body.amount";

        const order = await new OrderModel({
            name: name,
            itemCount: itemCount,
            transactionId: uuidv1(),
            status: 'ORDER_CREATED',
            amount: amount
        });

        await order.save();

        res.send(order);

        /////////////////////////////////////////////////
        /*
        console.log("ingresa a complete");

        axios.post('http://localhost:8080/api/tasks/', {
                workflowInstanceId: conductor_tasks_inProgress.workflowInstanceId,
                taskId: conductor_tasks_inProgress.taskId,
                status: 'COMPLETED',
                outputData: { order }
            })
            .then((response) => {
                console.log(response.data);
                conductor_tasks_complete = response.data;
            }, (error) => {
                console.log(error);
            });

        */
        //////////////////////////////////
        return
    } catch (e) {
        console.log(e);
    }
}

module.exports = InitialOrder