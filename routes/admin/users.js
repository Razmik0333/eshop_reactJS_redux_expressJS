const express = require('express');
const router = express.Router();

const getAdminUsersList = require('../../controllers/admin/users').usersList;

router.get('/admin/user/list', getAdminUsersList);

module.exports = router
