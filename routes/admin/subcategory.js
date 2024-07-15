const express = require('express');
const getSubCategoriesListByCategory = require('../../controllers/admin/subcategory').subCategoriesListByCategory;
const getSubCategoriesList = require('../../controllers/admin/subcategory').allSubCategoriesList;
const subCategoryCreate = require('../../controllers/admin/subcategory').create;
const getSubCategory = require('../../controllers/admin/subcategory').currentSubCategory;
const subCategoryUpdate = require('../../controllers/admin/subcategory').update;
const subCategoryDelete = require('../../controllers/admin/subcategory').delete;
const router = express.Router();

router.get('/admin/sub_cats', getSubCategoriesList);
router.get('/admin/sub_cats/:id', getSubCategoriesListByCategory);
router.get('/admin/sub_cat/:id', getSubCategory);
router.put('/admin/subcategory/create', subCategoryCreate);
router.put('/admin/subcategory/update', subCategoryUpdate);
router.delete('/admin/subcategory/delete', subCategoryDelete);





module.exports = router
