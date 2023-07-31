"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.changeUserName = exports.getUserData = exports.userAvatarURL = exports.currentUser = exports.getUserName = exports.getUserAvatar = exports.getUserDataAction = exports.getUserId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var USER_ID = 'user/USER_ID';
var USER_DATA = 'user/USER_DATA';
var USER_AVATAR = 'user/USER_AVATAR';
var USER_NAME = 'user/USER_NAME';
var getUserId = (0, _redux.createAction)(USER_ID);
exports.getUserId = getUserId;
var getUserDataAction = (0, _redux.createAction)(USER_DATA);
exports.getUserDataAction = getUserDataAction;
var getUserAvatar = (0, _redux.createAction)(USER_AVATAR);
exports.getUserAvatar = getUserAvatar;
var getUserName = (0, _redux.createAction)(USER_NAME);
exports.getUserName = getUserName;
var initialState = {
  userId: null,
  avatarURL: "".concat(_constants.root, "/icons/config/user_no_have_picture.png"),
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

var userAvatarURL = function userAvatarURL(url) {
  return function (dispatch) {
    dispatch(getUserAvatar(url));
  };
};

exports.userAvatarURL = userAvatarURL;

var getUserData = function getUserData(id) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(id);

            if (!id) {
              _context.next = 18;
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
            data = _context.sent;
            dispatch(getUserDataAction(data));
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t2 = _context["catch"](2);
            console.log('error from userDuck', _context.t2);

          case 16:
            _context.next = 19;
            break;

          case 18:
            dispatch(getUserDataAction(null));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 13]]);
  };
};

exports.getUserData = getUserData;

var changeUserName = function changeUserName(user_id, user_name) {
  return function _callee2(dispatch) {
    var userName;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!user_name) {
              _context2.next = 16;
              break;
            }

            _context2.prev = 1;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 5;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/user/name"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                user_id: user_id,
                user_name: user_name
              })
            }));

          case 5:
            _context2.t1 = _context2.sent.json();
            _context2.next = 8;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 8:
            userName = _context2.sent;
            console.log(userName);
            dispatch(getUserName(userName));
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t2 = _context2["catch"](1);
            console.log(_context2.t2);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 13]]);
  };
};

exports.changeUserName = changeUserName;

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

    case USER_AVATAR:
      return _objectSpread({}, state, {
        userData: _objectSpread({}, state.userData, {
          picture: action.payload
        })
      });

    case USER_NAME:
      return _objectSpread({}, state, {
        userData: _objectSpread({}, state.userData, {
          name: action.payload
        })
      });

    default:
      return state;
  }
};

var _default = UserDuck;
exports["default"] = _default;