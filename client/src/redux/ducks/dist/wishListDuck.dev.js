"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchWishList = exports.fetchAddWishList = exports.deleteWishListItem = exports.currentWishListItem = exports.deleteFromWishlist = exports.getWishListData = exports.getCurretWishList = exports.addToWishlist = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//const CURRENT_WISHLIST_ITEM = 'cartDuck/CURRENT_WISHLIST_ITEM';
var ADD_TO_WISH = 'wishListDuck/ADD_TO_WISH';
var CURRENT_WISH = 'wishListDuck/CURRENT_WISH';
var DELETE_FROM_WISHLIST = 'wishListDuck/DELETE_FROM_WISHLIST';
var WISHLIST_DATA = 'wishListDuck/WISHLIST_DATA';
var addToWishlist = (0, _redux.createAction)(ADD_TO_WISH);
exports.addToWishlist = addToWishlist;
var getCurretWishList = (0, _redux.createAction)(CURRENT_WISH);
exports.getCurretWishList = getCurretWishList;
var getWishListData = (0, _redux.createAction)(WISHLIST_DATA);
exports.getWishListData = getWishListData;
var deleteFromWishlist = (0, _redux.createAction)(DELETE_FROM_WISHLIST);
exports.deleteFromWishlist = deleteFromWishlist;
var initialStateApp = {
  wishList: [],
  wishListData: []
};

var currentWishListItem = function currentWishListItem(id) {
  return function (dispatch) {
    dispatch(addToWishlist(id));
  };
};

exports.currentWishListItem = currentWishListItem;

var deleteWishListItem = function deleteWishListItem(user_id, productId) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/wishlist/remove/").concat(productId), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                user_id: user_id
              })
            }));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getWishListData(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from wishListDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.deleteWishListItem = deleteWishListItem;

var fetchAddWishList = function fetchAddWishList(user_id, productId) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/wishlist/add/").concat(productId), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                user_id: user_id
              })
            }));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(getWishListData(data));
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t2 = _context2["catch"](0);
            console.log('error from wishListDuck', _context2.t2);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}; // export const fetchCurrentWishList = (userId) => (dispatch) => {
//   !userId ? dispatch(addToWishlist([])) :
//      fetch(`${root}/wishlist/current/${userId}`)//'wishlist//([0-9]+)'
//           .then((res) => res.json())
//           .then((res) => {
//               (typeof res === "string") && 
//               dispatch(getCurretWishList(res.trim('').split('|')));
//           })
//           .catch((e) => console.log('error from wishListDuck', e));
// };


exports.fetchAddWishList = fetchAddWishList;

var fetchWishList = function fetchWishList(userId) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!userId) {
              _context3.next = 17;
              break;
            }

            _context3.prev = 1;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 5;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/wishlist/").concat(userId)));

          case 5:
            _context3.t1 = _context3.sent.json();
            _context3.next = 8;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 8:
            data = _context3.sent;
            dispatch(getWishListData(data));
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t2 = _context3["catch"](1);
            console.log('error from wishListDuck', _context3.t2);

          case 15:
            _context3.next = 18;
            break;

          case 17:
            dispatch(getWishListData([]));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 12]]);
  };
};

exports.fetchWishList = fetchWishList;

var WishListDuck = function WishListDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TO_WISH:
      //if (state.wishList.length === 0) {
      return _objectSpread({}, state, {
        wishList: action.payload
      });

    case WISHLIST_DATA:
      return _objectSpread({}, state, {
        wishListData: action.payload
      });

    case CURRENT_WISH:
      return _objectSpread({}, state, {
        wishList: action.payload
      });

    default:
      return state;
  }
};

var _default = WishListDuck;
exports["default"] = _default;