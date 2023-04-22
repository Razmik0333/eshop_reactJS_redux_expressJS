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
export const deleteWishListItem = (userId,productId) => (dispatch) => {

  fetch(`${root}/wishlist/delete/${userId}/${productId}`)
  .then((res) => res.json())
  .then((res) => {
      console.log(res.length);
      res.length === 0 ?
      
      dispatch(addToWishlist([])):
      
      dispatch(addToWishlist(res.trim('').split('|')))

      // dispatch(deleteFromWishlist(id));
  })
  .catch((e) => console.log('error from wishListDuck', e));

};

export const fetchAddWishList = (userId,productId) => (dispatch) => {

  !userId ? dispatch(addToWishlist([])) :
     fetch(`${root}/wishlist/add/${userId}/${productId}`)
          .then((res) => res.json())
          .then((res) => {
              console.log(res);
              
              dispatch(addToWishlist(res.trim('').split('|')));
          })
          .catch((e) => console.log('error from wishListDuck', e));
};

export const fetchCurrentWishList = (userId) => (dispatch) => {

  !userId ? dispatch(addToWishlist([])) :
     fetch(`${root}/wishlist/current/${userId}`)//'wishlist//([0-9]+)'
          .then((res) => res.json())
          .then((res) => {
              (typeof res === "string") && 
              
              dispatch(getCurretWishList(res.trim('').split('|')));
          })
          .catch((e) => console.log('error from wishListDuck', e));
};
export const fetchWishList = (arr) => (dispatch) => {
  console.log(arr);
  
  arr.length === 0 ? dispatch(getWishListData([])) :
     fetch(`${root}/wishlist/wish/${arr}`)

          .then((res) => res.json())
          .then((res) => {
              console.log(res);
              
               dispatch(getWishListData(res));
          })
          .catch((e) => console.log('error from wishListDuck', e));
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
