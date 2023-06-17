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
};



 export const changeTabName = (name) => (dispatch) => {

   dispatch(currentTabName(name));
 }


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
    const data = await(await fetch(`${root}/api/review/item/${userId}/${productId}`)).json();
    dispatch(getReviewByUserAndProduct(data));
    console.log("🚀 ~ file: reviewDuck.jsx:56 ~ fetchReviewByUserAndProduct ~ data:", data)
  } catch (e) {
    console.log('error from orderDuck', e)
  }  
};
export const fetchAddReviewByUser = (userId, productId) => async (dispatch) => {

  try {
    const data = await(await fetch(`${root}/api/review/item/${userId}/${productId}`)).json();
    //dispatch(getReviewByUserAndProduct(data));
    console.log("🚀 ~ file: reviewDuck.jsx:56 ~ fetchReviewByUserAndProduct ~ data:", data)
  } catch (e) {
    console.log('error from orderDuck', e)
  }  
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
