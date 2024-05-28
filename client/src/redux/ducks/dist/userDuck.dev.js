"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.changeUserName = exports.getUserData = exports.fetchEmailForNotice = exports.clearCachesFiles = exports.userAvatarPicture = exports.currentUser = exports.changeEmail = exports.clearCaches = exports.getUserName = exports.getUserAvatar = exports.getUserDataAction = exports.getUserId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var USER_ID = 'user/USER_ID';
var USER_DATA = 'user/USER_DATA';
var USER_AVATAR = 'user/USER_AVATAR';
var USER_NAME = 'user/USER_NAME';
var USER_CACHES = 'user/USER_CACHES';
var EMAIL_SUBSCRIBE = 'user/EMAIL_SUBSCRIBE';
var getUserId = (0, _redux.createAction)(USER_ID);
exports.getUserId = getUserId;
var getUserDataAction = (0, _redux.createAction)(USER_DATA);
exports.getUserDataAction = getUserDataAction;
var getUserAvatar = (0, _redux.createAction)(USER_AVATAR);
exports.getUserAvatar = getUserAvatar;
var getUserName = (0, _redux.createAction)(USER_NAME);
exports.getUserName = getUserName;
var clearCaches = (0, _redux.createAction)(USER_CACHES);
exports.clearCaches = clearCaches;
var changeEmail = (0, _redux.createAction)(EMAIL_SUBSCRIBE);
exports.changeEmail = changeEmail;
var initialState = {
  userId: null,
  avatarURL: "".concat(_constants.root, "/icons/config/user_no_have_picture.png"),
  userData: {},
  isCleared: false,
  emailSubscribe: false
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

var userAvatarPicture = function userAvatarPicture(url) {
  return function (dispatch) {
    dispatch(getUserAvatar(url));
  };
};

exports.userAvatarPicture = userAvatarPicture;

var clearCachesFiles = function clearCachesFiles(id) {
  return function _callee(dispatch) {
    var isCleared;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("/api/user/clear/".concat(id)));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            isCleared = _context.sent;
            console.log("🚀 ~ clearCachesFiles ~ isCleared:", isCleared);
            dispatch(clearCaches(isCleared));
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t2 = _context["catch"](0);
            throw _context.t2;

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.clearCachesFiles = clearCachesFiles;

var fetchEmailForNotice = function fetchEmailForNotice(email) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/notice/email"), {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify({
                email: email
              })
            }));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(changeEmail(data));
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t2 = _context2["catch"](0);
            throw _context2.t2;

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchEmailForNotice = fetchEmailForNotice;

var getUserData = function getUserData(id) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!id) {
              _context3.next = 17;
              break;
            }

            _context3.prev = 1;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 5;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/user/").concat(id)));

          case 5:
            _context3.t1 = _context3.sent.json();
            _context3.next = 8;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 8:
            data = _context3.sent;
            dispatch(getUserDataAction(data));
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t2 = _context3["catch"](1);
            console.log('error from userDuck', _context3.t2);

          case 15:
            _context3.next = 18;
            break;

          case 17:
            dispatch(getUserDataAction(null));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 12]]);
  };
};

exports.getUserData = getUserData;

var changeUserName = function changeUserName(user_id, user_name) {
  return function _callee4(dispatch) {
    var userName;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!user_name) {
              _context4.next = 15;
              break;
            }

            _context4.prev = 1;
            _context4.t0 = regeneratorRuntime;
            _context4.next = 5;
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
            _context4.t1 = _context4.sent.json();
            _context4.next = 8;
            return _context4.t0.awrap.call(_context4.t0, _context4.t1);

          case 8:
            userName = _context4.sent;
            dispatch(getUserName(userName));
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t2 = _context4["catch"](1);
            console.log(_context4.t2);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 12]]);
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

    case USER_CACHES:
      return _objectSpread({}, state, {
        isCleared: action.payload
      });

    case EMAIL_SUBSCRIBE:
      return _objectSpread({}, state, {
        emailSubscribe: action.payload
      });

    default:
      return state;
  }
};

var _default = UserDuck;
exports["default"] = _default;