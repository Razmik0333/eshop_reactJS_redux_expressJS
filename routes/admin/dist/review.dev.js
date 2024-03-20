"use strict";

var express = require('express');

var router = express.Router();

var getReviewsList = require('../../controllers/admin/review').reviewsList;

var getAdminReviewId = require('../../controllers/admin/review').reviewsId;

var getAdminReviewReply = require('../../controllers/admin/review').reply; // const deleteProductById = require('../../controllers/admin/products').delete
// const createProduct = require('../../controllers/admin/products').create
// const updateProduct = require('../../controllers/admin/products').update


router.get('/admin/review/list', getReviewsList);
router.get('/admin/review/:review_id', getAdminReviewId);
router.post('/admin/review/reply/:review_id', getAdminReviewReply); // router.delete('/admin/product/delete', deleteProductById)

module.exports = router;