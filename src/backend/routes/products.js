const express = require('express');
const router = express.Router();
const { create, getProducts } = require('../controllers/products-controller');

router.route('/products')
    .get( getProducts )
    .post( create );

module.exports = router;
        