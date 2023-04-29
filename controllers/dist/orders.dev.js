"use strict";

var realyze = require('../config').realyze;

var functions = require('../functions/functions'); //const getTokensForQuery = functions.query;


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
          res.send(JSON.stringify(resArray, undefined, 2));

        case 8:
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

module.exports.updateStatus = function _callee4(req, res) {
  var id, status, userId, orders, resArray;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          status = req.body.status;
          userId = req.body.userId;
          console.log(req.body);
          _context4.next = 6;
          return regeneratorRuntime.awrap(realyze("UPDATE orders SET user_status = ? WHERE id = ?", [status, id]));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [userId, status]));

        case 8:
          orders = _context4.sent;
          console.log("🚀 ~ file: orders.js:35 ~ module.exports.updateStatus= ~ orders:", orders);
          _context4.next = 12;
          return regeneratorRuntime.awrap(getProductsFromOrdersList(orders));

        case 12:
          resArray = _context4.sent;
          console.log("🚀 ~ file: orders.js:39 ~ module.exports.updateStatus= ~ resArray:", resArray);
          res.send(JSON.stringify(resArray, undefined, 2));

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  });
};