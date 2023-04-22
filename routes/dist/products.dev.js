"use strict";

var express = require('express');

var router = express.Router();

var getProductsByCategory = require('../controllers/products').productsByCategory;

var getProductsByLargeDiscount = require('../controllers/products').productsByLargeDiscount;

var getRecommendedProducts = require('../controllers/products').recommendedProducts;

var getFilteredProducts = require('../controllers/products').filteredProducts;

var getProductById = require('../controllers/products').productById;

var getProductsByIds = require('../controllers/products').productsByIds;

var getProductsBetweenCosts = require('../controllers/products').productsBetweenCosts;

var getSearchedProducts = require('../controllers/products').search;

var getVerySoldedProducts = require('../controllers/products').sold;

router.get('/main/:id', getProductsByCategory);
router.get('/discount', getProductsByLargeDiscount);
router.get('/recommend', getRecommendedProducts);
router.get('/filter/product/:id', getFilteredProducts);
router.get('/product/:id', getProductById);
router.get('/list/product/:ids', getProductsByIds);
router.get('/cost', getProductsBetweenCosts);
router.get('/goods/search', getSearchedProducts);
router.get('/package/sold', getVerySoldedProducts);
module.exports = router;