const express = require('express');
const router = express.Router();
const uploadForReview = require('../uploadPictureReview').uploadForReview;
const getProductsByCategory = require('../controllers/products').productsByCategory;
const getProductsByLargeDiscount = require('../controllers/products').productsByLargeDiscount;
const getRecommendedProducts = require('../controllers/products').recommendedProducts;
const getFilteredProducts = require('../controllers/products').filteredProducts;
const getProductById = require('../controllers/products').productById;
//const getProductsByIds = require('../controllers/products').productsByIds;
const getProductsBetweenCosts = require('../controllers/products').productsBetweenCosts;
const getSearchedProducts = require('../controllers/products').search;
const getViewedProducts = require('../controllers/products').viewedProducts;
const getViewedProductsIdsByUser = require('../controllers/products').viewedIdsByUser;

const getVerySoldedProducts = require('../controllers/products').sold;
const hint = require('../controllers/products').hint;
const viewed = require('../controllers/products').viewed;
const hintAdd = require('../controllers/products').hintAdd;
const getProductRatings = require('../controllers/products').productsRating;

const evaluateProducts = require('../controllers/products').evaluateProducts
const getMostestRatingProducts = require('../controllers/products').mostestRating;
const getMostestSaleProducts = require('../controllers/products').mostestSale;
const getMostestRecentAddProducts = require('../controllers/products').mostestRecent;
const getMostestDesiredProducts = require('../controllers/products').mostestDesired;
const getSimilarProducts = require('../controllers/products').similarProducts;
const getServices = require('../controllers/products').services;
const getPerformedProducts = require('../controllers/products').performedProducts;
const getProductsBySubCategories = require('../controllers/subCategory').productsBySubCategories
const filteredByList = require('../controllers/products').filterByList;


router.get('/main/:id', getProductsByCategory);
router.get('/discount', getProductsByLargeDiscount);
router.get('/recommend', getRecommendedProducts);
router.get('/filter/product/:id', getFilteredProducts);
router.get('/product/:id', getProductById);
router.get('/product/rating/:id', getProductRatings);
router.get('/product/similar/:catid/:prodid', getSimilarProducts);
router.post('/product/evaluate', uploadForReview.any(), evaluateProducts);
router.post('/viewed/products', getViewedProducts);
router.get('/cost', getProductsBetweenCosts);
router.get('/search', getSearchedProducts);
router.put('/hint', hint);
router.post('/viewed', viewed);
router.post('/viewed/:id', getViewedProductsIdsByUser);
router.put('/hint/add/:hint', hintAdd);
router.get('/package/sold', getVerySoldedProducts);
router.get('/mostest/rating', getMostestRatingProducts);
router.get('/mostest/sale', getMostestSaleProducts);
router.get('/mostest/recent', getMostestRecentAddProducts);
router.get('/mostest/desired', getMostestDesiredProducts);
router.get('/services', getServices);
router.get('/performed', getPerformedProducts);


router.get('/filters/:str', filteredByList);

router.get('/subCategories/:category/:sub_category', getProductsBySubCategories);



module.exports = router;


