const express = require('express');
const getSubCategoriesList = require('../../controllers/admin/subcategory').subCategoriesList;
const router = express.Router();

router.get('/admin/sub_cats/:id', getSubCategoriesList);





module.exports = router
