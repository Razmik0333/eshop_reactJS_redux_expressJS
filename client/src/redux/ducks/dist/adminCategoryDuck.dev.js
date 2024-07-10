"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchProductsForDelete = exports.fetchCategoriesList = exports.fetchCurrentCategory = exports.currentCategoryId = exports.currentCategoryClear = exports.getCategoriesList = exports.getCurrentCategory = exports.getCurrentCategoryId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CURRENT_CATEGORY_ID = 'adminCategoryDuck/CURRENT_CATEGORY_ID';
var CURRENT_CATEGORY = 'adminCategoryDuck/CURRENT_CATEGORY';
var CATEGORIES_LIST = 'adminCategoryDuck/CATEGORIES_LIST';
var getCurrentCategoryId = (0, _redux.createAction)(CURRENT_CATEGORY_ID);
exports.getCurrentCategoryId = getCurrentCategoryId;
var getCurrentCategory = (0, _redux.createAction)(CURRENT_CATEGORY);
exports.getCurrentCategory = getCurrentCategory;
var getCategoriesList = (0, _redux.createAction)(CATEGORIES_LIST);
exports.getCategoriesList = getCategoriesList;
var initialStateApp = {
  currentCategoryId: 1,
  currentCategory: {},
  categoriesList: []
};

var currentCategoryClear = function currentCategoryClear() {
  return function (dispatch) {
    dispatch(getCurrentCategoryId(null));
    dispatch(getCurrentCategory(null));
  };
};

exports.currentCategoryClear = currentCategoryClear;

var currentCategoryId = function currentCategoryId(id) {
  return function (dispatch) {
    dispatch(getCurrentCategoryId(id));
  };
};

exports.currentCategoryId = currentCategoryId;

var fetchCurrentCategory = function fetchCurrentCategory(id) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/category/").concat(id)));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getCurrentCategory(data));
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

exports.fetchCurrentCategory = fetchCurrentCategory;

var fetchCategoriesList = function fetchCategoriesList() {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log('hdjf');
            _context2.t0 = regeneratorRuntime;
            _context2.next = 5;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/category/list")));

          case 5:
            _context2.t1 = _context2.sent.json();
            _context2.next = 8;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 8:
            data = _context2.sent;
            console.log("🚀 ~ fetchCategoriesList ~ data:", data);
            dispatch(getCategoriesList(data));
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t2 = _context2["catch"](0);
            console.log('error from AdminOrderDuck', _context2.t2);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

exports.fetchCategoriesList = fetchCategoriesList;

var fetchProductsForDelete = function fetchProductsForDelete(category_id) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/category/delete"), {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                category_id: category_id
              })
            }));

          case 4:
            _context3.t1 = _context3.sent.json();
            _context3.next = 7;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 7:
            data = _context3.sent;
            dispatch(getCategoriesList(data));
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t2 = _context3["catch"](0);
            console.log('error from AdminProductDuck', _context3.t2);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchProductsForDelete = fetchProductsForDelete;

var AdminCategoryDuck = function AdminCategoryDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CURRENT_CATEGORY_ID:
      return _objectSpread({}, state, {
        currentCategoryId: action.payload
      });

    case CURRENT_CATEGORY:
      return _objectSpread({}, state, {
        currentCategory: action.payload
      });

    case CATEGORIES_LIST:
      return _objectSpread({}, state, {
        categoriesList: action.payload
      });

    default:
      return state;
  }
};

var _default = AdminCategoryDuck;
exports["default"] = _default;