"use strict";

var express = require('express');

var getCategoryList = require('../../controllers/admin/category').categoryList;

var getCurrentCategory = require('../../controllers/admin/category').currentCategory;

var createCategory = require('../../controllers/admin/category').create;

var updateCategory = require('../../controllers/admin/category').update;

var deleteCategory = require('../../controllers/admin/category')["delete"];

var router = express.Router();
router.get('/admin/category/list', getCategoryList);
router.get('/admin/category/:id', getCurrentCategory);
router.put('/admin/category/create', createCategory);
router.put('/admin/category/update', updateCategory);
router["delete"]('/admin/category/delete', deleteCategory);
module.exports = router;