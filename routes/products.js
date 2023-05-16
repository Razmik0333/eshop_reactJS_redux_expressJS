const express = require('express');
const { hint } = require('../controllers/products');
const router = express.Router();

const getProductsByCategory = require('../controllers/products').productsByCategory;
const getProductsByLargeDiscount = require('../controllers/products').productsByLargeDiscount;
const getRecommendedProducts = require('../controllers/products').recommendedProducts;
const getFilteredProducts = require('../controllers/products').filteredProducts;
const getProductById = require('../controllers/products').productById;
const getProductsByIds = require('../controllers/products').productsByIds;
const getProductsBetweenCosts = require('../controllers/products').productsBetweenCosts;
const getSearchedProducts = require('../controllers/products').search;
const getVerySoldedProducts = require('../controllers/products').sold;


router.get('/main/:id', getProductsByCategory)
router.get('/discount', getProductsByLargeDiscount)
router.get('/recommend', getRecommendedProducts)
router.get('/filter/product/:id', getFilteredProducts)
router.get('/product/:id', getProductById)
router.get('/list/product/:ids', getProductsByIds)
router.get('/cost', getProductsBetweenCosts)
router.get('/search', getSearchedProducts)
router.put('/hint', hint)
router.get('/package/sold', getVerySoldedProducts);


module.exports = router


