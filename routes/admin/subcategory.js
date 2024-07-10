const express = require('express');
const getSubCategoriesListByCategory = require('../../controllers/admin/subcategory').subCategoriesListByCategory;
const getSubCategoriesList = require('../../controllers/admin/subcategory').allSubCategoriesList;
const router = express.Router();

router.get('/admin/sub_cats', getSubCategoriesList);
router.get('/admin/sub_cats/:id', getSubCategoriesListByCategory);





module.exports = router
