import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";
const USER_ID = 'user/USER_ID';
const USER_DATA = 'user/USER_DATA';
const USER_AVATAR = 'user/USER_AVATAR';
const USER_NAME = 'user/USER_NAME';
const USER_CACHES = 'user/USER_CACHES';
const EMAIL_SUBSCRIBE = 'user/EMAIL_SUBSCRIBE';


export const getUserId = createAction(USER_ID);
export const getUserDataAction = createAction(USER_DATA);
export const getUserAvatar = createAction(USER_AVATAR);
export const getUserName = createAction(USER_NAME);
export const clearCaches = createAction(USER_CACHES);
export const changeEmail = createAction(EMAIL_SUBSCRIBE);


const initialState = {
  userId: null,
  avatarURL: `${root}/icons/config/user_no_have_picture.png`,
  userData:{},
  isCleared : false,
  emailSubscribe : false,
};

export const currentUser = (id) => (dispatch) => {
  if (id) {
    dispatch(getUserId(id));
  }else{
    dispatch(getUserId(null));
  }
};
export const userAvatarPicture = (url) => (dispatch) => {
    dispatch(getUserAvatar(url));
};

export const clearCachesFiles = (id) => async(dispatch) => {
  try {
    const isCleared = await(await fetch(`/api/user/clear/${id}`)).json();  
    console.log("🚀 ~ clearCachesFiles ~ isCleared:", isCleared)
    dispatch(clearCaches(isCleared))
    
  } catch (error) {
    throw error
  }
}
export const fetchEmailForNotice = (email) => async (dispatch) => {
  try {
    const data = await(await fetch(`${root}/api/notice/email`, {
      headers: {
        "Content-Type":"application/json"
      },
      method:"POST",
      body:JSON.stringify({email})
    })).json();
    dispatch(changeEmail(data));
    
  } catch (error) {
    throw error;
  }  
  
 
}
export const getUserData = (id) => async(dispatch) => {
    if(id){
      try {
        const data = await (await fetch(`${root}/api/user/${id}`)).json();
        dispatch(getUserDataAction(data));
      } catch (e) {
        console.log('error from userDuck', e)
      }
    }else{
      dispatch(getUserDataAction(null))
    }
};
export const changeUserName = (user_id,user_name) => async(dispatch) => {
  if (user_name) {
    try {
        const userName = await(await fetch(`${root}/api/user/name`, {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            user_id, user_name
          })
        })).json();
        dispatch(getUserName(userName));
    } catch (error) {
      console.log(error)
    }
  } 
}

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
    case USER_AVATAR:
      return {
        ...state,
        userData: {
          ...state.userData,
          picture: action.payload
        },
      };
    case USER_NAME:
      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.payload
        },
      };
    case USER_CACHES:
      return {
        ...state,
        isCleared: action.payload
      };
    case EMAIL_SUBSCRIBE:
      return {
        ...state,
        emailSubscribe: action.payload
      };
    default:
      return state;
  }
};

export default UserDuck;
