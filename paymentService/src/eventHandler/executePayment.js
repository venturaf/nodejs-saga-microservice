const Producer = require('../../../kafkaBroker/kafkaHandler/routes');
module.exports = (data) => {
    /** Database Layer Logic Comes Here  */
    try {
        Producer({
            topic: 'ORDER_CREATION_TRANSACTIONS',
            type: 'PAYMENT_COMPLETED_STATE',
            payload: {
                data: data
            }
        })

    } catch (e) {
        console.log(e);
    }


}