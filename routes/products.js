const express = require('express');
const router = express.Router();
const uploadForReview = require('../uploadPictureReview').uploadForReview;
const getProductsByCategory = require('../controllers/products').productsByCategory;
const getProductsByLargeDiscount = require('../controllers/products').productsByLargeDiscount;
const getRecommendedProducts = require('../controllers/products').recommendedProducts;
const getFilteredProducts = require('../controllers/products').filteredProducts;
const getProductById = require('../controllers/products').productById;
const getProductsByIds = require('../controllers/products').productsByIds;
const getProductsBetweenCosts = require('../controllers/products').productsBetweenCosts;
const getSearchedProducts = require('../controllers/products').search;
const getVerySoldedProducts = require('../controllers/products').sold;
const hint = require('../controllers/products').hint;
const hintAdd = require('../controllers/products').hintAdd;
const getProductRatings = require('../controllers/products').productsRating;

const evaluateProducts = require('../controllers/products').evaluateProducts
const getMostestRatingProducts = require('../controllers/products').mostestRating;
const getMostestSaleProducts = require('../controllers/products').mostestSale;
const getMostestRecentAddProducts = require('../controllers/products').mostestRecent;
const getMostestDesiredProducts = require('../controllers/products').mostestDesired;
const getSimilarProducts = require('../controllers/products').similarProducts;

router.get('/main/:id', getProductsByCategory);
router.get('/discount', getProductsByLargeDiscount);
router.get('/recommend', getRecommendedProducts);
router.get('/filter/product/:id', getFilteredProducts);
router.get('/product/:id', getProductById);
router.get('/product/rating/:id', getProductRatings);
router.get('/product/similar/:catid/:prodid', getSimilarProducts);
router.post('/product/evaluate', uploadForReview.any(), evaluateProducts);
router.get('/list/product/:ids', getProductsByIds);
router.get('/cost', getProductsBetweenCosts);
router.get('/search', getSearchedProducts);
router.put('/hint', hint);
router.put('/hint/add/:hint', hintAdd);
router.get('/package/sold', getVerySoldedProducts);
router.get('/mostest/rating', getMostestRatingProducts);
router.get('/mostest/sale', getMostestSaleProducts);
router.get('/mostest/recent', getMostestRecentAddProducts);
router.get('/mostest/desired', getMostestDesiredProducts);


module.exports = router;


