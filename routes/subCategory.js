const express = require('express');


const router = express.Router();

const getSubCategories = require('../controllers/subCategory').subCategories

router.get('/subCategories/:catId', getSubCategories);


module.exports = router
