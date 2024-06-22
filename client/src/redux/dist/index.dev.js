"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _configsDuck = _interopRequireDefault(require("./ducks/configsDuck"));

var _navigationDuck = _interopRequireDefault(require("./ducks/navigationDuck"));

var _productDuck = _interopRequireDefault(require("./ducks/productDuck"));

var _cartDuck = _interopRequireDefault(require("./ducks/cartDuck"));

var _userDuck = _interopRequireDefault(require("./ducks/userDuck"));

var _orderDuck = _interopRequireDefault(require("./ducks/orderDuck"));

var _adminOrderDuck = _interopRequireDefault(require("./ducks/adminOrderDuck"));

var _adminReviewDuck = _interopRequireDefault(require("./ducks/adminReviewDuck"));

var _adminProductDuck = _interopRequireDefault(require("./ducks/adminProductDuck"));

var _adminUserDuck = _interopRequireDefault(require("./ducks/adminUserDuck"));

var _reviewDuck = _interopRequireDefault(require("./ducks/reviewDuck"));

var _wishListDuck = _interopRequireDefault(require("./ducks/wishListDuck"));

var _subCategoryDuck = _interopRequireDefault(require("./ducks/subCategoryDuck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  NavigationDuck: _navigationDuck["default"],
  SubCategoryDuck: _subCategoryDuck["default"],
  ProductDuck: _productDuck["default"],
  ConfigsDuck: _configsDuck["default"],
  CartDuck: _cartDuck["default"],
  OrderDuck: _orderDuck["default"],
  UserDuck: _userDuck["default"],
  AdminOrderDuck: _adminOrderDuck["default"],
  AdminProductDuck: _adminProductDuck["default"],
  AdminUserDuck: _adminUserDuck["default"],
  AdminReviewDuck: _adminReviewDuck["default"],
  ReviewDuck: _reviewDuck["default"],
  WishListDuck: _wishListDuck["default"]
});
var _default = rootReducer;
exports["default"] = _default;