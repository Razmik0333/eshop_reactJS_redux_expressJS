"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchAllSubCategories = exports.fetchSubCategoriesById = exports.getSubCategoriesList = exports.getSubCategoryListByCatId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUB_CATEGORY_BY_CATEGORY = 'adminOrderDuck/SUB_CATEGORY_BY_CATEGORY';
var SUB_CATEGORIES = 'adminOrderDuck/SUB_CATEGORIES';
var getSubCategoryListByCatId = (0, _redux.createAction)(SUB_CATEGORY_BY_CATEGORY);
exports.getSubCategoryListByCatId = getSubCategoryListByCatId;
var getSubCategoriesList = (0, _redux.createAction)(SUB_CATEGORIES);
exports.getSubCategoriesList = getSubCategoriesList;
var initialStateApp = {
  subCategoriesByCatId: [],
  allSubCategories: []
}; //  export const changeSubCategoryId = (id) => (dispatch) => {
//       dispatch(getSubCategoryId(id));
//  };

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

    default:
      return state;
  }
};

var _default = AdminSubCategoryDuck;
exports["default"] = _default;