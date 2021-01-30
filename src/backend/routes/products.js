const express = require('express');
const router = express.Router();
const { create, getProducts, deleteProduct, getProduct, updateProduct } = require('../controllers/products-controller');

router.route('/products')
    .get( getProducts )
    .post( create );

router.route('/products/:id')
    .get( getProduct )
    .put( updateProduct )
    .delete( deleteProduct );

module.exports = router;
        