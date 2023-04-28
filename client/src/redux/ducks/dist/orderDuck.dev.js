"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getOrderStatus = exports.fetchDeliveredOrdersByUser = exports.changeOrderStatus = exports.fetchProductsByOrder = exports.fetchUserOrdersByStatus = exports.fetchUserOrders = exports.emptyOrders = exports.getProductQuantity = exports.orderConfirm = exports.orderConfirmId = exports.clearOrders = exports.fetchOrderData = exports.changeOrdersFromLogout = exports.getDeliveredOredersByUser = exports.changeConfirmed = exports.changeOrderForConfirm = exports.changeStatus = exports.getCurrentStatus = exports.getProductsCount = exports.fetchProducts = exports.fetchOrders = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

var _functions = require("../../helpers/functions/functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCH_ORDERS = 'orderDuck/FETCH_ORDERS';
var FETCH_PRODUCTS = 'orderDuck/FETCH_PRODUCTS';
var PRODUCT_COUNTS = 'orderDuck/PRODUCT_COUNTS';
var CURRENT_STATUS = 'orderDuck/CURRENT_STATUS';
var CHANGE_STATUS = 'orderDuck/CHANGE_STATUS';
var CHANGE_ORDER_CONFIRMED_ID = 'orderDuck/CHANGE_ORDER_CONFIRMED_ID';
var CONFIRMED = 'orderDuck/CONFIRMED';
var DELIVERED_ORDERS_BY_USER = 'orderDuck/DELIVERED_ORDERS_BY_USER'; // const CLEAR_ORDER_FROM_STATUS = 'orderDuck/CLEAR_ORDER_FROM_STATUS';

var fetchOrders = (0, _redux.createAction)(FETCH_ORDERS);
exports.fetchOrders = fetchOrders;
var fetchProducts = (0, _redux.createAction)(FETCH_PRODUCTS);
exports.fetchProducts = fetchProducts;
var getProductsCount = (0, _redux.createAction)(PRODUCT_COUNTS);
exports.getProductsCount = getProductsCount;
var getCurrentStatus = (0, _redux.createAction)(CURRENT_STATUS);
exports.getCurrentStatus = getCurrentStatus;
var changeStatus = (0, _redux.createAction)(CHANGE_STATUS);
exports.changeStatus = changeStatus;
var changeOrderForConfirm = (0, _redux.createAction)(CHANGE_ORDER_CONFIRMED_ID);
exports.changeOrderForConfirm = changeOrderForConfirm;
var changeConfirmed = (0, _redux.createAction)(CONFIRMED);
exports.changeConfirmed = changeConfirmed;
var getDeliveredOredersByUser = (0, _redux.createAction)(DELIVERED_ORDERS_BY_USER); // export const clearOrders = createAction(CLEAR_ORDER_FROM_STATUS);createAction(CHANGE_ORDER_CONFIRMED_ID);

exports.getDeliveredOredersByUser = getDeliveredOredersByUser;
var initialStateApp = {
  ordersData: [],
  orderProducts: {},
  deliveredOrders: [],
  productsCounts: {},
  currentStatus: -1,
  changedStatus: 0,
  orderConfirmId: null,
  isConfirmed: false
};

var changeOrdersFromLogout = function changeOrdersFromLogout() {
  return function (dispatch) {
    dispatch(fetchOrders([]));
    dispatch(fetchProducts({}));
    dispatch(getProductsCount({}));
    dispatch(getOrderStatus(-1));
  };
};

exports.changeOrdersFromLogout = changeOrdersFromLogout;

var fetchOrderData = function fetchOrderData(obj) {
  return function (dispatch) {
    var keys = Object.keys;
    var values = Object.values;

    for (var key in obj) {
      dispatch(fetchProductsByOrder(key, keys(obj[key])));
      dispatch(getProductQuantity(key, values(obj[key])));
    }
  };
};

exports.fetchOrderData = fetchOrderData;

var clearOrders = function clearOrders() {
  return function (dispatch) {
    dispatch(fetchProducts({}));
    dispatch(getProductsCount({}));
  };
};

exports.clearOrders = clearOrders;

var orderConfirmId = function orderConfirmId(id) {
  return function (dispatch) {
    dispatch(changeOrderForConfirm(id));
  };
};

exports.orderConfirmId = orderConfirmId;

var orderConfirm = function orderConfirm(bool) {
  return function (dispatch) {
    dispatch(changeConfirmed(bool));
  };
};

exports.orderConfirm = orderConfirm;

var getProductQuantity = function getProductQuantity(val, obj) {
  return function (dispatch) {
    dispatch(getProductsCount(_defineProperty({}, val, obj)));
  };
};

exports.getProductQuantity = getProductQuantity;

var emptyOrders = function emptyOrders() {
  return function (dispatch) {
    dispatch(fetchOrders([]));
  };
};

exports.emptyOrders = emptyOrders;

var fetchUserOrders = function fetchUserOrders(id) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/package/user/").concat(id)));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(fetchOrders(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from orderDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchUserOrders = fetchUserOrders;

var fetchUserOrdersByStatus = function fetchUserOrdersByStatus(id, status) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/package/delivered/").concat(id), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                status: status
              })
            }));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(fetchOrders(data));
            console.log("🚀 ~ file: orderDuck.js:95 ~ fetchUserOrdersByStatus ~ data:", data);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t2 = _context2["catch"](0);
            console.log('error from orderDuck', _context2.t2);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.fetchUserOrdersByStatus = fetchUserOrdersByStatus;

var fetchProductsByOrder = function fetchProductsByOrder(val, arr) {
  return function (dispatch) {
    if (arr) {
      fetch("".concat(_constants.root, "/package/product/").concat(arr)).then(function (res) {
        return res.json();
      }).then(function (res) {
        dispatch(fetchProducts(_defineProperty({}, val, res)));
      })["catch"](function (e) {
        return console.log('error from orderDuck', e);
      });
    }
  };
};

exports.fetchProductsByOrder = fetchProductsByOrder;

var changeOrderStatus = function changeOrderStatus(id, status) {
  return function (dispatch) {
    //console.log(id, status);
    fetch("".concat(_constants.root, "/package/status/").concat(id, "/").concat(status)).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(changeOrderForConfirm(res));
      dispatch(orderConfirm(true));
    })["catch"](function (e) {
      return console.log('error from orderDuck', e);
    });
  };
};

exports.changeOrderStatus = changeOrderStatus;

var fetchDeliveredOrdersByUser = function fetchDeliveredOrdersByUser(id) {
  return function (dispatch) {
    //console.log(id, status);
    id && fetch("".concat(_constants.root, "/package/delivered/").concat(id)).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(getDeliveredOredersByUser(Object.values((0, _functions.getUserOrdersFromArray)(res)))); // dispatch(orderConfirm(true));
    })["catch"](function (e) {
      return console.log('error from orderDuck', e);
    });
  };
};

exports.fetchDeliveredOrdersByUser = fetchDeliveredOrdersByUser;

var getOrderStatus = function getOrderStatus(id) {
  return function (dispatch) {
    dispatch(getCurrentStatus(id));
  };
};

exports.getOrderStatus = getOrderStatus;

var OrderDuck = function OrderDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_ORDERS:
      return _objectSpread({}, state, {
        ordersData: action.payload
      });

    case FETCH_PRODUCTS:
      if ((0, _functions.checkEmptyObject)(action.payload)) {
        return _objectSpread({}, state, {
          orderProducts: _objectSpread({}, action.payload)
        });
      } else {
        return _objectSpread({}, state, {
          orderProducts: _objectSpread({}, state.orderProducts, {}, action.payload)
        });
      }

    case PRODUCT_COUNTS:
      if ((0, _functions.checkEmptyObject)(action.payload)) {
        return _objectSpread({}, state, {
          productsCounts: _objectSpread({}, action.payload)
        });
      } else {
        return _objectSpread({}, state, {
          productsCounts: _objectSpread({}, state.productsCounts, {}, action.payload)
        });
      }

    case CURRENT_STATUS:
      return _objectSpread({}, state, {
        currentStatus: action.payload
      });

    case CONFIRMED:
      return _objectSpread({}, state, {
        isConfirmed: action.payload
      });

    case DELIVERED_ORDERS_BY_USER:
      return _objectSpread({}, state, {
        deliveredOrders: action.payload
      });

    case CHANGE_ORDER_CONFIRMED_ID:
      state.ordersData.map(function (item) {
        if (item['id'] === action.payload) {
          item['user_status'] = 3;
        }
      });
      return _objectSpread({}, state, {
        orderConfirmId: action.payload
      });

    default:
      return state;
  }
};

var _default = OrderDuck;
exports["default"] = _default;