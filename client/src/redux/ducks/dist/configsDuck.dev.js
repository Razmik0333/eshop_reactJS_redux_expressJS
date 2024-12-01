"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchLanguages = exports.fetchLanguageData = exports.changeCurrencies = exports.changeLanguages = exports.changeIsSmallSize = exports.showSubCategoriesSmallSize = exports.getSubCategory = exports.getSubCategoryId = exports.changeMostestIndex = exports.changeLanguage = exports.changeCurrency = exports.getIdProductsFromStartingPage = exports.getHotDealsTimerSecond = exports.getNavigationBurgerState = exports.getViewedProductId = exports.getPopupItemId = exports.changePopupHotDeals = exports.changePopup = exports.getReviewShow = exports.changeModal = exports.clearCostValues = exports.changeCosts = exports.changeCountItemsOfPage = exports.changeCountElements = exports.changeSortType = exports.getBestSellerProductId = exports.getSimilarProductId = exports.getHotDealsId = exports.changeShowType = exports.isSmallSize = exports.showSubCategoriesForSmallSize = exports.changeNavigetionBurgerIsActive = exports.changeSubCategory = exports.changeSubCategoryId = exports.changeBestSellerProductId = exports.changeSimilarProductId = exports.changeReviewShow = exports.changeViewedProductId = exports.changeCurrentMostestIndex = exports.changeCurrentLanguageData = exports.changeCurrentLanguage = exports.changeCurrentCurrency = exports.changeHotDealsTimerSecond = exports.changeIdProductsFromStartingPage = exports.changeHotDealsId = exports.changePopupItemId = exports.getCurrencies = exports.getLanguages = exports.getPopupHotDealsOpenClose = exports.getPopupOpenClose = exports.getModalOpenClose = exports.getCostsValues = exports.getCountItemsOfPage = exports.getCountElements = exports.getSortType = exports.getShowType = void 0;

var _redux = require("../../helpers/redux");

var _constants = require("../../helpers/constants/constants");

var _functions = require("../../helpers/functions/functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CHANGE_SHOW_TYPE = 'configsDuck/CHANGE_SHOW_TYPE';
var CHANGE_SORT_TYPE = 'configsDuck/CHANGE_SORT_TYPE';
var COUNT_ELEMENTS = 'configsDuck/COUNT_ELEMENTS';
var COUNT_ELEMENTS_OF_PAGE = 'configsDuck/COUNT_ELEMENTS_OF_PAGE';
var COST_VALUES = 'configsDuck/COST_VALUES';
var MODAL_OPEN_CLOSE = 'configsDuck/MODAL_OPEN_CLOSE';
var NAVIGATION_BURGER_IS_ACTIVE = 'configsDuck/NAVIGATION_BURGER_IS_ACTIVE';
var POPUP_IS_SHOW = 'configsDuck/POPUP_IS_SHOW';
var POPUP_HOT_DEALS_IS_SHOW = 'configsDuck/POPUP_HOT_DEALS_IS_SHOW';
var POPUP_ITEM_ID = 'configsDuck/POPUP_ITEM_ID';
var HOT_DEALS_ID = 'configsDuck/HOT_DEALS_ID';
var HOT_DEALS_TIMER_SECONDS = 'configsDuck/HOT_DEALS_TIMER_SECONDS';
var PRODUCTS_FROM_STARTING_PAGE_ID = 'configsDuck/PRODUCTS_FROM_STARTING_PAGE_ID';
var CURRENT_CURRENCY = 'configsDuck/CURRENT_CURRENCY';
var CURRENT_LANGUAGE = 'configsDuck/CURRENT_LANGUAGE';
var CURRENT_LANGUAGE_DATA = 'configsDuck/CURRENT_LANGUAGE_DATA';
var LANGUAGES = 'configsDuck/LANGUAGES';
var CURRENCIES = 'configsDuck/CURRENCIES';
var MOSTEST_OPTIONS_INDEX = 'configsDuck/MOSTEST_OPTIONS_INDEX';
var VIEWED_PRODUCTS_BLOCK_ID = 'configsDuck/VIEWED_PRODUCTS_BLOCK_ID';
var REVIEW_SHOW = 'configsDuck/REVIEW_SHOW';
var SIMILAR_PRODUCT_ID = 'configsDuck/SIMILAR_PRODUCT_ID';
var BEST_SELLER_PRODUCT_ID = 'configsDuck/BEST_SELLER_PRODUCT_ID';
var SUB_CAT_ID = 'configsDuck/SUB_CAT_ID';
var SUB_CAT = 'configsDuck/SUB_CAT';
var IS_SMALL_SIZE = 'configsDuck/IS_SMALL_SIZE';
var SUB_CAT_SMALL_SIZE = 'configsDuck/SUB_CAT_SMALL_SIZE';
var getShowType = (0, _redux.createAction)(CHANGE_SHOW_TYPE);
exports.getShowType = getShowType;
var getSortType = (0, _redux.createAction)(CHANGE_SORT_TYPE);
exports.getSortType = getSortType;
var getCountElements = (0, _redux.createAction)(COUNT_ELEMENTS);
exports.getCountElements = getCountElements;
var getCountItemsOfPage = (0, _redux.createAction)(COUNT_ELEMENTS_OF_PAGE);
exports.getCountItemsOfPage = getCountItemsOfPage;
var getCostsValues = (0, _redux.createAction)(COST_VALUES);
exports.getCostsValues = getCostsValues;
var getModalOpenClose = (0, _redux.createAction)(MODAL_OPEN_CLOSE);
exports.getModalOpenClose = getModalOpenClose;
var getPopupOpenClose = (0, _redux.createAction)(POPUP_IS_SHOW);
exports.getPopupOpenClose = getPopupOpenClose;
var getPopupHotDealsOpenClose = (0, _redux.createAction)(POPUP_HOT_DEALS_IS_SHOW);
exports.getPopupHotDealsOpenClose = getPopupHotDealsOpenClose;
var getLanguages = (0, _redux.createAction)(LANGUAGES);
exports.getLanguages = getLanguages;
var getCurrencies = (0, _redux.createAction)(CURRENCIES);
exports.getCurrencies = getCurrencies;
var changePopupItemId = (0, _redux.createAction)(POPUP_ITEM_ID);
exports.changePopupItemId = changePopupItemId;
var changeHotDealsId = (0, _redux.createAction)(HOT_DEALS_ID);
exports.changeHotDealsId = changeHotDealsId;
var changeIdProductsFromStartingPage = (0, _redux.createAction)(PRODUCTS_FROM_STARTING_PAGE_ID);
exports.changeIdProductsFromStartingPage = changeIdProductsFromStartingPage;
var changeHotDealsTimerSecond = (0, _redux.createAction)(HOT_DEALS_TIMER_SECONDS);
exports.changeHotDealsTimerSecond = changeHotDealsTimerSecond;
var changeCurrentCurrency = (0, _redux.createAction)(CURRENT_CURRENCY);
exports.changeCurrentCurrency = changeCurrentCurrency;
var changeCurrentLanguage = (0, _redux.createAction)(CURRENT_LANGUAGE);
exports.changeCurrentLanguage = changeCurrentLanguage;
var changeCurrentLanguageData = (0, _redux.createAction)(CURRENT_LANGUAGE_DATA);
exports.changeCurrentLanguageData = changeCurrentLanguageData;
var changeCurrentMostestIndex = (0, _redux.createAction)(MOSTEST_OPTIONS_INDEX);
exports.changeCurrentMostestIndex = changeCurrentMostestIndex;
var changeViewedProductId = (0, _redux.createAction)(VIEWED_PRODUCTS_BLOCK_ID);
exports.changeViewedProductId = changeViewedProductId;
var changeReviewShow = (0, _redux.createAction)(REVIEW_SHOW);
exports.changeReviewShow = changeReviewShow;
var changeSimilarProductId = (0, _redux.createAction)(SIMILAR_PRODUCT_ID);
exports.changeSimilarProductId = changeSimilarProductId;
var changeBestSellerProductId = (0, _redux.createAction)(BEST_SELLER_PRODUCT_ID);
exports.changeBestSellerProductId = changeBestSellerProductId;
var changeSubCategoryId = (0, _redux.createAction)(SUB_CAT_ID);
exports.changeSubCategoryId = changeSubCategoryId;
var changeSubCategory = (0, _redux.createAction)(SUB_CAT);
exports.changeSubCategory = changeSubCategory;
var changeNavigetionBurgerIsActive = (0, _redux.createAction)(NAVIGATION_BURGER_IS_ACTIVE);
exports.changeNavigetionBurgerIsActive = changeNavigetionBurgerIsActive;
var showSubCategoriesForSmallSize = (0, _redux.createAction)(SUB_CAT_SMALL_SIZE);
exports.showSubCategoriesForSmallSize = showSubCategoriesForSmallSize;
var isSmallSize = (0, _redux.createAction)(IS_SMALL_SIZE);
exports.isSmallSize = isSmallSize;

var changeShowType = function changeShowType(str) {
  return function (dispatch) {
    dispatch(getShowType(str));
  };
};

exports.changeShowType = changeShowType;

var getHotDealsId = function getHotDealsId(id) {
  return function (dispatch) {
    dispatch(changeHotDealsId(id));
  };
};

exports.getHotDealsId = getHotDealsId;

var getSimilarProductId = function getSimilarProductId(id) {
  return function (dispatch) {
    dispatch(changeSimilarProductId(id));
  };
};

exports.getSimilarProductId = getSimilarProductId;

var getBestSellerProductId = function getBestSellerProductId(id) {
  return function (dispatch) {
    dispatch(changeBestSellerProductId(id));
  };
};

exports.getBestSellerProductId = getBestSellerProductId;

var changeSortType = function changeSortType(obj) {
  return function (dispatch) {
    dispatch(getSortType(obj));
  };
};

exports.changeSortType = changeSortType;

var changeCountElements = function changeCountElements(num) {
  return function (dispatch) {
    dispatch(getCountElements(num));
  };
};

exports.changeCountElements = changeCountElements;

var changeCountItemsOfPage = function changeCountItemsOfPage(num) {
  return function (dispatch) {
    dispatch(getCountItemsOfPage(num));
  };
};

exports.changeCountItemsOfPage = changeCountItemsOfPage;

var changeCosts = function changeCosts(num) {
  return function (dispatch) {
    dispatch(getCostsValues(num));
  };
};

exports.changeCosts = changeCosts;

var clearCostValues = function clearCostValues() {
  return function (dispatch) {
    dispatch(getCostsValues({}));
  };
};

exports.clearCostValues = clearCostValues;

var changeModal = function changeModal(bool) {
  return function (dispatch) {
    dispatch(getModalOpenClose(bool));
  };
};

exports.changeModal = changeModal;

var getReviewShow = function getReviewShow(bool) {
  return function (dispatch) {
    dispatch(changeReviewShow(bool));
  };
};

exports.getReviewShow = getReviewShow;

var changePopup = function changePopup(bool) {
  return function (dispatch) {
    dispatch(getPopupOpenClose(bool));
  };
};

exports.changePopup = changePopup;

var changePopupHotDeals = function changePopupHotDeals(bool) {
  return function (dispatch) {
    dispatch(getPopupHotDealsOpenClose(bool));
  };
};

exports.changePopupHotDeals = changePopupHotDeals;

var getPopupItemId = function getPopupItemId(id) {
  return function (dispatch) {
    dispatch(changePopupItemId(id));
  };
};

exports.getPopupItemId = getPopupItemId;

var getViewedProductId = function getViewedProductId(id) {
  return function (dispatch) {
    dispatch(changeViewedProductId(id));
  };
};

exports.getViewedProductId = getViewedProductId;

var getNavigationBurgerState = function getNavigationBurgerState(bool) {
  return function (dispatch) {
    dispatch(changeNavigetionBurgerIsActive(bool));
  };
};

exports.getNavigationBurgerState = getNavigationBurgerState;

var getHotDealsTimerSecond = function getHotDealsTimerSecond(second) {
  return function (dispatch) {
    dispatch(changeHotDealsTimerSecond(second));
  };
};

exports.getHotDealsTimerSecond = getHotDealsTimerSecond;

var getIdProductsFromStartingPage = function getIdProductsFromStartingPage(id) {
  return function (dispatch) {
    dispatch(changeIdProductsFromStartingPage(id));
  };
};

exports.getIdProductsFromStartingPage = getIdProductsFromStartingPage;

var changeCurrency = function changeCurrency(val) {
  return function (dispatch) {
    dispatch(changeCurrentCurrency(val));
  };
};

exports.changeCurrency = changeCurrency;

var changeLanguage = function changeLanguage(lang) {
  return function (dispatch) {
    dispatch(changeCurrentLanguage(lang));
  };
};

exports.changeLanguage = changeLanguage;

var changeMostestIndex = function changeMostestIndex(id) {
  return function (dispatch) {
    dispatch(changeCurrentMostestIndex(id));
  };
};

exports.changeMostestIndex = changeMostestIndex;

var getSubCategoryId = function getSubCategoryId(id) {
  return function (dispatch) {
    dispatch(changeSubCategoryId(id));
  };
};

exports.getSubCategoryId = getSubCategoryId;

var getSubCategory = function getSubCategory(id) {
  return function (dispatch) {
    dispatch(changeSubCategory(id));
  };
};

exports.getSubCategory = getSubCategory;

var showSubCategoriesSmallSize = function showSubCategoriesSmallSize(bool) {
  return function (dispatch) {
    dispatch(showSubCategoriesForSmallSize(bool));
  };
};

exports.showSubCategoriesSmallSize = showSubCategoriesSmallSize;

var changeIsSmallSize = function changeIsSmallSize(bool) {
  return function (dispatch) {
    dispatch(isSmallSize(bool));
  };
};

exports.changeIsSmallSize = changeIsSmallSize;

var changeLanguages = function changeLanguages() {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = regeneratorRuntime;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/languages")));

          case 4:
            _context.t1 = _context.sent.json();
            _context.next = 7;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 7:
            data = _context.sent;
            dispatch(getLanguages(data));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](0);
            console.log('error from configsDuck', _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.changeLanguages = changeLanguages;

var changeCurrencies = function changeCurrencies() {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = regeneratorRuntime;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/currency")));

          case 4:
            _context2.t1 = _context2.sent.json();
            _context2.next = 7;
            return _context2.t0.awrap.call(_context2.t0, _context2.t1);

          case 7:
            data = _context2.sent;
            dispatch(getCurrencies(data));
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t2 = _context2["catch"](0);
            console.log('error from configsDuck', _context2.t2);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.changeCurrencies = changeCurrencies;

var fetchLanguageData = function fetchLanguageData(lang) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = regeneratorRuntime;
            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch("".concat(_constants.root, "/api/language/").concat(lang)));

          case 4:
            _context3.t1 = _context3.sent.json();
            _context3.next = 7;
            return _context3.t0.awrap.call(_context3.t0, _context3.t1);

          case 7:
            data = _context3.sent;
            dispatch(changeCurrentLanguageData(data));
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t2 = _context3["catch"](0);
            console.log('error from configsDuck', _context3.t2);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.fetchLanguageData = fetchLanguageData;

var fetchLanguages = function fetchLanguages() {
  return function (dispatch) {
    fetch("".concat(_constants.root, "/languages")).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(changeCurrentLanguageData(res));
    })["catch"](function (e) {
      return console.log('error from configsDuck', e);
    });
  };
};

exports.fetchLanguages = fetchLanguages;
var initialStateConfigs = {
  showType: 'grid',
  sortType: {
    type: 'date',
    time: 'highest'
  },
  countItems: 6,
  countItemsOfPage: 6,
  costInterval: {},
  modalIsClose: false,
  popupIsShow: false,
  popupItemId: null,
  hotDealsId: 0,
  hotDealsPopup: 0,
  currentCurrency: 'AMD',
  currentLanguage: 'am',
  languages: [],
  currencies: [],
  currentLanguageData: [],
  idProductsFromStart: 1,
  hotDealsTimerSeconds: 3 * 24 * 60 * 60,
  mostestIndex: "0",
  viewedProductsBlockId: 1,
  similarCirclId: 1,
  bestSellerCircleId: 1,
  reviewShow: false,
  subCatId: "1",
  subCat: "1",
  navigetionBurgerIsActive: false,
  subCategoriesForSmallSize: false,
  isSmallSize: false
};

var ConfigsDuck = function ConfigsDuck() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateConfigs;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CHANGE_SHOW_TYPE:
      return _objectSpread({}, state, {
        showType: action.payload
      });

    case HOT_DEALS_ID:
      return _objectSpread({}, state, {
        hotDealsId: action.payload
      });

    case CHANGE_SORT_TYPE:
      return _objectSpread({}, state, {
        sortType: action.payload
      });

    case COUNT_ELEMENTS:
      return _objectSpread({}, state, {
        countItems: action.payload
      });

    case COUNT_ELEMENTS_OF_PAGE:
      return _objectSpread({}, state, {
        countItemsOfPage: action.payload
      });

    case COST_VALUES:
      if ((0, _functions.checkEmptyObject)(action.payload)) {
        return _objectSpread({}, state, {
          costInterval: {}
        });
      } else {
        return _objectSpread({}, state, {
          costInterval: _objectSpread({}, state.costInterval, {}, action.payload)
        });
      }

    case MODAL_OPEN_CLOSE:
      return _objectSpread({}, state, {
        modalIsClose: action.payload
      });

    case POPUP_IS_SHOW:
      return _objectSpread({}, state, {
        popupIsShow: action.payload
      });

    case POPUP_HOT_DEALS_IS_SHOW:
      return _objectSpread({}, state, {
        hotDealsPopup: action.payload
      });

    case POPUP_ITEM_ID:
      return _objectSpread({}, state, {
        popupItemId: action.payload
      });

    case HOT_DEALS_TIMER_SECONDS:
      return _objectSpread({}, state, {
        hotDealsTimerSeconds: action.payload
      });

    case PRODUCTS_FROM_STARTING_PAGE_ID:
      return _objectSpread({}, state, {
        idProductsFromStart: action.payload
      });

    case CURRENT_CURRENCY:
      return _objectSpread({}, state, {
        currentCurrency: action.payload
      });

    case CURRENT_LANGUAGE:
      return _objectSpread({}, state, {
        currentLanguage: action.payload
      });

    case CURRENT_LANGUAGE_DATA:
      return _objectSpread({}, state, {
        currentLanguageData: action.payload
      });

    case LANGUAGES:
      return _objectSpread({}, state, {
        languages: action.payload
      });

    case CURRENCIES:
      return _objectSpread({}, state, {
        currencies: action.payload
      });

    case MOSTEST_OPTIONS_INDEX:
      return _objectSpread({}, state, {
        mostestIndex: action.payload
      });

    case VIEWED_PRODUCTS_BLOCK_ID:
      return _objectSpread({}, state, {
        viewedProductsBlockId: action.payload
      });

    case REVIEW_SHOW:
      return _objectSpread({}, state, {
        reviewShow: action.payload
      });

    case SIMILAR_PRODUCT_ID:
      return _objectSpread({}, state, {
        similarCirclId: action.payload
      });

    case BEST_SELLER_PRODUCT_ID:
      return _objectSpread({}, state, {
        bestSellerCircleId: action.payload
      });

    case SUB_CAT_ID:
      return _objectSpread({}, state, {
        subCatId: action.payload
      });

    case SUB_CAT:
      return _objectSpread({}, state, {
        subCat: action.payload
      });

    case IS_SMALL_SIZE:
      return _objectSpread({}, state, {
        isSmallSize: action.payload
      });

    case SUB_CAT_SMALL_SIZE:
      return _objectSpread({}, state, {
        subCategoriesForSmallSize: action.payload
      });

    default:
      return state;
  }
};

var _default = ConfigsDuck;
exports["default"] = _default;