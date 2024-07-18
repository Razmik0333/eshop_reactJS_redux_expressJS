import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const SUB_CATEGORY_BY_CATEGORY = 'adminOrderDuck/SUB_CATEGORY_BY_CATEGORY';
const SUB_CATEGORIES = 'adminOrderDuck/SUB_CATEGORIES';
const CURRENT_SUB_CATEGORY_ID = 'adminOrderDuck/CURRENT_SUB_CATEGORY_ID';
const CURRENT_SUB_CATEGORY = 'adminOrderDuck/CURRENT_SUB_CATEGORY';



export const getSubCategoryListByCatId = createAction(SUB_CATEGORY_BY_CATEGORY);
export const getSubCategoriesList = createAction(SUB_CATEGORIES);
export const getSubCategoryId = createAction(CURRENT_SUB_CATEGORY_ID);
export const getCurrentSubCategory = createAction(CURRENT_SUB_CATEGORY);




const initialStateApp = {
  subCategoriesByCatId: [],
  allSubCategories: [],
  subCategoriesList: [],
  currentSubCategoryId : null,
  currentSubCategory : {}
};
export const changeSubCategoryId = (id) => (dispatch) => {
    dispatch(getSubCategoryId(id));
};
export const currentSubCategoryClear = () => (dispatch) => {
    dispatch(getSubCategoryId(null));
    dispatch(getCurrentSubCategory(null))
};

export const fetchSubCategoriesById = (id) => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/sub_cats/${id}`)).json();
    dispatch(getSubCategoryListByCatId(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
export const fetchAllSubCategories = () => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/sub_cats`)).json();
    dispatch(getSubCategoriesList(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
export const fetchCurrentSubCategory = (id) => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/sub_cat/${id}`)).json();
    dispatch(getCurrentSubCategory(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
export const fetchSubCategoryForDelete = (sub_category_id) => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/subcategory/delete`, {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        sub_category_id
      })
    } )).json();
    
    dispatch(getSubCategoriesList(data));
  } catch (e) {
    console.log('error from AdminProductDuck', e)
  }
};

const AdminSubCategoryDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case SUB_CATEGORY_BY_CATEGORY:
      return {
        ...state,
        subCategoriesByCatId: action.payload,
      };
    case SUB_CATEGORIES:
      return {
        ...state,
        subCategoriesList: action.payload,
      };
    case CURRENT_SUB_CATEGORY_ID:
      return {
        ...state,
        currentSubCategoryId: action.payload,
      };
    case CURRENT_SUB_CATEGORY:
      return {
        ...state,
        currentSubCategory: action.payload,
      };
 

    default:
      return state;
  }
};

export default AdminSubCategoryDuck;
