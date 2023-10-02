"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchOrdersForDelete = exports.fetchOrdersByString = exports.fetchOrderProducts = exports.fetchOrderItem = exports.fetchOrdersList = exports.resetTimeObject = exports.resetIsDeleted = exports.clearCurrentOrder = exports.createMonth = exports.createYear = exports.currentOrderId = exports.currentCartItem = exports.clearTimeObject = exports.getTimeObject = exports.getCurrentOrderDelete = exports.getCurrentOrderInfo = exports.getCurrentOrderProducts = exports.getCurrentOrderId = exports.getOrderForUpdate = exports.getOrdersList = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ORDERS_LIST = 'adminOrderDuck/ORDERS_LIST';
var CURRENT_ORDER = 'adminOrderDuck/CURRENT_ORDER';
var CURRENT_ORDER_ID = 'adminOrderDuck/CURRENT_ORDER_ID';
var CURRENT_ORDER_INFO = 'adminOrderDuck/CURRENT_ORDER_INFO';
var CURRENT_ORDER_PRODUCTS = 'adminOrderDuck/CURRENT_ORDER_PRODUCTS';
var CURRENT_ORDER_DELETE = 'adminOrderDuck/CURRENT_ORDER_DELETE';
var TIME_OBJECT = 'adminOrderDuck/TIME_OBJECT';
var CLEAR_TIME_OBJECT = 'adminOrderDuck/CLEAR_TIME_OBJECT';
var getOrdersList = (0, _redux.createAction)(ORDERS_LIST);
exports.getOrdersList = getOrdersList;
var getOrderForUpdate = (0, _redux.createAction)(CURRENT_ORDER);
exports.getOrderForUpdate = getOrderForUpdate;
var getCurrentOrderId = (0, _redux.createAction)(CURRENT_ORDER_ID);
exports.getCurrentOrderId = getCurrentOrderId;
var getCurrentOrderProducts = (0, _redux.createAction)(CURRENT_ORDER_PRODUCTS);
exports.getCurrentOrderProducts = getCurrentOrderProducts;
var getCurrentOrderInfo = (0, _redux.createAction)(CURRENT_ORDER_INFO);
exports.getCurrentOrderInfo = getCurrentOrderInfo;
var getCurrentOrderDelete = (0, _redux.createAction)(CURRENT_ORDER_DELETE);
exports.getCurrentOrderDelete = getCurrentOrderDelete;
var getTimeObject = (0, _redux.createAction)(TIME_OBJECT);
exports.getTimeObject = getTimeObject;
var clearTimeObject = (0, _redux.createAction)(CLEAR_TIME_OBJECT);
exports.clearTimeObject = clearTimeObject;
var initialStateApp = {
  ordersList: [],
  currentOrderId: null,
  currentOrder: {},
  currentOrderProducts: [],
  currentOrderInfo: null,
  isDeleted: false,
  timeObj: {}
};

var currentCartItem = function currentCartItem() {
  return function (dispatch) {
    dispatch(getOrdersList());
  };
};

exports.currentCartItem = currentCartItem;

var currentOrderId = function currentOrderId(id) {
  return function (dispatch) {
    dispatch(getCurrentOrderId(id));
  };
};

exports.currentOrderId = currentOrderId;

var createYear = function createYear(obj) {
  return function (dispatch) {
    dispatch(getTimeObject(obj));
  };
};

exports.createYear = createYear;

var createMonth = function createMonth(obj) {
  return function (dispatch) {
    dispatch(getTimeObject(obj));
  };
};

exports.createMonth = createMonth;

var clearCurrentOrder = function clearCurrentOrder() {
  return function (dispatch) {
    dispatch(getCurrentOrderInfo({}));
  };
};

exports.clearCurrentOrder = clearCurrentOrder;

var resetIsDeleted = function resetIsDeleted(bool) {
  return function (dispatch) {
    dispatch(getCurrentOrderDelete(bool));
  };
};

exports.resetIsDeleted = resetIsDeleted;

var resetTimeObject = function resetTimeObject() {
  return function (dispatch) {
    dispatch(clearTimeObject());
  };
};

exports.resetTimeObject = resetTimeObject;

var fetchOrdersList = function fetchOrdersList(id) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/orders/list")));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getOrdersList(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from AdminOrderDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchOrdersList = fetchOrdersList;

var fetchOrderItem = function fetchOrderItem(orderId) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/order/").concat(orderId)));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(getOrderForUpdate(data));
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t2 = _context2["catch"](0);
            console.log('error from AdminOrderDuck', _context2.t2);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchOrderItem = fetchOrderItem;

var fetchOrderProducts = function fetchOrderProducts(orderId) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/order/products/").concat(orderId)));

          case 4:
            _context3.t1 = _context3.sent.json();
            _context3.next = 7;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 7:
            data = _context3.sent;
            dispatch(getCurrentOrderProducts(data));
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t2 = _context3["catch"](0);
            console.log('error from AdminOrderDuck', _context3.t2);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchOrderProducts = fetchOrderProducts;

var fetchOrdersByString = function fetchOrdersByString(arr) {
  return function (dispatch) {
    fetch("".concat(_constants.root, "/list/product/").concat(arr)).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(getCurrentOrderInfo(res));
    })["catch"](function (e) {
      return console.log('error from productDuck', e);
    });
  };
};

exports.fetchOrdersByString = fetchOrdersByString;

var fetchOrdersForDelete = function fetchOrdersForDelete(order_id) {
  return function _callee4(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.t0 = regeneratorRuntime;
            _context4.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/order/delete"), {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                order_id: order_id
              })
            }));

          case 4:
            _context4.t1 = _context4.sent.json();
            _context4.next = 7;
            return _context4.t0.awrap.call(_context4.t0, _context4.t1);

          case 7:
            data = _context4.sent;
            dispatch(getOrdersList(data));
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t2 = _context4["catch"](0);
            console.log('error from AdminProductDuck', _context4.t2);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchOrdersForDelete = fetchOrdersForDelete;

var AdminOrderDuck = function AdminOrderDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ORDERS_LIST:
      return _objectSpread({}, state, {
        ordersList: action.payload
      });

    case CURRENT_ORDER:
      return _objectSpread({}, state, {
        currentOrder: action.payload
      });

    case CURRENT_ORDER_ID:
      return _objectSpread({}, state, {
        currentOrderId: action.payload
      });

    case CURRENT_ORDER_INFO:
      return _objectSpread({}, state, {
        currentOrderInfo: action.payload
      });

    case CURRENT_ORDER_DELETE:
      return _objectSpread({}, state, {
        isDeleted: action.payload
      });

    case TIME_OBJECT:
      return _objectSpread({}, state, {
        timeObj: _objectSpread({}, state.timeObj, {}, action.payload)
      });

    case CLEAR_TIME_OBJECT:
      return _objectSpread({}, state, {
        timeObj: {}
      });

    case CURRENT_ORDER_PRODUCTS:
      return _objectSpread({}, state, {
        currentOrderProducts: action.payload
      });

    default:
      return state;
  }
};

var _default = AdminOrderDuck;
exports["default"] = _default;