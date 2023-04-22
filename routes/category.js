const express = require('express');


const router = express.Router();

const getCategories = require('../controllers/category').category
const getCategoryById = require('../controllers/category').categoryById

router.get('/category', getCategories);
router.get('/category/:id', getCategoryById);


module.exports = router
