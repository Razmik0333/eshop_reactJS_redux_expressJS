const express = require('express');
const router = express.Router();

const getCartById = require('../controllers/cart').cartById
const addToCartById = require('../controllers/cart').addToCartById
const removeProductFromCart = require('../controllers/cart').removeProductFromCart
const buyOrder = require('../controllers/cart').buy


router.get('/cart/:user_id', getCartById)
router.put('/cart/add/:user_id', addToCartById)
router.put('/cart/remove/:product_id', removeProductFromCart)
router.post('/buy/:user_id', buyOrder)




module.exports = router
