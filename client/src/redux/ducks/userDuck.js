import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";
const USER_ID = 'user/USER_ID';
const USER_DATA = 'user/USER_DATA';

export const getUserId = createAction(USER_ID);
export const getUserDataAction = createAction(USER_DATA);


const initialState = {
  userId: null,

  userData:{},
};

export const currentUser = (id) => (dispatch) => {
  if (id) {
    dispatch(getUserId(id));
  }else{
    dispatch(getUserId(null));
  }
};

export const getUserData = (id) => async(dispatch) => {
  console.log(id);
  
    if(id){
      try {
        const [data] = await (await fetch(`${root}/api/user/${id}`) ).json();
        dispatch(getUserDataAction(data));
      } catch (e) {
        console.log('error from userDuck', e)
      }
    }else{
      dispatch(getUserDataAction(null))
    }
};


const UserDuck = (state = initialState, action) => {
  switch (action.type) {
    case USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default UserDuck;
