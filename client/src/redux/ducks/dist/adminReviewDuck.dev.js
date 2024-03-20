"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchReviewById = exports.fetchReviewList = exports.changeCurrentReview = exports.currentReviewId = exports.getCurrentReview = exports.getReviewId = exports.getReviewList = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var REVIEW_LIST = 'adminReviewDuck/REVIEW_LIST';
var CURRENT_REVIEW_ID = 'adminReviewDuck/CURRENT_REVIEW_ID';
var CURRENT_REVIEW = 'adminReviewDuck/CURRENT_REVIEW';
var getReviewList = (0, _redux.createAction)(REVIEW_LIST);
exports.getReviewList = getReviewList;
var getReviewId = (0, _redux.createAction)(CURRENT_REVIEW_ID);
exports.getReviewId = getReviewId;
var getCurrentReview = (0, _redux.createAction)(CURRENT_REVIEW);
exports.getCurrentReview = getCurrentReview;
var initialStateApp = {
  reviewList: [],
  currentReviewId: null,
  currentReview: {}
};

var currentReviewId = function currentReviewId(id) {
  return function (dispatch) {
    dispatch(getReviewId(id));
  };
};

exports.currentReviewId = currentReviewId;

var changeCurrentReview = function changeCurrentReview(obj) {
  return function (dispatch) {
    dispatch(getCurrentReview(obj));
  };
};

exports.changeCurrentReview = changeCurrentReview;

var fetchReviewList = function fetchReviewList() {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/review/list")));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getReviewList(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from AdminReviewDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchReviewList = fetchReviewList;

var fetchReviewById = function fetchReviewById(id) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/review/").concat(id)));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(getCurrentReview(data));
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t2 = _context2["catch"](0);
            console.log('error from AdminReviewDuck', _context2.t2);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchReviewById = fetchReviewById;

var AdminReviewDuck = function AdminReviewDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case REVIEW_LIST:
      return _objectSpread({}, state, {
        reviewList: action.payload
      });

    case CURRENT_REVIEW_ID:
      return _objectSpread({}, state, {
        currentReviewId: action.payload
      });

    case CURRENT_REVIEW:
      return _objectSpread({}, state, {
        currentReview: action.payload
      });

    default:
      return state;
  }
};

var _default = AdminReviewDuck;
exports["default"] = _default;