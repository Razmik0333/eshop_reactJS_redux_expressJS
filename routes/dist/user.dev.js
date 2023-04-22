"use strict";

var express = require('express');

var router = express.Router();

var getUserById = require('../controllers/user').userById;

var loginUser = require('../controllers/user').login;

var registerUser = require('../controllers/user').register;

router.get('/user/:id', getUserById);
router.post('/login', loginUser);
router.post('/register', registerUser);
module.exports = router;