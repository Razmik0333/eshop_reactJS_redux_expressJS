"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialStateApp = exports.getViewedProducts = exports.clearProductsByCosts = exports.changeStepsCounts = exports.getCartProductsItems = exports.currentProduct = exports.fetchVerySoldedProducts = exports.fetchNewestProducts = exports.fetchViewedProducts = exports.fetchProductsByString = exports.changeProductRating = exports.fetchRecomendedProducts = exports.fetchMaxDiscountProduct = exports.fetchCurrentProduct = exports.fetchSearchedData = exports.fetchProductsByCosts = exports.fetchProductsByCategory = exports.fetchProductsForStartingPage = exports.clearSearchData = exports.changeViewedProductsData = exports.changeViewedProducts = exports.getElementsByCosts = exports.getMaxDiscountData = exports.getSearchData = exports.getAllVerySoldedProducts = exports.getVerySoldedProducts = exports.getCartProducts = exports.getProductRating = exports.getNewestProducts = exports.getRecommendProducts = exports.getProductsByCategoryLength = exports.getStepsCounts = exports.getProductsByCategory = exports.getCurrentProduct = exports.getCurrentProductId = exports.getProducts = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

var _functions = require("../../helpers/functions/functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCH_PRODUCTS = 'productDuck/FETCH_PRODUCTS';
var FETCH_PRODUCTS_CATEGORY = 'productDuck/FETCH_PRODUCTS_CATEGORY';
var FETCH_PRODUCTS_CATEGORY_LENGTH = 'productDuck/FETCH_PRODUCTS_CATEGORY_LENGTH';
var FETCH_RECOMMEND_PRODUCTS = 'productDuck/FETCH_RECOMMEND_PRODUCTS';
var FETCH_NEWEST_PRODUCTS = 'productDuck/FETCH_NEWEST_PRODUCTS';
var CURRENT_PRODUCT_ID = 'productDuck/CURRENT_PRODUCT_ID';
var CURRENT_PRODUCT = 'productDuck/CURRENT_PRODUCT';
var FETCH_PRODUCT_RATING = 'productDuck/FETCH_PRODUCT_RATING';
var FETCH_CART_PRODUCTS = 'productDuck/FETCH_CART_PRODUCTS';
var FETCH_VERY_SOLDED_PRODUCTS = 'productDuck/FETCH_VERY_SOLDED_PRODUCTS';
var FETCH_ALL_VERY_SOLDED_PRODUCTS = 'productDuck/FETCH_ALL_VERY_SOLDED_PRODUCTS';
var STEPS_COUNTS = 'productDuck/STEPS_COUNTS';
var COST_ELEMENTS = 'productDuck/COST_ELEMENTS';
var SEARCH_DATA = 'productDuck/SEARCH_DATA';
var MAX_DISCOUNT_DATA = 'productDuck/MAX_DISCOUNT_DATA';
var VIEWED_PRODUCTS = 'productDuck/VIEWED_PRODUCTS';
var VIEWED_PRODUCTS_DATA = 'productDuck/VIEWED_PRODUCTS_DATA';
var getProducts = (0, _redux.createAction)(FETCH_PRODUCTS);
exports.getProducts = getProducts;
var getCurrentProductId = (0, _redux.createAction)(CURRENT_PRODUCT_ID);
exports.getCurrentProductId = getCurrentProductId;
var getCurrentProduct = (0, _redux.createAction)(CURRENT_PRODUCT);
exports.getCurrentProduct = getCurrentProduct;
var getProductsByCategory = (0, _redux.createAction)(FETCH_PRODUCTS_CATEGORY);
exports.getProductsByCategory = getProductsByCategory;
var getStepsCounts = (0, _redux.createAction)(STEPS_COUNTS);
exports.getStepsCounts = getStepsCounts;
var getProductsByCategoryLength = (0, _redux.createAction)(FETCH_PRODUCTS_CATEGORY_LENGTH);
exports.getProductsByCategoryLength = getProductsByCategoryLength;
var getRecommendProducts = (0, _redux.createAction)(FETCH_RECOMMEND_PRODUCTS);
exports.getRecommendProducts = getRecommendProducts;
var getNewestProducts = (0, _redux.createAction)(FETCH_NEWEST_PRODUCTS);
exports.getNewestProducts = getNewestProducts;
var getProductRating = (0, _redux.createAction)(FETCH_PRODUCT_RATING);
exports.getProductRating = getProductRating;
var getCartProducts = (0, _redux.createAction)(FETCH_CART_PRODUCTS);
exports.getCartProducts = getCartProducts;
var getVerySoldedProducts = (0, _redux.createAction)(FETCH_VERY_SOLDED_PRODUCTS);
exports.getVerySoldedProducts = getVerySoldedProducts;
var getAllVerySoldedProducts = (0, _redux.createAction)(FETCH_ALL_VERY_SOLDED_PRODUCTS);
exports.getAllVerySoldedProducts = getAllVerySoldedProducts;
var getSearchData = (0, _redux.createAction)(SEARCH_DATA);
exports.getSearchData = getSearchData;
var getMaxDiscountData = (0, _redux.createAction)(MAX_DISCOUNT_DATA);
exports.getMaxDiscountData = getMaxDiscountData;
var getElementsByCosts = (0, _redux.createAction)(COST_ELEMENTS);
exports.getElementsByCosts = getElementsByCosts;
var changeViewedProducts = (0, _redux.createAction)(VIEWED_PRODUCTS);
exports.changeViewedProducts = changeViewedProducts;
var changeViewedProductsData = (0, _redux.createAction)(VIEWED_PRODUCTS_DATA);
exports.changeViewedProductsData = changeViewedProductsData;

var clearSearchData = function clearSearchData(arr) {
  return function (dispatch) {
    dispatch(getSearchData(arr));
  };
};

exports.clearSearchData = clearSearchData;

var fetchProductsForStartingPage = function fetchProductsForStartingPage(id) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/main/").concat(id)));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getProducts(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from productDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchProductsForStartingPage = fetchProductsForStartingPage;

var fetchProductsByCategory = function fetchProductsByCategory(id, count) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/filter/product/").concat(id)));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(getProductsByCategory(data));
            dispatch(getProductsByCategoryLength(data.length));
            dispatch(getStepsCounts(Math.ceil(data.length / count)));
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t2 = _context2["catch"](0);
            console.log('error from productDuck', _context2.t2);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

exports.fetchProductsByCategory = fetchProductsByCategory;

var fetchProductsByCosts = function fetchProductsByCosts(typeObj, costObj, count) {
  return function _callee3(dispatch) {
    var type, typeVal, data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            type = Object.keys(typeObj)[0];
            typeVal = Object.values(typeObj)[0];
            _context3.prev = 2;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 6;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/cost/?").concat(type, "=").concat(typeVal, "&start=").concat(costObj.start, "&final=").concat(costObj["final"])));

          case 6:
            _context3.t1 = _context3.sent.json();
            _context3.next = 9;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 9:
            data = _context3.sent;
            dispatch(getElementsByCosts(data));
            dispatch(getStepsCounts(Math.ceil(data.length / count)));
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t2 = _context3["catch"](2);
            console.log('error from productDuck', _context3.t2);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 14]]);
  };
};

exports.fetchProductsByCosts = fetchProductsByCosts;

var fetchSearchedData = function fetchSearchedData(str, count) {
  return function _callee4(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.t0 = regeneratorRuntime;
            _context4.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/goods/search/?search=").concat(str)));

          case 4:
            _context4.t1 = _context4.sent.json();
            _context4.next = 7;
            return _context4.t0.awrap.call(_context4.t0, _context4.t1);

          case 7:
            data = _context4.sent;
            dispatch(getSearchData(data));
            dispatch(getStepsCounts(Math.ceil(data.length / count)));
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t2 = _context4["catch"](0);
            console.log('error from productDuck', _context4.t2);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.fetchSearchedData = fetchSearchedData;

var fetchCurrentProduct = function fetchCurrentProduct(id) {
  return function _callee5(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.t0 = regeneratorRuntime;
            _context5.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/product/").concat(id)));

          case 4:
            _context5.t1 = _context5.sent.json();
            _context5.next = 7;
            return _context5.t0.awrap.call(_context5.t0, _context5.t1);

          case 7:
            data = _context5.sent;
            dispatch(getCurrentProduct(data));
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t2 = _context5["catch"](0);
            console.log('error from productDuck', _context5.t2);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchCurrentProduct = fetchCurrentProduct;

var fetchMaxDiscountProduct = function fetchMaxDiscountProduct() {
  return function _callee6(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.t0 = regeneratorRuntime;
            _context6.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/discount")));

          case 4:
            _context6.t1 = _context6.sent.json();
            _context6.next = 7;
            return _context6.t0.awrap.call(_context6.t0, _context6.t1);

          case 7:
            data = _context6.sent;
            dispatch(getMaxDiscountData(data));
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t2 = _context6["catch"](0);
            console.log('error from productDuck', _context6.t2);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchMaxDiscountProduct = fetchMaxDiscountProduct;

var fetchRecomendedProducts = function fetchRecomendedProducts() {
  return function _callee7(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.t0 = regeneratorRuntime;
            _context7.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/recommend")));

          case 4:
            _context7.t1 = _context7.sent.json();
            _context7.next = 7;
            return _context7.t0.awrap.call(_context7.t0, _context7.t1);

          case 7:
            data = _context7.sent;
            dispatch(getRecommendProducts(data));
            _context7.next = 14;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t2 = _context7["catch"](0);
            console.log('error from productDuck', _context7.t2);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchRecomendedProducts = fetchRecomendedProducts;

var changeProductRating = function changeProductRating(productId, rating) {
  return function (dispatch) {
    fetch("".concat(_constants.root, "/rating/addRating/").concat(productId, "/").concat(rating)).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(getProductRating(res));
    })["catch"](function (e) {
      return console.log('error from productDuck', e);
    });
  };
};

exports.changeProductRating = changeProductRating;

var fetchProductsByString = function fetchProductsByString(arr) {
  return function _callee8(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.t0 = regeneratorRuntime;
            _context8.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/list/product/").concat(arr)));

          case 4:
            _context8.t1 = _context8.sent.json();
            _context8.next = 7;
            return _context8.t0.awrap.call(_context8.t0, _context8.t1);

          case 7:
            data = _context8.sent;
            dispatch(getCartProducts(data));
            _context8.next = 14;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t2 = _context8["catch"](0);
            console.log('error from productDuck', _context8.t2);

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchProductsByString = fetchProductsByString;

var fetchViewedProducts = function fetchViewedProducts(arr) {
  return function _callee9(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.t0 = regeneratorRuntime;
            _context9.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/list/product/").concat(arr)));

          case 4:
            _context9.t1 = _context9.sent.json();
            _context9.next = 7;
            return _context9.t0.awrap.call(_context9.t0, _context9.t1);

          case 7:
            data = _context9.sent;
            dispatch(changeViewedProductsData(data));
            _context9.next = 14;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t2 = _context9["catch"](0);
            console.log('error from productDuck', _context9.t2);

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchViewedProducts = fetchViewedProducts;

var fetchNewestProducts = function fetchNewestProducts(arr) {
  return function (dispatch) {
    fetch("".concat(_constants.root, "/list/product/").concat(arr)).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(getNewestProducts(res));
    })["catch"](function (e) {
      return console.log('error from productDuck', e);
    });
  };
};

exports.fetchNewestProducts = fetchNewestProducts;

var fetchVerySoldedProducts = function fetchVerySoldedProducts() {
  return function _callee10(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.t0 = regeneratorRuntime;
            _context10.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/package/sold")));

          case 4:
            _context10.t1 = _context10.sent.json();
            _context10.next = 7;
            return _context10.t0.awrap.call(_context10.t0, _context10.t1);

          case 7:
            data = _context10.sent;
            dispatch(getVerySoldedProducts(data));
            _context10.next = 14;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t2 = _context10["catch"](0);
            console.log('error from productDuck', _context10.t2);

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchVerySoldedProducts = fetchVerySoldedProducts;

var currentProduct = function currentProduct(id) {
  return function (dispatch) {
    dispatch(getCurrentProductId(id));
  };
};

exports.currentProduct = currentProduct;

var getCartProductsItems = function getCartProductsItems(obj) {
  return function (dispatch) {
    dispatch(getCartProducts(obj));
  };
};

exports.getCartProductsItems = getCartProductsItems;

var changeStepsCounts = function changeStepsCounts(num) {
  return function (dispatch) {
    dispatch(getStepsCounts(num));
  };
};

exports.changeStepsCounts = changeStepsCounts;

var clearProductsByCosts = function clearProductsByCosts() {
  return function (dispatch) {
    dispatch(getElementsByCosts([]));
  };
};

exports.clearProductsByCosts = clearProductsByCosts;

var getViewedProducts = function getViewedProducts(id) {
  return function (dispatch) {
    dispatch(changeViewedProducts(id));
  };
};

exports.getViewedProducts = getViewedProducts;
var initialStateApp = {
  products: [],
  //
  productsByCategory: [],
  //
  productsByCategoryLength: null,
  //
  stepCounts: null,
  recommend: [],
  costItems: [],
  searchData: [],
  maxDiscountData: [],
  currentProductId: null,
  cartProducts: [],
  verySolded: [],
  allVerySolded: [],
  currentProduct: [],
  viewedProducts: [],
  viewedProductsData: [],
  rating: null
};
exports.initialStateApp = initialStateApp;

function ProductDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_PRODUCTS:
      return _objectSpread({}, state, {
        products: action.payload
      });

    case FETCH_PRODUCTS_CATEGORY:
      return _objectSpread({}, state, {
        productsByCategory: action.payload
      });

    case FETCH_PRODUCTS_CATEGORY_LENGTH:
      return _objectSpread({}, state, {
        productsByCategoryLength: action.payload
      });

    case FETCH_RECOMMEND_PRODUCTS:
      return _objectSpread({}, state, {
        recommend: action.payload
      });

    case CURRENT_PRODUCT_ID:
      return _objectSpread({}, state, {
        currentProductId: action.payload
      });

    case CURRENT_PRODUCT:
      return _objectSpread({}, state, {
        currentProduct: action.payload
      });

    case COST_ELEMENTS:
      return _objectSpread({}, state, {
        costItems: action.payload
      });

    case STEPS_COUNTS:
      return _objectSpread({}, state, {
        stepCounts: action.payload
      });

    case FETCH_PRODUCT_RATING:
      return _objectSpread({}, state, {
        rating: action.payload
      });

    case FETCH_CART_PRODUCTS:
      return _objectSpread({}, state, {
        cartProducts: action.payload
      });

    case FETCH_VERY_SOLDED_PRODUCTS:
      return _objectSpread({}, state, {
        verySolded: action.payload
      });

    case FETCH_ALL_VERY_SOLDED_PRODUCTS:
      return _objectSpread({}, state, {
        allVerySolded: action.payload
      });

    case SEARCH_DATA:
      return _objectSpread({}, state, {
        searchData: action.payload
      });

    case MAX_DISCOUNT_DATA:
      return _objectSpread({}, state, {
        maxDiscountData: action.payload
      });

    case VIEWED_PRODUCTS:
      if (state.viewedProducts.length === 0) {
        return _objectSpread({}, state, {
          viewedProducts: [action.payload]
        });
      } else {
        if ((0, _functions.numInArray)(state.viewedProducts, action.payload)) {
          return _objectSpread({}, state, {
            viewedProducts: [].concat(_toConsumableArray(state.viewedProducts), [action.payload])
          });
        } else {
          return state;
        }
      }

      ;

    case VIEWED_PRODUCTS_DATA:
      return _objectSpread({}, state, {
        viewedProductsData: action.payload
      });

    default:
      return state;
  }
}

var _default = ProductDuck;
exports["default"] = _default;