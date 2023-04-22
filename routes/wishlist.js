const express = require('express');
const router = express.Router();


const getWishlistById = require('../controllers/wishlist').wishListById

const addWishToList = require('../controllers/wishlist').addToWishlist;

const removeWishFromlist = require('../controllers/wishlist').removeFromWishlist;


router.get('/wishlist/:user_id', getWishlistById)
router.put('/wishlist/add/:user_id', addWishToList)
router.put('/wishlist/remove/:id', removeWishFromlist)




module.exports = router
