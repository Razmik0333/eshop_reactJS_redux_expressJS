"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getUserData = exports.currentUser = exports.getUserDataAction = exports.getUserId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var USER_ID = 'user/USER_ID';
var USER_DATA = 'user/USER_DATA';
var getUserId = (0, _redux.createAction)(USER_ID);
exports.getUserId = getUserId;
var getUserDataAction = (0, _redux.createAction)(USER_DATA);
exports.getUserDataAction = getUserDataAction;
var initialState = {
  userId: null,
  userData: {}
};

var currentUser = function currentUser(id) {
  return function (dispatch) {
    if (id) {
      dispatch(getUserId(id));
    } else {
      dispatch(getUserId(null));
    }
  };
};

exports.currentUser = currentUser;

var getUserData = function getUserData(id) {
  return function _callee(dispatch) {
    var _ref, _ref2, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(id);

            if (!id) {
              _context.next = 20;
              break;
            }

            _context.prev = 2;
            _context.t0 = regeneratorRuntime;
            _context.next = 6;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/user/").concat(id)));

          case 6:
            _context.t1 = _context.sent.json();
            _context.next = 9;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 9:
            _ref = _context.sent;
            _ref2 = _slicedToArray(_ref, 1);
            data = _ref2[0];
            dispatch(getUserDataAction(data));
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t2 = _context["catch"](2);
            console.log('error from userDuck', _context.t2);

          case 18:
            _context.next = 21;
            break;

          case 20:
            dispatch(getUserDataAction(null));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 15]]);
  };
};

exports.getUserData = getUserData;

var UserDuck = function UserDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_ID:
      return _objectSpread({}, state, {
        userId: action.payload
      });

    case USER_DATA:
      return _objectSpread({}, state, {
        userData: action.payload
      });

    default:
      return state;
  }
};

var _default = UserDuck;
exports["default"] = _default;