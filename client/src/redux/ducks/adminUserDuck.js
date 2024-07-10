import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const USERS_LIST = 'adminUserDuck/USERS_LIST';
// const PRODUCTS_FOR_UPDATE_ID = 'adminProductDuck/PRODUCTS_FOR_UPDATE_ID';
// const PRODUCTS_FOR_UPDATE = 'adminProductDuck/PRODUCTS_FOR_UPDATE';
// const PRODUCT_FOR_DELETE = 'adminProductDuck/PRODUCT_FOR_DELETE';


export const getUsersList = createAction(USERS_LIST);
// export const getProductIdForUpdate = createAction(PRODUCTS_FOR_UPDATE_ID);
// export const getProductForUpdate = createAction(PRODUCTS_FOR_UPDATE);
// export const getProductForDelete = createAction(PRODUCT_FOR_DELETE);



const initialStateApp = {
  usersList: [],
  
};



export const fetchUsersList = () => async (dispatch) => {
    
    try {
      const data = await (await fetch(`${root}/api/admin/user/list`)).json();
      dispatch(getUsersList(data));
    } catch (e) {
      console.log('error from AdminProductDuck', e)
    }
};

const AdminUserDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case USERS_LIST:
      return {
        ...state,
        usersList: action.payload,
      };

    default:
      return state;
  }
};

export default AdminUserDuck;
