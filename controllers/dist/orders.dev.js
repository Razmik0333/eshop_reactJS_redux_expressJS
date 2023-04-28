"use strict";

var realyze = require('../config').realyze;

var functions = require('../functions/functions');

var getTokensForQuery = functions.query;
var getProductsFromOrdersList = functions.getProductsFromOrdersList;

module.exports.ordersByUser = function _callee(req, res) {
  var userId, orders;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = req.params.id;
          _context.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM orders WHERE user_id = ? ", [userId]));

        case 3:
          orders = _context.sent;
          res.send(orders);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.allOrdersByUser = function _callee2(req, res) {
  var userId, ordersByUser, resArray;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(realyze("SELECT id, user_order, user_status, user_price FROM orders WHERE user_id = ? ", [userId]));

        case 3:
          ordersByUser = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(getProductsFromOrdersList(ordersByUser));

        case 6:
          resArray = _context2.sent;
          console.log("🚀 ~ file: orders.js:17 ~ module.exports.allOrdersByUser= ~ resArray:", resArray);
          res.send(JSON.stringify(resArray, undefined, 2));

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/*module.exports.getPackageProducts = async (req, res) => {
     const userId = req.params.id;
     const orders = await realyze(`SELECT * FROM orders WHERE user_id = ? `, [userId]);
     res.send(orders)
}*/


module.exports.ordersByStatus = function _callee3(req, res) {
  var userId, status, orders, resArray;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userId = req.params.id;
          status = req.body.status;
          _context3.next = 4;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [userId, status]));

        case 4:
          orders = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(getProductsFromOrdersList(orders));

        case 7:
          resArray = _context3.sent;
          res.send(JSON.stringify(resArray, undefined, 2));

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
};