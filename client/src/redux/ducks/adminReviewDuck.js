import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const REVIEW_LIST = 'adminReviewDuck/REVIEW_LIST';
const CURRENT_REVIEW_ID = 'adminReviewDuck/CURRENT_REVIEW_ID';
const CURRENT_REVIEW = 'adminReviewDuck/CURRENT_REVIEW';



export const getReviewList = createAction(REVIEW_LIST);
export const getReviewId = createAction(CURRENT_REVIEW_ID);
export const getCurrentReview = createAction(CURRENT_REVIEW);




const initialStateApp = {
  reviewList: [],
  currentReviewId : null,
  currentReview :{}
};
export const currentReviewId = (id) => (dispatch) => {
     dispatch(getReviewId(id));
  };
export const changeCurrentReview = (obj) => (dispatch) => {
     dispatch(getCurrentReview(obj));
  };

export const fetchReviewList = () => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/review/list`)).json();
    
    dispatch(getReviewList(data));
  } catch (e) {
    console.log('error from AdminReviewDuck', e)
  }
};
export const fetchReviewById = (id) => async(dispatch) => { 
  try {
    const data = await (await fetch(`${root}/api/admin/review/${id}`)).json();
    
    dispatch(getCurrentReview(data));
  } catch (e) {
    console.log('error from AdminReviewDuck', e)
  }
};



const AdminReviewDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case REVIEW_LIST:
      return {
        ...state,
        reviewList: action.payload,
      };
    case CURRENT_REVIEW_ID:
      return {
        ...state,
        currentReviewId: action.payload,
      };
    case CURRENT_REVIEW:
      return {
        ...state,
        currentReview: action.payload,
      };
    default:
      return state;
  }
};

export default AdminReviewDuck;
