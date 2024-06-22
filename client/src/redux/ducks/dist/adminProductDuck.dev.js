"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchProductsForDelete = exports.fetchProductItem = exports.deleteCacheFiles = exports.fetchProductsList = exports.getGalleryAdd = exports.saveChangedProducts = exports.resetTimeObject = exports.changeCurrentProduct = exports.createMonth = exports.createYear = exports.resetIsDeleted = exports.currentProductClear = exports.currentProductID = exports.currentCartItem = exports.saveChanges = exports.changeGallery = exports.clearTimeObject = exports.getTimeObject = exports.getProductForDelete = exports.getProductForUpdate = exports.getProductIdForUpdate = exports.getProductsList = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PRODUCTS_LIST = 'adminProductDuck/PRODUCTS_LIST';
var PRODUCTS_FOR_UPDATE_ID = 'adminProductDuck/PRODUCTS_FOR_UPDATE_ID';
var PRODUCTS_FOR_UPDATE = 'adminProductDuck/PRODUCTS_FOR_UPDATE';
var PRODUCT_FOR_DELETE = 'adminProductDuck/PRODUCT_FOR_DELETE';
var TIME_OBJECT = 'adminProductDuck/TIME_OBJECT';
var CLEAR_TIME_OBJECT = 'adminProductDuck/CLEAR_TIME_OBJECT';
var IS_SAVED = 'adminProductDuck/IS_SAVED';
var GALLERY_IS_ADD = 'adminProductDuck/GALLERY_IS_ADD';
var getProductsList = (0, _redux.createAction)(PRODUCTS_LIST);
exports.getProductsList = getProductsList;
var getProductIdForUpdate = (0, _redux.createAction)(PRODUCTS_FOR_UPDATE_ID);
exports.getProductIdForUpdate = getProductIdForUpdate;
var getProductForUpdate = (0, _redux.createAction)(PRODUCTS_FOR_UPDATE);
exports.getProductForUpdate = getProductForUpdate;
var getProductForDelete = (0, _redux.createAction)(PRODUCT_FOR_DELETE);
exports.getProductForDelete = getProductForDelete;
var getTimeObject = (0, _redux.createAction)(TIME_OBJECT);
exports.getTimeObject = getTimeObject;
var clearTimeObject = (0, _redux.createAction)(CLEAR_TIME_OBJECT);
exports.clearTimeObject = clearTimeObject;
var changeGallery = (0, _redux.createAction)(GALLERY_IS_ADD);
exports.changeGallery = changeGallery;
var saveChanges = (0, _redux.createAction)(IS_SAVED);
exports.saveChanges = saveChanges;
var initialStateApp = {
  productsList: [],
  currentProductId: null,
  currentProduct: null,
  isDeleted: false,
  timeObj: {},
  isSaved: '',
  galleryIsAdd: null
};

var currentCartItem = function currentCartItem() {
  return function (dispatch) {
    dispatch(getProductsList());
  };
};

exports.currentCartItem = currentCartItem;

var currentProductID = function currentProductID(id) {
  return function (dispatch) {
    console.log(id);
    dispatch(getProductIdForUpdate(id));
  };
};

exports.currentProductID = currentProductID;

var currentProductClear = function currentProductClear() {
  return function (dispatch) {
    dispatch(getProductForUpdate(null));
    dispatch(getProductIdForUpdate(null));
  };
};

exports.currentProductClear = currentProductClear;

var resetIsDeleted = function resetIsDeleted(bool) {
  return function (dispatch) {
    dispatch(getProductForDelete(bool));
  };
};

exports.resetIsDeleted = resetIsDeleted;

var createYear = function createYear(obj) {
  return function (dispatch) {
    dispatch(getTimeObject(obj));
  };
};

exports.createYear = createYear;

var createMonth = function createMonth(obj) {
  return function (dispatch) {
    dispatch(getTimeObject(obj));
  };
};

exports.createMonth = createMonth;

var changeCurrentProduct = function changeCurrentProduct(obj) {
  return function (dispatch) {
    dispatch(getProductForUpdate(obj));
  };
};

exports.changeCurrentProduct = changeCurrentProduct;

var resetTimeObject = function resetTimeObject() {
  return function (dispatch) {
    dispatch(clearTimeObject());
  };
};

exports.resetTimeObject = resetTimeObject;

var saveChangedProducts = function saveChangedProducts(str) {
  return function (dispatch) {
    dispatch(saveChanges(str));
  };
};

exports.saveChangedProducts = saveChangedProducts;

var getGalleryAdd = function getGalleryAdd(bool) {
  return function (dispatch) {
    dispatch(changeGallery(bool));
  };
};

exports.getGalleryAdd = getGalleryAdd;

var fetchProductsList = function fetchProductsList() {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/product/list")));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getProductsList(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from AdminProductDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchProductsList = fetchProductsList;

var deleteCacheFiles = function deleteCacheFiles() {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/products/save")));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(saveChangedProducts(data));
            console.log("🚀 ~ deleteCacheFiles ~ data:", data);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t2 = _context2["catch"](0);
            console.log('error from AdminProductDuck', _context2.t2);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.deleteCacheFiles = deleteCacheFiles;

var fetchProductItem = function fetchProductItem(id) {
  return function (dispatch) {
    fetch("".concat(_constants.root, "/api/admin/product/").concat(id)).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(getProductForUpdate(res));
    })["catch"](function (e) {
      return console.log('error from AdminProductDuck', e);
    });
  };
}; // export const fetchProductsForUpdate = (product_id) => async(dispatch) => {
//   try {
//     const data = await(await fetch(`${root}/api/admin/product/update`,{
//       method:"PUT",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         product_id
//       })
//      })).json();
//      dispatch(getProductForUpdate(data));
//   } catch (e) {
//     console.log('error from AdminProductDuck', e)
//   }   
// };


exports.fetchProductItem = fetchProductItem;

var fetchProductsForDelete = function fetchProductsForDelete(product_id) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/admin/product/delete"), {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                product_id: product_id
              })
            }));

          case 4:
            _context3.t1 = _context3.sent.json();
            _context3.next = 7;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 7:
            data = _context3.sent;
            dispatch(getProductsList(data));
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t2 = _context3["catch"](0);
            console.log('error from AdminProductDuck', _context3.t2);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchProductsForDelete = fetchProductsForDelete;

var AdminProductDuck = function AdminProductDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateApp;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case PRODUCTS_LIST:
      return _objectSpread({}, state, {
        productsList: action.payload
      });

    case PRODUCTS_FOR_UPDATE_ID:
      return _objectSpread({}, state, {
        currentProductId: action.payload
      });

    case PRODUCTS_FOR_UPDATE:
      return _objectSpread({}, state, {
        currentProduct: action.payload
      });

    case PRODUCT_FOR_DELETE:
      return _objectSpread({}, state, {
        isDeleted: action.payload
      });

    case TIME_OBJECT:
      return _objectSpread({}, state, {
        timeObj: _objectSpread({}, state.timeObj, {}, action.payload)
      });

    case CLEAR_TIME_OBJECT:
      return _objectSpread({}, state, {
        timeObj: {}
      });

    case IS_SAVED:
      return _objectSpread({}, state, {
        isSaved: action.payload
      });

    case GALLERY_IS_ADD:
      return _objectSpread({}, state, {
        galleryIsAdd: action.payload
      });

    default:
      return state;
  }
};

var _default = AdminProductDuck;
exports["default"] = _default;