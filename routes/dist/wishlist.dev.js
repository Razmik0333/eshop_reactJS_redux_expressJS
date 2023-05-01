"use strict";

var express = require('express');

var router = express.Router();

var getWishlistById = require('../controllers/wishlist').wishListByUserId;

var addWishToList = require('../controllers/wishlist').addToWishlist;

var removeWishFromlist = require('../controllers/wishlist').removeFromWishlist;

router.get('/wishlist/:user_id', getWishlistById);
router.put('/wishlist/add/:product_id', addWishToList);
router.put('/wishlist/remove/:id', removeWishFromlist);
module.exports = router;