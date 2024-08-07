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
const REVIEW_SORT_TYPE = 'reviewDuck/REVIEW_SORT_TYPE';
const REVIEW_FILTER_WITH_PICTURE = 'reviewDuck/REVIEW_FILTER_WITH_PICTURE';
const REVIEW_CONTENT_MODAL = 'orderDuck/REVIEW_CONTENT_MODAL';


export const currentTabName = createAction(CURRENT_TAB_NAME);
export const fetchReviews = createAction(FETCH_REVIEWS);
export const fetchRatings = createAction(FETCH_RATINGS);
export const getReviewByUserAndProduct = createAction(REVIEW_BY_USER_AND_PRODUCT);
export const getLatestReviews = createAction(LATEST_REVIEW);
export const getReviewsByUser = createAction(REVIEW_BY_USER);
export const getReviewId = createAction(REVIEW_ID);
export const getReviewIsDeleted = createAction(REVIEW_IS_DELETED);
export const changeReviewSortType = createAction(REVIEW_SORT_TYPE);
export const changeReviewFilterWithPicture = createAction(REVIEW_FILTER_WITH_PICTURE);
export const changeReviewModal = createAction(REVIEW_CONTENT_MODAL);
//createAction(CHANGE_ORDER_CONFIRMED_ID);



const initialStateApp = {
  tabName : 'desc',
  reviewsByProduct :[],
  ratingList :[],
  reviewsByUser :[],
  reviewByUserAndProduct :{},
  latestReviews : [],
  reviewId : 1,
  isDeleted : false,
  reviewSortType : "newest",
  isFilter:false,
  currentReviewId: {}
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
 export const getReviewSortType = (obj) => (dispatch) => {

   dispatch(changeReviewSortType(obj));
 }
 export const getReviewFilter = (bool) => (dispatch) => {

   dispatch(changeReviewFilterWithPicture(bool));
 }
 export const getReviewModal = (id) => (dispatch) => {

   dispatch(changeReviewModal(id));
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
    case REVIEW_SORT_TYPE:
        return {
          ...state,
          reviewSortType: action.payload,
        }      
    case REVIEW_FILTER_WITH_PICTURE:
        return {
          ...state,
          isFilter: action.payload,
        }      
        
    case REVIEW_CONTENT_MODAL:
        return {
          ...state,
          currentReviewId: action.payload,
        }      
        

    default:
      return state;
  }
};

export default ReviewDuck;
