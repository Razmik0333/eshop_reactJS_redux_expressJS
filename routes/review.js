const express = require('express');
const router = express.Router();

const getReviewList = require('../controllers/review').reviewList
const getReviewById = require('../controllers/review').reviewById
const getLatestReviews = require('../controllers/review').getLatestReviews
router.get('/review/list/:id', getReviewList)
router.get('/review/item/:user_id/:product_id', getReviewById)
router.get('/review/latest', getLatestReviews)


module.exports = router
