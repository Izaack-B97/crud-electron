const { remote } = require('electron');
const mainProcess = remote.require('./main');
const { create_on_database, getProducts } = mainProcess.query_functions;

module.exports = {
    
    create_product: ( product ) => {
        // create_on_database( product );
        create_on_database( product );
    },

    getAllProducts: () => {
        getProducts();
    }

};

