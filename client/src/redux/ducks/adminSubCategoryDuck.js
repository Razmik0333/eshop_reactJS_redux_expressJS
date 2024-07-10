import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const SUB_CATEGORY_BY_CATEGORY = 'adminOrderDuck/SUB_CATEGORY_BY_CATEGORY';
const SUB_CATEGORIES = 'adminOrderDuck/SUB_CATEGORIES';



export const getSubCategoryListByCatId = createAction(SUB_CATEGORY_BY_CATEGORY);
export const getSubCategoriesList = createAction(SUB_CATEGORIES);




const initialStateApp = {
  subCategoriesByCatId: [],
  allSubCategories: [],

};
//  export const changeSubCategoryId = (id) => (dispatch) => {
//       dispatch(getSubCategoryId(id));
//  };

export const fetchSubCategoriesById = (id) => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/sub_cats/${id}`)).json();
    dispatch(getSubCategoryListByCatId(data));
    console.log("🚀 ~ fetchSubCategoriesById ~ data:", data)
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
export const fetchAllSubCategories = () => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/sub_cats`)).json();
    dispatch(getSubCategoriesList(data));
    console.log("🚀 ~ fetchSubCategoriesById ~ data:", data)
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
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
 

    default:
      return state;
  }
};

export default AdminSubCategoryDuck;
