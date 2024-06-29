"use strict";

var express = require('express');

var getSubCategoriesList = require('../../controllers/admin/subcategory').subCategoriesList;

var router = express.Router();
router.get('/admin/sub_cats/:id', getSubCategoriesList);
module.exports = router;