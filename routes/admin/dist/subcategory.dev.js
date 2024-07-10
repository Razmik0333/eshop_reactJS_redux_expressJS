"use strict";

var express = require('express');

var getSubCategoriesListByCategory = require('../../controllers/admin/subcategory').subCategoriesListByCategory;

var getSubCategoriesList = require('../../controllers/admin/subcategory').allSubCategoriesList;

var router = express.Router();
router.get('/admin/sub_cats', getSubCategoriesList);
router.get('/admin/sub_cats/:id', getSubCategoriesListByCategory);
module.exports = router;