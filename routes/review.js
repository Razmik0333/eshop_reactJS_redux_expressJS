const express = require('express');
const router = express.Router();

const getReviewListByProductId = require('../controllers/review').getReviewListByProductId;
const getRatingList = require('../controllers/review').ratingCounts;
const getReviewById = require('../controllers/review').reviewById;
const getLatestReviews = require('../controllers/review').getLatestReviews;
const getReviewsByUser = require('../controllers/review').reviewByUserId;
const updateReviewById = require('../controllers/review').updateReviewById;
const deleteReviewById = require('../controllers/review').deleteReviewById;
const getRatedReviews = require('../controllers/review').getRatedReviews;

router.get('/review/list/:id', getReviewListByProductId);
router.get('/rating/count/:id', getRatingList);
router.get('/review/user/:user_id', getReviewsByUser);
router.get('/review/item/:user_id/:product_id', getReviewById);
router.get('/review/latest', getLatestReviews);
router.get('/review/rated', getRatedReviews);
router.put('/review/update/:review_id', updateReviewById);
router.delete('/review/delete/:review_id', deleteReviewById);


module.exports = router
