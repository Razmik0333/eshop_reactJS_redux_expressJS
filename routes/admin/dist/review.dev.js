"use strict";

var express = require('express');

var _require = require('../../controllers/admin/products'),
    getAdminProductById = _require.getAdminProductById;

var router = express.Router();

var upload = require('../.././upload').uploadFile;

var getProductsList = require('../../controllers/admin/products').productsList;

var deleteProductById = require('../../controllers/admin/products')["delete"];

var createProduct = require('../../controllers/admin/products').create;

var updateProduct = require('../../controllers/admin/products').update;

router.get('/admin/review/list', getProductsList); // router.get('/admin/product/:product_id', getAdminProductById)
// router.delete('/admin/product/delete', deleteProductById)
// router.put('/admin/product/create', upload.single('image'), createProduct)
// router.put('/admin/product/update', upload.single('image'), updateProduct)

module.exports = router;