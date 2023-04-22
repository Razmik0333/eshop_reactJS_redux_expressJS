import { createAction } from '../../helpers/redux';
import { root } from '../../helpers/constants/constants';
const FETCH_CATEGORIES = 'navigationDuck/FETCH_CATEGORIES';
const CATEGORY_ID = 'navigationDuck/CATEGORY_ID';
const CURRENT_CATEGORY = 'navigationDuck/CURRENT_CATEGORY';
const SEARCH_WORD = 'navigationDuck/SEARCH_WORD';
const IS_SEARCH = 'navigationDuck/IS_SEARCH';


export const getCategories = createAction(FETCH_CATEGORIES);
export const getCurrentCategoryId = createAction(CATEGORY_ID);
export const getCurrentCategory = createAction(CURRENT_CATEGORY);
export const getSearchWord = createAction(SEARCH_WORD);
export const changeIsSearch = createAction(IS_SEARCH);

//category/([0-9]+)
export const fetchCatgories = () => async (dispatch) => {
  try {
    const data = await( await fetch(`${root}/api/category`) ).json();
    dispatch(getCategories(data));
  } catch (e) {
     console.log('error from NavigationDuck', e)
  }    
};
export const fetchCurrentCatgory = (id) => async(dispatch) => {
  try {
    const data = await(await fetch(`${root}/api/category/${id}`) ).json();
    dispatch(getCurrentCategory(data));
  } catch (e) {
    console.log('error from NavigationDuck', e)
  }
};

export const currentCategory = (id) => (dispatch) => {
  dispatch(getCurrentCategoryId(id));
};
export const currentSearch = (str) => (dispatch) => {
  dispatch(getSearchWord(str));
};
export const isSearch = (str) => (dispatch) => {
  dispatch(changeIsSearch(str));
};



export const initialStateApp = {
  categories: [], //
  categoryID: null,
  currentCategory: {}, //
  searchWord: '', //
  isSearch: false,

};

function NavigationDuck(state = initialStateApp, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEGORY_ID:
      return {
        ...state,
        categoryID: action.payload,
      };
    case CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };

    case IS_SEARCH:
      return {
        ...state,
        isSearch: action.payload,
      };
    default:
      return state;
  }
}

export default NavigationDuck;
