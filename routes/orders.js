const express = require('express');
const realyze = require('../config').realyze;

const router = express.Router();

const getOrdersByUser = require('../controllers/orders').ordersByUser;
const getAllOrdersByUser = require('../controllers/orders').allOrdersByUser;
const getOrdersByStatus = require('../controllers/orders').ordersByStatus;
const updateStatus = require('../controllers/orders').updateStatus;
router.get('/package/data/:id', getOrdersByUser)
router.get('/package/user/:id', getAllOrdersByUser)
//router.get('/package/product/:str', )
router.put('/package/delivered/:id', getOrdersByStatus)
router.put('/package/status/:id', updateStatus)

module.exports = router
