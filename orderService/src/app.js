const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const InitialOrder = require('./Controller/initialOrder');
const CreateOrder = require('./Controller/createOrder');
const ReadOrder = require('./Controller/updateOrder');
const UpdateOrder = require('./Controller/updateOrder');
const DeleteteOrder = require('./Controller/updateOrder');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://127.0.0.1:27017/orderdb", { useNewUrlParser: true, useUnifiedTopology: true }).then(data => {

        app.get('/initialorder', InitialOrder);
        app.post('/createorder', CreateOrder);
        app.post('/updateOrder', UpdateOrder);

        const PORT = 3000;

        app.listen(PORT, () => {
            console.log('server is running on port ', PORT);
        })

    })
    .catch(err => {
        console.log(`Error in Mongo Connection ${err}`)
    })