const express = require('express');
const { getAdminProductById } = require('../../controllers/admin/products');
const router = express.Router();
const upload = require('../.././upload').uploadFile;
const uploadXLSX = require('../.././uploadXLSXFile').uploadFile;
const uploadForGallery = require('../.././uploadForGallery').uploadForGallery;
const getProductsList = require('../../controllers/admin/products').productsList
const deleteProductById = require('../../controllers/admin/products').delete
const createProduct = require('../../controllers/admin/products').create
const updateProduct = require('../../controllers/admin/products').update
const addProductsWithList = require('../../controllers/admin/products').addProductsWithList
const saveChanges = require('../../controllers/admin/products').save
const changeGallery = require('../../controllers/admin/products').gallery

router.get('/admin/product/list', getProductsList);
router.get('/admin/product/:product_id', getAdminProductById);
router.post('/admin/product/data',uploadXLSX.any('list') , addProductsWithList);
router.delete('/admin/product/delete', deleteProductById);
router.put('/admin/product/create', upload.single('image'), createProduct);
router.put('/admin/product/update', upload.single('image'), updateProduct);
router.get('/admin/products/save',  saveChanges);
router.post('/admin/gallery', uploadForGallery.single('image'),  changeGallery);














module.exports = router
