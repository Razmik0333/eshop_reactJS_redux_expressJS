const express = require('express');
const { getProductFromOrder } = require('../../controllers/admin/orders');
const realyze = require('../../config').realyze;
const router = express.Router();


const getOrdersList = require('../../controllers/admin/orders').adminOrdersList
const getAdminOrderById = require('../../controllers/admin/orders').adminOrderById
const updateStatusFromAdmin = require('../../controllers/admin/orders').adminStatusUpdate
const deleteOrderFromAdmin = require('../../controllers/admin/orders').adminOrderDelete


router.get('/admin/orders/list', getOrdersList)
router.get('/admin/order/:order_id', getAdminOrderById)
router.get('/admin/order/products/:order_id', getProductFromOrder)
router.put('/admin/order/status/:userId/:order_id', updateStatusFromAdmin)
router.delete('/admin/order/delete/:user_id/:order_id', deleteOrderFromAdmin)


module.exports = router
