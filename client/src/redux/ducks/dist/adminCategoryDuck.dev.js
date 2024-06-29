"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.currentCategoryId = exports.getCurrentCategoryId = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CURRENT_CATEGORY = 'adminOrderDuck/CURRENT_CATEGORY';
var getCurrentCategoryId = (0, _redux.createAction)(CURRENT_CATEGORY);
exports.getCurrentCategoryId = getCurrentCategoryId;
var initialStateApp = {
  currentCategoryId: 1
};

var currentCategoryId = function currentCategoryId(id) {
  return function (dispatch) {
    dispatch(getCurrentCategoryId(id));
  };
};
/*
export const fetchOrdersChanges = () => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/orders/save`)).json();
    //dispatch(orderSave(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
*/


exports.currentCategoryId = currentCategoryId;

var AdminCategoryDuck = function AdminCategoryDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CURRENT_CATEGORY:
      return _objectSpread({}, state, {
        currentCategoryId: action.payload
      });

    default:
      return state;
  }
};

var _default = AdminCategoryDuck;
exports["default"] = _default;