import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const REVIEW_LIST = 'adminOrderDuck/REVIEW_LIST';



export const getReviewList = createAction(REVIEW_LIST);




const initialStateApp = {
  reviewList: [],

};
// export const currentCartItem = () => (dispatch) => {
//      dispatch(getOrdersList());
//    };

export const fetchReviewList = () => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/review/list`)).json();
    console.log(data);
    
    dispatch(getReviewList(data));
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
    default:
      return state;
  }
};

export default AdminReviewDuck;
