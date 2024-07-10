"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchUsersList = exports.getUsersList = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var USERS_LIST = 'adminUserDuck/USERS_LIST'; // const PRODUCTS_FOR_UPDATE_ID = 'adminProductDuck/PRODUCTS_FOR_UPDATE_ID';
// const PRODUCTS_FOR_UPDATE = 'adminProductDuck/PRODUCTS_FOR_UPDATE';
// const PRODUCT_FOR_DELETE = 'adminProductDuck/PRODUCT_FOR_DELETE';

var getUsersList = (0, _redux.createAction)(USERS_LIST); // export const getProductIdForUpdate = createAction(PRODUCTS_FOR_UPDATE_ID);
// export const getProductForUpdate = createAction(PRODUCTS_FOR_UPDATE);
// export const getProductForDelete = createAction(PRODUCT_FOR_DELETE);

exports.getUsersList = getUsersList;
var initialStateApp = {
  usersList: []
};

var fetchUsersList = function fetchUsersList() {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/user/list")));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getUsersList(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from AdminProductDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchUsersList = fetchUsersList;

var AdminUserDuck = function AdminUserDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USERS_LIST:
      return _objectSpread({}, state, {
        usersList: action.payload
      });

    default:
      return state;
  }
};

var _default = AdminUserDuck;
exports["default"] = _default;