"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialStateApp = exports.getIsFocused = exports.isSearch = exports.currentSearch = exports.currentCategoryForSearch = exports.currentCategory = exports.fetchCurrentCatgory = exports.fetchCatgories = exports.getCurrentCategoryForSearch = exports.changeIsFocused = exports.changeIsSearch = exports.getSearchWord = exports.getCurrentCategory = exports.getCurrentCategoryId = exports.getCategories = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCH_CATEGORIES = 'navigationDuck/FETCH_CATEGORIES';
var CATEGORY_ID = 'navigationDuck/CATEGORY_ID';
var CURRENT_CATEGORY = 'navigationDuck/CURRENT_CATEGORY';
var SEARCH_WORD = 'navigationDuck/SEARCH_WORD';
var IS_SEARCH = 'navigationDuck/IS_SEARCH';
var IS_FOCUS = 'navigationDuck/IS_FOCUS';
var CURRENT_CATEGORY_FOR_SEARCH = 'navigationDuck/CURRENT_CATEGORY_FOR_SEARCH';
var getCategories = (0, _redux.createAction)(FETCH_CATEGORIES);
exports.getCategories = getCategories;
var getCurrentCategoryId = (0, _redux.createAction)(CATEGORY_ID);
exports.getCurrentCategoryId = getCurrentCategoryId;
var getCurrentCategory = (0, _redux.createAction)(CURRENT_CATEGORY);
exports.getCurrentCategory = getCurrentCategory;
var getSearchWord = (0, _redux.createAction)(SEARCH_WORD);
exports.getSearchWord = getSearchWord;
var changeIsSearch = (0, _redux.createAction)(IS_SEARCH);
exports.changeIsSearch = changeIsSearch;
var changeIsFocused = (0, _redux.createAction)(IS_FOCUS);
exports.changeIsFocused = changeIsFocused;
var getCurrentCategoryForSearch = (0, _redux.createAction)(CURRENT_CATEGORY_FOR_SEARCH);
exports.getCurrentCategoryForSearch = getCurrentCategoryForSearch;

var fetchCatgories = function fetchCatgories() {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/category")));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getCategories(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from NavigationDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchCatgories = fetchCatgories;

var fetchCurrentCatgory = function fetchCurrentCatgory(id) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/category/").concat(id)));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(getCurrentCategory(data));
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t2 = _context2["catch"](0);
            console.log('error from NavigationDuck', _context2.t2);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchCurrentCatgory = fetchCurrentCatgory;

var currentCategory = function currentCategory(id) {
  return function (dispatch) {
    dispatch(getCurrentCategoryId(id));
  };
};

exports.currentCategory = currentCategory;

var currentCategoryForSearch = function currentCategoryForSearch(id) {
  return function (dispatch) {
    dispatch(getCurrentCategoryForSearch(id));
  };
};

exports.currentCategoryForSearch = currentCategoryForSearch;

var currentSearch = function currentSearch(str) {
  return function (dispatch) {
    dispatch(getSearchWord(str));
  };
};

exports.currentSearch = currentSearch;

var isSearch = function isSearch(str) {
  return function (dispatch) {
    dispatch(changeIsSearch(str));
  };
};

exports.isSearch = isSearch;

var getIsFocused = function getIsFocused(bool) {
  return function (dispatch) {
    dispatch(changeIsFocused(bool));
  };
};

exports.getIsFocused = getIsFocused;
var initialStateApp = {
  categories: [],
  //
  categoryID: null,
  currentCategory: {},
  //
  searchWord: '',
  //
  isSearch: false,
  isFocused: false,
  currentCategoryForSearch: '' //

};
exports.initialStateApp = initialStateApp;

function NavigationDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_CATEGORIES:
      return _objectSpread({}, state, {
        categories: action.payload
      });

    case CATEGORY_ID:
      return _objectSpread({}, state, {
        categoryID: action.payload
      });

    case CURRENT_CATEGORY:
      return _objectSpread({}, state, {
        currentCategory: action.payload
      });

    case CURRENT_CATEGORY_FOR_SEARCH:
      return _objectSpread({}, state, {
        currentCategoryForSearch: action.payload
      });

    case SEARCH_WORD:
      return _objectSpread({}, state, {
        searchWord: action.payload
      });

    case IS_SEARCH:
      return _objectSpread({}, state, {
        isSearch: action.payload
      });

    case IS_FOCUS:
      return _objectSpread({}, state, {
        isFocused: action.payload
      });

    default:
      return state;
  }
}

var _default = NavigationDuck;
exports["default"] = _default;