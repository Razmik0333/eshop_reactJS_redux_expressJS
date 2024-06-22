"use strict";

var express = require('express');

var _require = require('../../controllers/admin/products'),
    getAdminProductById = _require.getAdminProductById;

var router = express.Router();

var upload = require('../.././upload').uploadFile;

var uploadXLSX = require('../.././uploadXLSXFile').uploadFile;

var uploadForGallery = require('../.././uploadForGallery').uploadForGallery;

var getProductsList = require('../../controllers/admin/products').productsList;

var deleteProductById = require('../../controllers/admin/products')["delete"];

var createProduct = require('../../controllers/admin/products').create;

var updateProduct = require('../../controllers/admin/products').update;

var addProductsWithList = require('../../controllers/admin/products').addProductsWithList;

var saveChanges = require('../../controllers/admin/products').save;

var changeGallery = require('../../controllers/admin/products').gallery;

router.get('/admin/product/list', getProductsList);
router.get('/admin/product/:product_id', getAdminProductById);
router.post('/admin/product/data', uploadXLSX.any('list'), addProductsWithList);
router["delete"]('/admin/product/delete', deleteProductById);
router.put('/admin/product/create', upload.single('image'), createProduct);
router.put('/admin/product/update', upload.single('image'), updateProduct);
router.get('/admin/products/save', saveChanges);
router.post('/admin/gallery', uploadForGallery.single('image'), changeGallery);
module.exports = router;