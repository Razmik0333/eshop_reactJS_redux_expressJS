import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const CURRENT_CATEGORY_ID = 'adminCategoryDuck/CURRENT_CATEGORY_ID';
const CURRENT_CATEGORY = 'adminCategoryDuck/CURRENT_CATEGORY';
const CATEGORIES_LIST = 'adminCategoryDuck/CATEGORIES_LIST';
const IS_SAVED = 'adminProductDuck/IS_SAVED';


export const getCurrentCategoryId = createAction(CURRENT_CATEGORY_ID);
export const getCurrentCategory = createAction(CURRENT_CATEGORY);

export const getCategoriesList = createAction(CATEGORIES_LIST);
export const saveChanges = createAction(IS_SAVED);




const initialStateApp = {
  currentCategoryId: 1,
  currentCategory: {},
  categoriesList : [],
  isSaved : '',

};
export const saveChangedCategories = (str) => (dispatch) => {
  dispatch(saveChanges(str))
}
export const currentCategoryClear = () => (dispatch) => {
  
    
  dispatch(getCurrentCategoryId(null));
  dispatch(getCurrentCategory(null));
};
export const currentCategoryId = (id) => (dispatch) => {
     dispatch(getCurrentCategoryId(id));
};

export const fetchCurrentCategory = (id) => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/category/${id}`)).json();
    dispatch(getCurrentCategory(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
export const fetchCategoriesList = () => async(dispatch) => { 
    
  try {
    
    const data = await (await fetch(`${root}/api/admin/category/list`)).json();
    dispatch(getCategoriesList(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
export const fetchCategoryForDelete = (category_id) => async(dispatch) => {
  
  try {
    const data = await (await fetch(`${root}/api/admin/category/delete`, {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        category_id
      })
    } )).json();
    
    dispatch(getCategoriesList(data));
  } catch (e) {
    console.log('error from AdminProductDuck', e)
  }
};
export const deleteCacheFiles = () => async (dispatch) => {
  try {
    const data = await( await fetch(`${root}/api/admin/categories/save`)).json()
    dispatch(saveChangedCategories(data));
  } catch (e) {
    console.log('error from AdminProductDuck', e)
  }
       
};
const AdminCategoryDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case CURRENT_CATEGORY_ID:
      return {
        ...state,
        currentCategoryId: action.payload,
      };
    case CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case CATEGORIES_LIST:
      return {
        ...state,
        categoriesList: action.payload,
      };
    

    default:
      return state;
  }
};

export default AdminCategoryDuck;
