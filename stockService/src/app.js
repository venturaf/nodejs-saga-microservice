const mongoose = require('mongoose');

const Consumer = require('../../kafkaBroker/kafkaHandler/Consumer');
const eventHandler = require('./handler');

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://127.0.0.1:27017/stockdb", { useNewUrlParser: true, useUnifiedTopology: true }).then(data => {

        const consumer = new Consumer();

        consumer.addTopics(["STOCK_SERVICE"]).then(() => {
            consumer.consume(message => {
                console.log("consumed message", message);
                eventHandler(JSON.parse(message.value));
            })
        })

    })
    .catch(err => {
        console.log(`Error in Mongo Connection ${err}`)
    })