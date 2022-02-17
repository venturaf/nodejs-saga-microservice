const express = require('express');
const bodyParser = require('body-parser');

const InitialPayment = require('./controller/initialPayment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

try {

    app.get('/initialPayment', InitialPayment);

    const PORT = 3001;

    app.listen(PORT, () => {
        console.log('server is running on port ', PORT);
    })

    console.log("Payment service Started Successfully");

} catch (e) {
    console.log(`Orchestrator Error ${e}`);
}