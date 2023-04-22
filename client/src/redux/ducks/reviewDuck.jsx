import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";


const CURRENT_TAB_NAME = 'reviewDuck/CURRENT_TAB_NAME';
const FETCH_REVIEWS = 'reviewDuck/FETCH_REVIEWS';
const REVIEW_BY_USER_AND_PRODUCT = 'reviewDuck/REVIEW_BY_USER_AND_PRODUCT';
// const CURRENT_STATUS = 'orderDuck/CURRENT_STATUS';
// const CHANGE_STATUS = 'orderDuck/CHANGE_STATUS';
// const CHANGE_ORDER_CONFIRMED_ID = 'orderDuck/CHANGE_ORDER_CONFIRMED_ID';
// const CONFIRMED = 'orderDuck/CONFIRMED';
// const CLEAR_ORDER_FROM_STATUS = 'orderDuck/CLEAR_ORDER_FROM_STATUS';


export const currentTabName = createAction(CURRENT_TAB_NAME);
export const fetchReviews = createAction(FETCH_REVIEWS);
export const getReviewByUserAndProduct = createAction(REVIEW_BY_USER_AND_PRODUCT);
// export const getCurrentStatus = createAction(CURRENT_STATUS);
// export const changeStatus = createAction(CHANGE_STATUS);
// export const changeOrderForConfirm = createAction(CHANGE_ORDER_CONFIRMED_ID);
// export const changeConfirmed = createAction(CONFIRMED);
// export const clearOrders = createAction(CLEAR_ORDER_FROM_STATUS);createAction(CHANGE_ORDER_CONFIRMED_ID);



const initialStateApp = {
  tabName : 'desc',
  reviewsByProduct :[],
  reviewByUserAndProduct :{},
//   productsCounts : {},
//   currentStatus: -1,
//   changedStatus:0,
//   orderConfirmId : null,
//   isConfirmed : false
};


// export const changeOrdersFromLogout = () => (dispatch) => {
//   dispatch(fetchOrders([]));
//   dispatch(fetchProducts({}));
//   dispatch(getProductsCount({}));
//   dispatch(getOrderStatus(-1));

// }
// export const clearOrders = () => (dispatch) => {

//   dispatch(fetchProducts({}));
//   dispatch(getProductsCount({}));

// }
// export const orderConfirmId = (id) => (dispatch) => {

  
//   dispatch(changeOrderForConfirm(id));

// }
 export const changeTabName = (name) => (dispatch) => {

   dispatch(currentTabName(name));
 }
//  export const getProductQuantity = (val,obj) => (dispatch) => {
    
//       dispatch(getProductsCount({
//         [val]:obj
//       }));
//     };


export const fetchCurrentProductsReviews = (productId) => async(dispatch) => {
    try {
      const data = await(await fetch(`${root}/api/review/list/${productId}`)).json();
      dispatch(fetchReviews(data));

    } catch (e) {
      console.log('error from reviewDuck', e)
    }
};


export const fetchReviewByUserAndProduct = (userId, productId) => async (dispatch) => {

  try {
    const data = await(await fetch(`${root}/api/review/item/${userId}/${productId}`));
    dispatch(getReviewByUserAndProduct(data[0]));
  } catch (e) {
    console.log('error from orderDuck', e)
  }  

  // fetch(`${root}/review/item/${userId}/${productId}`) 
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res);
   
  //     dispatch(getReviewByUserAndProduct(res[0]));
   
  //   })
  //   .catch((e) => );
};

// export const fetchProductsByOrder = (val, arr) => (dispatch) => {
//   if (arr) {
//     fetch(`${root}/package/product/${arr}`) 
//     .then((res) => res.json())
//     .then((res) => {
   
//       dispatch(fetchProducts({
//         [val]:res
//       }));
//     })
//     .catch((e) => console.log('error from orderDuck', e));
    
//   }

// };
// export const getOrderStatus = (id) => (dispatch) => {
//   dispatch(getCurrentStatus(id))
// }




const ReviewDuck = (state = initialStateApp, action) => {
  switch (action.type) {

    case CURRENT_TAB_NAME:
        return {
          ...state,
          tabName: action.payload,
        }      
    case FETCH_REVIEWS:
        return {
          ...state,
          reviewsByProduct: action.payload,
        }      
    case REVIEW_BY_USER_AND_PRODUCT:
        return {
          ...state,
          reviewByUserAndProduct: action.payload,
        }      
    default:
      return state;
  }
};

export default ReviewDuck;
