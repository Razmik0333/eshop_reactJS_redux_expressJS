"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchSubCategoryForDelete = exports.fetchCurrentSubCategory = exports.fetchAllSubCategories = exports.fetchSubCategoriesById = exports.currentSubCategoryClear = exports.changeSubCategoryId = exports.getCurrentSubCategory = exports.getSubCategoryId = exports.getSubCategoriesList = exports.getSubCategoryListByCatId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUB_CATEGORY_BY_CATEGORY = 'adminOrderDuck/SUB_CATEGORY_BY_CATEGORY';
var SUB_CATEGORIES = 'adminOrderDuck/SUB_CATEGORIES';
var CURRENT_SUB_CATEGORY_ID = 'adminOrderDuck/CURRENT_SUB_CATEGORY_ID';
var CURRENT_SUB_CATEGORY = 'adminOrderDuck/CURRENT_SUB_CATEGORY';
var getSubCategoryListByCatId = (0, _redux.createAction)(SUB_CATEGORY_BY_CATEGORY);
exports.getSubCategoryListByCatId = getSubCategoryListByCatId;
var getSubCategoriesList = (0, _redux.createAction)(SUB_CATEGORIES);
exports.getSubCategoriesList = getSubCategoriesList;
var getSubCategoryId = (0, _redux.createAction)(CURRENT_SUB_CATEGORY_ID);
exports.getSubCategoryId = getSubCategoryId;
var getCurrentSubCategory = (0, _redux.createAction)(CURRENT_SUB_CATEGORY);
exports.getCurrentSubCategory = getCurrentSubCategory;
var initialStateApp = {
  subCategoriesByCatId: [],
  allSubCategories: [],
  subCategoriesList: [],
  currentSubCategoryId: null,
  currentSubCategory: {}
};

var changeSubCategoryId = function changeSubCategoryId(id) {
  return function (dispatch) {
    dispatch(getSubCategoryId(id));
  };
};

exports.changeSubCategoryId = changeSubCategoryId;

var currentSubCategoryClear = function currentSubCategoryClear() {
  return function (dispatch) {
    dispatch(getSubCategoryId(null));
    dispatch(getCurrentSubCategory(null));
  };
};

exports.currentSubCategoryClear = currentSubCategoryClear;

var fetchSubCategoriesById = function fetchSubCategoriesById(id) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/sub_cats/").concat(id)));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getSubCategoryListByCatId(data));
            console.log("🚀 ~ fetchSubCategoriesById ~ data:", data);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t2 = _context["catch"](0);
            console.log('error from AdminOrderDuck', _context.t2);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.fetchSubCategoriesById = fetchSubCategoriesById;

var fetchAllSubCategories = function fetchAllSubCategories() {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/sub_cats")));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(getSubCategoriesList(data));
            console.log("🚀 ~ fetchSubCategoriesById ~ data:", data);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t2 = _context2["catch"](0);
            console.log('error from AdminOrderDuck', _context2.t2);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.fetchAllSubCategories = fetchAllSubCategories;

var fetchCurrentSubCategory = function fetchCurrentSubCategory(id) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/sub_cat/").concat(id)));

          case 4:
            _context3.t1 = _context3.sent.json();
            _context3.next = 7;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 7:
            data = _context3.sent;
            dispatch(getCurrentSubCategory(data));
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

exports.fetchCurrentSubCategory = fetchCurrentSubCategory;

var fetchSubCategoryForDelete = function fetchSubCategoryForDelete(sub_category_id) {
  return function _callee4(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.t0 = regeneratorRuntime;
            _context4.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/subcategory/delete"), {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                sub_category_id: sub_category_id
              })
            }));

          case 4:
            _context4.t1 = _context4.sent.json();
            _context4.next = 7;
            return _context4.t0.awrap.call(_context4.t0, _context4.t1);

          case 7:
            data = _context4.sent;
            console.log(data);
            dispatch(getSubCategoriesList(data));
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t2 = _context4["catch"](0);
            console.log('error from AdminProductDuck', _context4.t2);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.fetchSubCategoryForDelete = fetchSubCategoryForDelete;

var AdminSubCategoryDuck = function AdminSubCategoryDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SUB_CATEGORY_BY_CATEGORY:
      return _objectSpread({}, state, {
        subCategoriesByCatId: action.payload
      });

    case SUB_CATEGORIES:
      return _objectSpread({}, state, {
        subCategoriesList: action.payload
      });

    case CURRENT_SUB_CATEGORY_ID:
      return _objectSpread({}, state, {
        currentSubCategoryId: action.payload
      });

    case CURRENT_SUB_CATEGORY:
      return _objectSpread({}, state, {
        currentSubCategory: action.payload
      });

    default:
      return state;
  }
};

var _default = AdminSubCategoryDuck;
exports["default"] = _default;