"use strict";

var express = require('express');

var realyze = require('../config').realyze;

var router = express.Router();

var getOrdersByUser = require('../controllers/orders').ordersByUser;

var getAllOrdersByUser = require('../controllers/orders').allOrdersByUser;

var getOrdersByStatus = require('../controllers/orders').ordersByStatus;

var updateStatus = require('../controllers/orders').updateStatus;

router.get('/package/data/:id', getOrdersByUser);
router.get('/package/user/:id', getAllOrdersByUser); //router.get('/package/product/:str', )

router.put('/package/delivered/:id', getOrdersByStatus);
router.put('/package/status/:id', updateStatus);
module.exports = router;