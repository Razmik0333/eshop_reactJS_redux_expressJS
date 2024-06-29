import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const SUB_CATEGORY_BY_CATEGORY = 'adminOrderDuck/SUB_CATEGORY_BY_CATEGORY';



export const getSubCategoryListByCatId = createAction(SUB_CATEGORY_BY_CATEGORY);




const initialStateApp = {
  subCategoriesByCatId: [],

};
// export const currentCartItem = () => (dispatch) => {
//      dispatch(getOrdersList());
// };

export const fetchSubCategoriesById = (id) => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/sub_cats/${id}`)).json();
    dispatch(getSubCategoryListByCatId(data));
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
    

    default:
      return state;
  }
};

export default AdminSubCategoryDuck;
