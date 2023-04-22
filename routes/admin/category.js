const express = require('express');
const getCategoryList = require('../../controllers/admin/category').categoryList
const createCategory = require('../../controllers/admin/category').create
const updateCategory = require('../../controllers/admin/category').update
const deleteCategory = require('../../controllers/admin/category').delete
const router = express.Router();

router.get('/admin/category/list', getCategoryList);

router.post('/admin/category/create/2', createCategory);
router.put('/admin/category/update/2', updateCategory);

router.delete('/admin/category/delete/2', deleteCategory); 






module.exports = router
