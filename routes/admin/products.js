const express = require('express');
const { getAdminProductById } = require('../../controllers/admin/products');
const router = express.Router();
const upload = require('../.././upload').uploadFile;
const getProductsList = require('../../controllers/admin/products').productsList
const deleteProductById = require('../../controllers/admin/products').delete
const createProduct = require('../../controllers/admin/products').create
const updateProduct = require('../../controllers/admin/products').update

router.get('/admin/product/list', getProductsList);
router.get('/admin/product/:product_id', getAdminProductById)
router.delete('/admin/product/delete/:user_id/:product_id', deleteProductById)
router.post('/admin/product/create/2', upload.single('file'), createProduct)
router.put('/admin/product/update/2', updateProduct)












module.exports = router
