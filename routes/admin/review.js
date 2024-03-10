const express = require('express');
const router = express.Router();
const getReviewsList = require('../../controllers/admin/review').reviewsList
// const deleteProductById = require('../../controllers/admin/products').delete
// const createProduct = require('../../controllers/admin/products').create
// const updateProduct = require('../../controllers/admin/products').update

router.get('/admin/review/list', getReviewsList);
// router.get('/admin/product/:product_id', getAdminProductById)
// router.delete('/admin/product/delete', deleteProductById)



module.exports = router
