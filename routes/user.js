const express = require('express');
const router = express.Router();



const uploadAvatar = require('../uploadForAvatar').uploadAvatar
const getUserById = require('../controllers/user').userById;
const loginUser = require('../controllers/user').login;
const registerUser = require('../controllers/user').register;
const avatarUser = require('../controllers/user').avatar;
const changeUserName = require('../controllers/user').name
router.get('/user/:id', getUserById)
router.post('/login',  loginUser)
router.post('/register', registerUser)
router.post('/avatar', avatarUser)
router.post('/user/name', changeUserName)




module.exports = router
 