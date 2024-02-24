import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";


const CURRENT_TAB_NAME = 'reviewDuck/CURRENT_TAB_NAME';
const FETCH_REVIEWS = 'reviewDuck/FETCH_REVIEWS';
const FETCH_RATINGS = 'reviewDuck/FETCH_RATINGS';
const REVIEW_BY_USER_AND_PRODUCT = 'reviewDuck/REVIEW_BY_USER_AND_PRODUCT';
const LATEST_REVIEW = 'reviewDuck/LATEST_REVIEW';
const REVIEW_ID = 'reviewDuck/REVIEW_ID';
const REVIEW_BY_USER = 'reviewDuck/REVIEW_BY_USER';
const REVIEW_IS_DELETED = 'reviewDuck/REVIEW_IS_DELETED';
// const CHANGE_ORDER_CONFIRMED_ID = 'orderDuck/CHANGE_ORDER_CONFIRMED_ID';
// const CONFIRMED = 'orderDuck/CONFIRMED';
// const CLEAR_ORDER_FROM_STATUS = 'orderDuck/CLEAR_ORDER_FROM_STATUS';


export const currentTabName = createAction(CURRENT_TAB_NAME);
export const fetchReviews = createAction(FETCH_REVIEWS);
export const fetchRatings = createAction(FETCH_RATINGS);
export const getReviewByUserAndProduct = createAction(REVIEW_BY_USER_AND_PRODUCT);
export const getLatestReviews = createAction(LATEST_REVIEW);
export const getReviewsByUser = createAction(REVIEW_BY_USER);
export const getReviewId = createAction(REVIEW_ID);
export const getReviewIsDeleted = createAction(REVIEW_IS_DELETED);
// export const changeOrderForConfirm = createAction(CHANGE_ORDER_CONFIRMED_ID);
// export const changeConfirmed = createAction(CONFIRMED);
// export const clearOrders = createAction(CLEAR_ORDER_FROM_STATUS);createAction(CHANGE_ORDER_CONFIRMED_ID);



const initialStateApp = {
  tabName : 'desc',
  reviewsByProduct :[],
  ratingList :[],
  reviewsByUser :[],
  reviewByUserAndProduct :{},
  latestReviews : [],
  reviewId : 1,
  isDeleted : false
};



 export const changeTabName = (name) => (dispatch) => {

   dispatch(currentTabName(name));
 }
 export const changeReviewId = (id) => (dispatch) => {

   dispatch(getReviewId(id));
 }
 export const changeReviewIsDeleted = (bool) => (dispatch) => {

   dispatch(getReviewIsDeleted(bool));
 }


export const fetchCurrentProductsReviews = (productId) => async(dispatch) => {
    try {
      
      const data = await(await fetch(`${root}/api/review/list/${productId}`)).json();
      dispatch(fetchReviews(data));

    } catch (e) {
      console.log('error from reviewDuck', e)
    }
};

export const fetchCurrentProductsRatings = (productId) => async(dispatch) => {
    try {
      
      const data = await(await fetch(`${root}/api/rating/count/${productId}`)).json();
      dispatch(fetchRatings(data));

    } catch (e) {
      console.log('error from reviewDuck', e)
    }
};

export const fetchLatestReviews = () => async(dispatch) => {
    try {
      const data = await(await fetch(`${root}/api/review/latest`)).json();
      dispatch(getLatestReviews(data));

    } catch (e) {
      console.log('error from reviewDuck', e)
    }
};
export const fetchReviewsByUser = (user_id) => async(dispatch) => {
    try {
      const data = await(await fetch(`${root}/api/review/user/${user_id}`)).json();
      dispatch(getReviewsByUser(data));

    } catch (e) {
      console.log('error from reviewDuck', e)
    }
};

export const changeReviewData = (data) => (dispatch) => {
  console.log(data);
  
  dispatch(getReviewsByUser(data));
} 

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
    case LATEST_REVIEW:
        return {
          ...state,
          latestReviews: action.payload,
        }      
    case REVIEW_ID:
        return {
          ...state,
          reviewId: action.payload,
        }      
    case REVIEW_BY_USER:
        return {
          ...state,
          reviewsByUser: action.payload,
        }      
    case FETCH_RATINGS:
        return {
          ...state,
          ratingList: action.payload,
        }      
    case REVIEW_IS_DELETED:
        return {
          ...state,
          isDeleted: action.payload,
        }      
    default:
      return state;
  }
};

export default ReviewDuck;
