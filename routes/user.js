const express = require('express');

const router = express.Router();

const getUserById = require('../controllers/user').userById;
const loginUser = require('../controllers/user').login;
const registerUser = require('../controllers/user').register;
router.get('/user/:id', getUserById)
router.post('/login', loginUser)
router.post('/register', registerUser)


module.exports = router
 