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

export const getUserData = (id) => (dispatch) => {
    if(id){
      fetch(`${root}/guest/${id}`) 
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        
        dispatch(getUserDataAction(res));
      })
      .catch((e) => console.log('error from userDuck', e));
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
