import { createAction } from '../../helpers/redux';
import { root } from '../../helpers/constants/constants';
import { checkEmptyObject } from '../../helpers/functions/functions';
const CHANGE_SHOW_TYPE = 'configsDuck/CHANGE_SHOW_TYPE';
const CHANGE_SORT_TYPE = 'configsDuck/CHANGE_SORT_TYPE';
const COUNT_ELEMENTS = 'configsDuck/COUNT_ELEMENTS';
const COUNT_ELEMENTS_OF_PAGE = 'configsDuck/COUNT_ELEMENTS_OF_PAGE';
const COST_VALUES = 'configsDuck/COST_VALUES';
const MODAL_OPEN_CLOSE = 'configsDuck/MODAL_OPEN_CLOSE';
const POPUP_IS_SHOW = 'configsDuck/POPUP_IS_SHOW';
const POPUP_HOT_DEALS_IS_SHOW = 'configsDuck/POPUP_HOT_DEALS_IS_SHOW';
const POPUP_ITEM_ID = 'configsDuck/POPUP_ITEM_ID';
const HOT_DEALS_ID = 'configsDuck/HOT_DEALS_ID';
const HOT_DEALS_TIMER_SECONDS = 'configsDuck/HOT_DEALS_TIMER_SECONDS';
const PRODUCTS_FROM_STARTING_PAGE_ID = 'configsDuck/PRODUCTS_FROM_STARTING_PAGE_ID';
const CURRENT_CURRENCY = 'configsDuck/CURRENT_CURRENCY';
const CURRENT_LANGUAGE = 'configsDuck/CURRENT_LANGUAGE';
const CURRENT_LANGUAGE_DATA = 'configsDuck/CURRENT_LANGUAGE_DATA';
const LANGUAGES = 'configsDuck/LANGUAGES';
const CURRENCIES = 'configsDuck/CURRENCIES';
const MOSTEST_OPTIONS_INDEX = 'configsDuck/MOSTEST_OPTIONS_INDEX';
const VIEWED_PRODUCT_ID = 'configsDuck/VIEWED_PRODUCT_ID'
const REVIEW_SHOW = 'configsDuck/REVIEW_SHOW'
const SIMILAR_PRODUCT_ID = 'configsDuck/SIMILAR_PRODUCT_ID'
const BEST_SELLER_PRODUCT_ID = 'configsDuck/BEST_SELLER_PRODUCT_ID'

export const getShowType = createAction(CHANGE_SHOW_TYPE);
export const getSortType = createAction(CHANGE_SORT_TYPE);
export const getCountElements = createAction(COUNT_ELEMENTS);
export const getCountItemsOfPage = createAction(COUNT_ELEMENTS_OF_PAGE);
export const getCostsValues = createAction(COST_VALUES);
export const getModalOpenClose = createAction(MODAL_OPEN_CLOSE);
export const getPopupOpenClose = createAction(POPUP_IS_SHOW);
export const getPopupHotDealsOpenClose = createAction(POPUP_HOT_DEALS_IS_SHOW);
export const getLanguages = createAction(LANGUAGES);
export const getCurrencies = createAction(CURRENCIES);
export const changePopupItemId = createAction(POPUP_ITEM_ID);
export const changeHotDealsId = createAction(HOT_DEALS_ID);
export const changeIdProductsFromStartingPage = createAction(PRODUCTS_FROM_STARTING_PAGE_ID);
export const changeHotDealsTimerSecond = createAction(HOT_DEALS_TIMER_SECONDS);
export const changeCurrentCurrency = createAction(CURRENT_CURRENCY);
export const changeCurrentLanguage = createAction(CURRENT_LANGUAGE);
export const changeCurrentLanguageData = createAction(CURRENT_LANGUAGE_DATA);
export const changeCurrentMostestIndex = createAction(MOSTEST_OPTIONS_INDEX)
export const changeViewedProductId = createAction(VIEWED_PRODUCT_ID)
export const changeReviewShow = createAction(REVIEW_SHOW)
export const changeSimilarProductId = createAction(SIMILAR_PRODUCT_ID)
export const changeBestSellerProductId = createAction(BEST_SELLER_PRODUCT_ID)


export const changeShowType = (str) => (dispatch) => {
  dispatch(getShowType(str));
};
export const getHotDealsId = (id) => (dispatch) => {
  dispatch(changeHotDealsId(id));
};
export const getSimilarProductId = (id) => (dispatch) => {
  dispatch(changeSimilarProductId(id));
};
export const getBestSellerProductId = (id) => (dispatch) => {
  dispatch(changeBestSellerProductId(id));
};
export const changeSortType = (obj) => (dispatch) => {
  dispatch(getSortType(obj));
};
export const changeCountElements = (num) => (dispatch) => {
  dispatch(getCountElements(num));
};
export const changeCountItemsOfPage = (num) => (dispatch) => {
  dispatch(getCountItemsOfPage(num));
};
export const changeCosts = (num) => (dispatch) => {
  dispatch(getCostsValues(num));
};
export const clearCostValues = () => (dispatch) => {
  dispatch(getCostsValues({}));
};
export const changeModal = (bool) => (dispatch) => {
  dispatch(getModalOpenClose(bool));
};
export const getReviewShow = (bool) => (dispatch) => {
  dispatch(changeReviewShow(bool));
};
export const changePopup = (bool) => (dispatch) => {
  dispatch(getPopupOpenClose(bool));
};
export const changePopupHotDeals = (bool) => (dispatch) => {
  dispatch(getPopupHotDealsOpenClose(bool));
};
export const getPopupItemId = (id) => (dispatch) => {
  dispatch(changePopupItemId(id));
};
export const getViewedProductId = (id) => (dispatch) => {
  dispatch(changeViewedProductId(id));
};



export const getHotDealsTimerSecond = (second) => (dispatch) => {
  dispatch(changeHotDealsTimerSecond(second));
};
export const getIdProductsFromStartingPage = (id) => (dispatch) => {
  dispatch(changeIdProductsFromStartingPage(id));
};
export const changeCurrency = (val) => (dispatch) => {
  dispatch(changeCurrentCurrency(val));
};
export const changeLanguage = (lang) => (dispatch) => {
  dispatch(changeCurrentLanguage(lang));
};
export const changeMostestIndex = (id) => (dispatch) => {
  dispatch(changeCurrentMostestIndex(id));
};
export const changeLanguages = () => async(dispatch) => {
  try {
    const data = await (await fetch(`${root}/api/languages`)).json();

    dispatch(getLanguages(data));
  } catch (e) {
    console.log('error from configsDuck', e)
  }  
};
export const changeCurrencies = () => async (dispatch) => {
  try {
    const data = await(await fetch(`${root}/api/currency`) ).json();
    dispatch(getCurrencies(data));

  } catch (e) {
    console.log('error from configsDuck', e)
  }  
};

export const fetchLanguageData = (lang) => async(dispatch) => {
 
  try {
    const data = await ( await fetch(`${root}/api/language/${lang}`)).json();
    dispatch(changeCurrentLanguageData(data));

  } catch (e) {
    console.log('error from configsDuck', e)
  }

};
export const fetchLanguages = () => (dispatch) => {
  fetch(`${root}/languages`) 
    .then((res) => res.json())
    .then((res) => {
        
        dispatch(changeCurrentLanguageData(res));
      
    })
    .catch((e) => console.log('error from configsDuck', e));
};

const initialStateConfigs = {
    showType: 'grid',
    sortType: {},
    countItems: 6,
    countItemsOfPage: 6,
    costInterval:{},
    modalIsClose : false,
    popupIsShow : false,
    popupItemId :null,
    hotDealsId : 0,
    hotDealsPopup : 0,
    currentCurrency : 'AMD',
    currentLanguage : 'am',
    languages : [],
    currencies : [],
    currentLanguageData : [],
    idProductsFromStart : 1,
    hotDealsTimerSeconds : 3 * 24 * 60 * 60,
    mostestIndex : "0",
    viewedProductId : 1,
    similarCirclId : 1,
    bestSellerCircleId : 1,
    reviewShow : false,
    
};

const ConfigsDuck = (state = initialStateConfigs, action) => {
  switch (action.type) {
    case CHANGE_SHOW_TYPE:
      return {
        ...state,
        showType: action.payload,
      };
    case HOT_DEALS_ID:
      return {
        ...state,
        hotDealsId: action.payload,
      };
    case CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case COUNT_ELEMENTS:
      return {
        ...state,
        countItems: action.payload,
      };
    case COUNT_ELEMENTS_OF_PAGE:
      return {
        ...state,
        countItemsOfPage: action.payload,
      };

    case COST_VALUES:
      if(checkEmptyObject(action.payload)){

        return {
          ...state,
          costInterval: {},
        };
      }else{
        return {
          ...state,
          costInterval: {...state.costInterval, ...action.payload},
        };

      }

    case MODAL_OPEN_CLOSE:
      return {
        ...state,
        modalIsClose: action.payload,
      };
    case POPUP_IS_SHOW:
      return {
        ...state,
        popupIsShow: action.payload,
      };
    case POPUP_HOT_DEALS_IS_SHOW:
      return {
        ...state,
        hotDealsPopup: action.payload,
      };
    case POPUP_ITEM_ID:
      return {
        ...state,
        popupItemId: action.payload,
      };
    case HOT_DEALS_TIMER_SECONDS:
      return {
        ...state,
        hotDealsTimerSeconds: action.payload,
      };
    case PRODUCTS_FROM_STARTING_PAGE_ID:
      return {
        ...state,
        idProductsFromStart: action.payload,
      };
    case CURRENT_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
      };
    case CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    case CURRENT_LANGUAGE_DATA:
      return {
        ...state,
        currentLanguageData: action.payload,
      };
    case LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };
    case CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case MOSTEST_OPTIONS_INDEX:
      return {
        ...state,
        mostestIndex: action.payload,
      };
    case VIEWED_PRODUCT_ID:
      return {
        ...state,
        viewedProductId: action.payload,
      };
    case REVIEW_SHOW:
      return {
        ...state,
        reviewShow: action.payload,
      };
    case SIMILAR_PRODUCT_ID:
      return {
        ...state,
        similarCirclId: action.payload,
      };
    case BEST_SELLER_PRODUCT_ID:
      return {
        ...state,
        bestSellerCircleId: action.payload,
      };
    
    default:
      return state;
  }
};

export default ConfigsDuck;
