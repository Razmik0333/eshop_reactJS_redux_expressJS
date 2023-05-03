import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

//const CURRENT_WISHLIST_ITEM = 'cartDuck/CURRENT_WISHLIST_ITEM';
const ADD_TO_WISH = 'wishListDuck/ADD_TO_WISH';
const CURRENT_WISH = 'wishListDuck/CURRENT_WISH';
const DELETE_FROM_WISHLIST = 'wishListDuck/DELETE_FROM_WISHLIST';
const WISHLIST_DATA = 'wishListDuck/WISHLIST_DATA';


export const addToWishlist = createAction(ADD_TO_WISH);
export const getCurretWishList = createAction(CURRENT_WISH);
export const getWishListData = createAction(WISHLIST_DATA);
export const deleteFromWishlist = createAction(DELETE_FROM_WISHLIST);

const initialStateApp = {
  wishList: [],
  wishListData: [],

};
export const currentWishListItem = (id) => (dispatch) => {
     dispatch(addToWishlist(id));
};
export const deleteWishListItem = (user_id,productId) => async (dispatch) => {
  
  try {
    const data = await (await fetch(`${root}/api/wishlist/remove/${productId}`, {
      method:"PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id
      })
    })).json()
    dispatch(getWishListData(data))
  } catch (e) {
    console.log('error from wishListDuck', e)
  }

};

export const fetchAddWishList = (user_id,productId) => async(dispatch) => {

  try {
    const data = await (await fetch(`${root}/api/wishlist/add/${productId}`, 
    {
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user_id
      })
    })).json()
    console.log("🚀 ~ file: wishListDuck.js:47 ~ fetchAddWishList ~ data:", data)
    dispatch(getWishListData(data))
  } catch (e) {
    console.log('error from wishListDuck', e)
  }
};

// export const fetchCurrentWishList = (userId) => (dispatch) => {

//   !userId ? dispatch(addToWishlist([])) :
//      fetch(`${root}/wishlist/current/${userId}`)//'wishlist//([0-9]+)'
//           .then((res) => res.json())
//           .then((res) => {
//               (typeof res === "string") && 
              
//               dispatch(getCurretWishList(res.trim('').split('|')));
//           })
//           .catch((e) => console.log('error from wishListDuck', e));
// };

export const fetchWishList = (userId) => async (dispatch) => {
  console.log(userId);
  try {
    const data = await (await fetch(`${root}/api/wishlist/${userId}`)).json();
    dispatch(getWishListData(data));
  } catch (e) {
    console.log('error from wishListDuck', e)
  }
  //arr.length === 0 ? dispatch(getWishListData([])) :
     
};



const WishListDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case ADD_TO_WISH:

      //if (state.wishList.length === 0) {
          return  {
            ...state,
            wishList: action.payload
          
          }

    case WISHLIST_DATA:
        return{
          ...state,
          wishListData: action.payload
        }
    case CURRENT_WISH:
        return{
          ...state,
          wishList: action.payload
        }
    
    default:
      return state;
  }
};

export default WishListDuck;
