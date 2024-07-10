const express = require('express');
const getCategoryList = require('../../controllers/admin/category').categoryList
const getCurrentCategory = require('../../controllers/admin/category').currentCategory
const createCategory = require('../../controllers/admin/category').create
const updateCategory = require('../../controllers/admin/category').update
const deleteCategory = require('../../controllers/admin/category').delete
const router = express.Router();

router.get('/admin/category/list', getCategoryList);
router.get('/admin/category/:id', getCurrentCategory);

router.put('/admin/category/create', createCategory);
router.put('/admin/category/update', updateCategory);

router.delete('/admin/category/delete', deleteCategory); 






module.exports = router
