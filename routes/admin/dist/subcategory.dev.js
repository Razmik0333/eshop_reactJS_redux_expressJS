"use strict";

var express = require('express');

var getSubCategoriesListByCategory = require('../../controllers/admin/subcategory').subCategoriesListByCategory;

var getSubCategoriesList = require('../../controllers/admin/subcategory').allSubCategoriesList;

var subCategoryCreate = require('../../controllers/admin/subcategory').create;

var getSubCategory = require('../../controllers/admin/subcategory').currentSubCategory;

var subCategoryUpdate = require('../../controllers/admin/subcategory').update;

var subCategoryDelete = require('../../controllers/admin/subcategory')["delete"];

var router = express.Router();
router.get('/admin/sub_cats', getSubCategoriesList);
router.get('/admin/sub_cats/:id', getSubCategoriesListByCategory);
router.get('/admin/sub_cat/:id', getSubCategory);
router.put('/admin/subcategory/create', subCategoryCreate);
router.put('/admin/subcategory/update', subCategoryUpdate);
router["delete"]('/admin/subcategory/delete', subCategoryDelete);
module.exports = router;