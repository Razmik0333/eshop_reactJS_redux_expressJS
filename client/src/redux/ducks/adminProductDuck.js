import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const PRODUCTS_LIST = 'adminProductDuck/PRODUCTS_LIST';
const PRODUCTS_FOR_UPDATE_ID = 'adminProductDuck/PRODUCTS_FOR_UPDATE_ID';
const PRODUCTS_FOR_UPDATE = 'adminProductDuck/PRODUCTS_FOR_UPDATE';
const PRODUCT_FOR_DELETE = 'adminProductDuck/PRODUCT_FOR_DELETE';
const TIME_OBJECT = 'adminProductDuck/TIME_OBJECT';
const CLEAR_TIME_OBJECT = 'adminProductDuck/CLEAR_TIME_OBJECT';


export const getProductsList = createAction(PRODUCTS_LIST);
export const getProductIdForUpdate = createAction(PRODUCTS_FOR_UPDATE_ID);
export const getProductForUpdate = createAction(PRODUCTS_FOR_UPDATE);
export const getProductForDelete = createAction(PRODUCT_FOR_DELETE);
export const getTimeObject = createAction(TIME_OBJECT);
export const clearTimeObject = createAction(CLEAR_TIME_OBJECT);



const initialStateApp = {
  productsList: [],
  currentProductId : null,
  currentProduct:null,
  isDeleted : false,
  timeObj : {}

};
export const currentCartItem = () => (dispatch) => {
     dispatch(getProductsList());
   };
export const currentProductID = (id) => (dispatch) => {
  console.log(id);
    
     dispatch(getProductIdForUpdate(id));
};
export const currentProductClear = () => (dispatch) => {
  
    
     dispatch(getProductForUpdate(null));
     dispatch(getProductIdForUpdate(null));
};
export const resetIsDeleted = (bool) => (dispatch) => {
      dispatch(getProductForDelete(bool));
};
export const createYear = (obj) => (dispatch) => {
  dispatch(getTimeObject(obj))
}
export const createMonth = (obj) => (dispatch) => {
dispatch(getTimeObject(obj))

}
export const changeCurrentProduct = (obj) => (dispatch) => {
dispatch(getProductForUpdate(obj))

}
export const resetTimeObject = () => (dispatch) => {
  dispatch(clearTimeObject())
}

export const fetchProductsList = () => async (dispatch) => {
    try {
      const data = await( await fetch(`${root}/api/admin/product/list`)).json()
      dispatch(getProductsList(data));
    } catch (e) {
      console.log('error from AdminProductDuck', e)
    }
         
};
export const fetchProductItem = (id) => (dispatch) => {
    
    fetch(`${root}/api/admin/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
            dispatch(getProductForUpdate(res));
      })
      .catch((e) => console.log('error from AdminProductDuck', e));
};
// export const fetchProductsForUpdate = (product_id) => async(dispatch) => {
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
export const fetchProductsForDelete = (product_id) => async(dispatch) => {
  
  try {
    const data = await (await fetch(`${root}/api/admin/product/delete`, {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        product_id
      })
    } )).json();
    
    dispatch(getProductsList(data));
  } catch (e) {
    console.log('error from AdminProductDuck', e)
  }
};


const AdminProductDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.payload,
      };
    case PRODUCTS_FOR_UPDATE_ID:
      return {
        ...state,
        currentProductId: action.payload,
      };
    case PRODUCTS_FOR_UPDATE:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case PRODUCT_FOR_DELETE:
      return {
        ...state,
        isDeleted: action.payload,
      };
      case TIME_OBJECT:
        return {
          ...state,
          timeObj: {
            ...state.timeObj,
            ...action.payload
          },
        };
      case CLEAR_TIME_OBJECT:
        return {
          ...state,
          timeObj: {},
        };
    default:
      return state;
  }
};

export default AdminProductDuck;
