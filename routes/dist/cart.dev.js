"use strict";

var express = require('express');

var router = express.Router();

var getCartById = require('../controllers/cart').cartById;

var addToCartById = require('../controllers/cart').addToCartById;

var removeProductFromCart = require('../controllers/cart').removeProductFromCart;

var buyOrder = require('../controllers/cart').buy;

router.get('/cart/:user_id', getCartById);
router.put('/cart/add/:user_id', addToCartById);
router.put('/cart/remove/:product_id', removeProductFromCart);
router.post('/buy', buyOrder);
module.exports = router;