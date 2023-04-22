const express = require('express');

const router = express.Router();

const getLanguages = require('../controllers/configs').languages
const getLanguageById = require('../controllers/configs').languageById
const getCurrencies = require('../controllers/configs').currency
router.get('/languages', getLanguages)
router.get('/language/:alias', getLanguageById)
router.get('/currency', getCurrencies)



module.exports = router
