const express = require('express');
const router = express.Router();

const getReviewList = require('../controllers/review').reviewList
const getReviewById = require('../controllers/review').reviewById

router.get('/review/list/:id', getReviewList)
router.get('/review/item/:user_id/:product_id', getReviewById)



module.exports = router
