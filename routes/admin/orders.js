const express = require('express');
const router = express.Router();


const getOrdersList = require('../../controllers/admin/orders').adminOrdersList
const getAdminOrderById = require('../../controllers/admin/orders').adminOrderById
const updateStatusFromAdmin = require('../../controllers/admin/orders').adminStatusUpdate
const deleteOrderFromAdmin = require('../../controllers/admin/orders').adminOrderDelete
const saveOrderChanges = require('../../controllers/admin/orders').adminOrderSave


router.get('/admin/orders/list', getOrdersList)
router.get('/admin/order/:order_id', getAdminOrderById)
router.put('/admin/order/update/:order_id', updateStatusFromAdmin)
router.delete('/admin/order/delete', deleteOrderFromAdmin)
router.get('/admin/orders/save', saveOrderChanges)


module.exports = router
