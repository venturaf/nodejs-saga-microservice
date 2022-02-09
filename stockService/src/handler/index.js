const createStock = require('./createStockHandler');
const updateStock = require('./updateStockHandler');

module.exports = (message) => {

    switch (message.type) {
        case 'PREPARE_DELIVERY':
            createStock(message);
            break;
        case 'UPDATE_STOCK':
            updateStock(message);
            break;

        default:
            break;

    }

}