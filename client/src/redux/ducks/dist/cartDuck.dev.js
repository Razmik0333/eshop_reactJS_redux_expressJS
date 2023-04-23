"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchRemoveOnCart = exports.fetchCurrentCart = exports.fetchAddCart = exports.getModifiedCart = exports.getTotalPriceValue = exports.getClearedCart = exports.getCartToRemove = exports.getCountOfCart = exports.getCartItem = exports.currentCartItem = exports.getCartCount = exports.getEmptyCart = exports.getDeletedCart = exports.getTotalPrice = exports.getSubCart = exports.getCurrentCart = exports.readCurrentCart = exports.getCurrentId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

var _functions = require("../../helpers/functions/functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CURRENT_CART = 'cartDuck/CURRENT_CART';
var CURRENT_CART_ITEM = 'cartDuck/CURRENT_CART_ITEM';
var ADD_TO_CART = 'cartDuck/ADD_TO_CART';
var REMOVE_FROM_CART = 'cartDuck/REMOVE_FROM_CART';
var CART_EMPTY = 'cartDuck/CART_EMPTY';
var DELETE_FROM_CART = 'cartDuck/DELETE_FROM_CART';
var TOTAL_PRICE = 'cartDuck/TOTAL_PRICE';
var CART_COUNT = 'cartDuck/CART_COUNT';
var getCurrentId = (0, _redux.createAction)(CURRENT_CART_ITEM);
exports.getCurrentId = getCurrentId;
var readCurrentCart = (0, _redux.createAction)(CURRENT_CART);
exports.readCurrentCart = readCurrentCart;
var getCurrentCart = (0, _redux.createAction)(ADD_TO_CART);
exports.getCurrentCart = getCurrentCart;
var getSubCart = (0, _redux.createAction)(REMOVE_FROM_CART);
exports.getSubCart = getSubCart;
var getTotalPrice = (0, _redux.createAction)(TOTAL_PRICE);
exports.getTotalPrice = getTotalPrice;
var getDeletedCart = (0, _redux.createAction)(DELETE_FROM_CART);
exports.getDeletedCart = getDeletedCart;
var getEmptyCart = (0, _redux.createAction)(CART_EMPTY);
exports.getEmptyCart = getEmptyCart;
var getCartCount = (0, _redux.createAction)(CART_COUNT);
exports.getCartCount = getCartCount;
var initialStateApp = {
  currentCartItemId: null,
  cartData: [],
  totalPrice: 0,
  countItems: 0
};

var currentCartItem = function currentCartItem(id) {
  return function (dispatch) {
    dispatch(getCurrentId(id));
  };
};

exports.currentCartItem = currentCartItem;

var getCartItem = function getCartItem(obj) {
  return function (dispatch) {
    dispatch(getCurrentCart(obj));
  };
};

exports.getCartItem = getCartItem;

var getCountOfCart = function getCountOfCart(id) {
  return function (dispatch) {
    dispatch(getCartCount(id));
  };
};

exports.getCountOfCart = getCountOfCart;

var getCartToRemove = function getCartToRemove(id) {
  return function (dispatch) {
    dispatch(getSubCart(id));
  };
};

exports.getCartToRemove = getCartToRemove;

var getClearedCart = function getClearedCart(id) {
  return function (dispatch) {
    dispatch(getEmptyCart(id));
  };
};

exports.getClearedCart = getClearedCart;

var getTotalPriceValue = function getTotalPriceValue(val) {
  return function (dispatch) {
    dispatch(getTotalPrice(val));
  };
};

exports.getTotalPriceValue = getTotalPriceValue;

var getModifiedCart = function getModifiedCart(id) {
  return function (dispatch) {
    dispatch(getDeletedCart(id));
  };
};

exports.getModifiedCart = getModifiedCart;

var fetchAddCart = function fetchAddCart(userId, obj) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/cart/add/").concat(userId), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                product_id: Object.keys(obj)[0],
                quantity: "".concat(Object.values(obj)[0])
              })
            }));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(readCurrentCart(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from cartDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchAddCart = fetchAddCart;

var fetchCurrentCart = function fetchCurrentCart(id) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!id) {
              _context2.next = 17;
              break;
            }

            _context2.prev = 1;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 5;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/cart/").concat(id)));

          case 5:
            _context2.t1 = _context2.sent.json();
            _context2.next = 8;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 8:
            data = _context2.sent;
            dispatch(readCurrentCart(data));
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t2 = _context2["catch"](1);
            console.log('error from cartDuck', _context2.t2);

          case 15:
            _context2.next = 18;
            break;

          case 17:
            dispatch(readCurrentCart([]));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 12]]);
  };
};

exports.fetchCurrentCart = fetchCurrentCart;

var fetchRemoveOnCart = function fetchRemoveOnCart(user_id, product_id) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/cart/remove/").concat(product_id), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                user_id: user_id
              })
            }));

          case 4:
            _context3.t1 = _context3.sent.json();
            _context3.next = 7;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 7:
            data = _context3.sent;
            dispatch(readCurrentCart(data));
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t2 = _context3["catch"](0);
            console.log('error from cartDuck', _context3.t2);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchRemoveOnCart = fetchRemoveOnCart;

var CartDuck = function CartDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CURRENT_CART_ITEM:
      return _objectSpread({}, state, {
        currentCartItemId: action.payload
      });

    case TOTAL_PRICE:
      return _objectSpread({}, state, {
        totalPrice: action.payload ? state.totalPrice + action.payload : action.payload
      });

    case CART_COUNT:
      return _objectSpread({}, state, {
        countItems: action.payload
      });

    case CURRENT_CART:
      return _objectSpread({}, state, {
        cartData: action.payload
      });

    case ADD_TO_CART:
      var valObj = {};

      if ((0, _functions.checkEmptyObject)(state.cartData)) {
        valObj = action.payload;
      } else {
        for (var key in action.payload) {
          if (key in state.cartData) {
            valObj = _defineProperty({}, key, ++state.cartData[key]);
          } else {
            valObj = action.payload;
          }
        }
      }

      return _objectSpread({}, state, {
        cartData: _objectSpread({}, state.cartData, {}, valObj)
      });

    case REMOVE_FROM_CART:
      var subObj = {};

      for (var _key in action.payload) {
        console.log(state.cartData[_key]);

        if (state.cartData[_key] > 1) {
          subObj = _defineProperty({}, _key, --state.cartData[_key]);
        } else {
          subObj = _defineProperty({}, _key, 1);
        }
      }

      return _objectSpread({}, state, {}, subObj);

    case CART_EMPTY:
      return _objectSpread({}, state, {
        cartData: action.payload
      });

    case DELETE_FROM_CART:
      delete state.cartData[action.payload];
      return _objectSpread({}, state, {
        cartData: state.cartData
      });

    default:
      return state;
  }
};

var _default = CartDuck;
exports["default"] = _default;