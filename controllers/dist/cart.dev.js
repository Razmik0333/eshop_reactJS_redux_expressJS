"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var realyze = require('../config').realyze;

var functions = require('../functions/functions');

var getSummArray = functions.summArray;
var getTokensForQuery = functions.query;

module.exports.cartById = function _callee(req, res) {
  var userId, productCount, _ref, _ref2, cartByUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = req.params.user_id;
          productCount = req.params.count;
          _context.next = 4;
          return regeneratorRuntime.awrap(realyze("SELECT cart FROM `wish` WHERE `user_id`= ? ", [userId]));

        case 4:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          cartByUser = _ref2[0];
          res.send(cartByUser);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.addToCartById = function _callee2(req, res) {
  var cart, userId, productId, productQuantity, _ref3, _ref4, cartByUser, totalCount;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          cart = {};
          userId = req.params.user_id;
          productId = req.body.product_id;
          productQuantity = req.body.quantity;
          _context2.next = 6;
          return regeneratorRuntime.awrap(realyze("SELECT cart FROM `wish` WHERE `user_id`= ? ", [userId]));

        case 6:
          _ref3 = _context2.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          cartByUser = _ref4[0];

          if (cartByUser) {
            _context2.next = 15;
            break;
          }

          cart = JSON.stringify(_defineProperty({}, productId, productQuantity));
          _context2.next = 13;
          return regeneratorRuntime.awrap(realyze("INSERT INTO wish (user_id, wish, cart) VALUES ( ?, ? , ?) ", [userId, '', cart]));

        case 13:
          _context2.next = 25;
          break;

        case 15:
          if (!cartByUser.cart) {
            _context2.next = 22;
            break;
          }

          cart = JSON.parse(cartByUser.cart);
          cart[productId] = productId in cart ? +cart[productId] + +productQuantity : productQuantity;
          _context2.next = 20;
          return regeneratorRuntime.awrap(realyze("UPDATE `wish` SET cart = ? WHERE `user_id`= ? ", [JSON.stringify(cart), userId]));

        case 20:
          _context2.next = 25;
          break;

        case 22:
          cart = JSON.stringify(_defineProperty({}, productId, productQuantity));
          _context2.next = 25;
          return regeneratorRuntime.awrap(realyze("UPDATE `wish` SET cart = ? WHERE `user_id`= ? ", [cart, userId]));

        case 25:
          totalCount = getSummArray(Object.values(cart));
          res.send("".concat(totalCount));

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.removeProductFromCart = function _callee3(req, res) {
  var userId, productId, _ref5, _ref6, cartByUser, currentCart, cartKeys, cartValues, tokens, products, productsWithCounts;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userId = req.body.user_id;
          productId = req.params.product_id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(realyze("SELECT cart FROM `wish` WHERE `user_id`= ? ", [userId]));

        case 4:
          _ref5 = _context3.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          cartByUser = _ref6[0];
          currentCart = JSON.parse(cartByUser.cart);
          delete currentCart[productId];
          _context3.next = 11;
          return regeneratorRuntime.awrap(realyze("UPDATE `wish` SET cart = ? WHERE `user_id`= ? ", [JSON.stringify(currentCart), userId]));

        case 11:
          cartKeys = Object.keys(currentCart);
          cartValues = Object.values(currentCart);
          tokens = getTokensForQuery(cartKeys);
          _context3.next = 16;
          return regeneratorRuntime.awrap(realyze("SELECT * FROM products WHERE id IN (".concat(tokens, ")"), cartKeys));

        case 16:
          products = _context3.sent;
          productsWithCounts = products.reduce(function (acc, curr, pos) {
            acc.push(_objectSpread({}, curr, {
              quantity: cartValues[pos]
            }));
            return acc;
          }, []);
          res.send(productsWithCounts);

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports.buy = function _callee4(req, res) {
  var order, bool;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          order = req.body;
          _context4.next = 3;
          return regeneratorRuntime.awrap(realyze("INSERT INTO `orders` (user_id, user_name, user_phone, user_comment, user_order, user_price, user_status, time_add) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?) ", [order.user_id, order.user_name, order.user_phone, order.user_comment, order.user_order, order.user_price, order.user_status, Date.now()]));

        case 3:
          bool = _context4.sent;
          res.send('0');

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};