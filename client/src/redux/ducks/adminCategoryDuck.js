import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const CURRENT_CATEGORY = 'adminOrderDuck/CURRENT_CATEGORY';



export const getCurrentCategoryId = createAction(CURRENT_CATEGORY);




const initialStateApp = {
  currentCategoryId: 1,

};
export const currentCategoryId = (id) => (dispatch) => {
     dispatch(getCurrentCategoryId(id));
};
/*
export const fetchOrdersChanges = () => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/orders/save`)).json();
    //dispatch(orderSave(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
*/

const AdminCategoryDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case CURRENT_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.payload,
      };
    

    default:
      return state;
  }
};

export default AdminCategoryDuck;
