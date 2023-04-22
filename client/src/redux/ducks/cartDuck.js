import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";
import { checkEmptyObject } from "../../helpers/functions/functions";

const CURRENT_CART_ITEM = 'cartDuck/CURRENT_CART_ITEM';
const ADD_TO_CART = 'cartDuck/ADD_TO_CART';
const REMOVE_FROM_CART = 'cartDuck/REMOVE_FROM_CART';
const CART_EMPTY = 'cartDuck/CART_EMPTY';
const DELETE_FROM_CART = 'cartDuck/DELETE_FROM_CART';
const TOTAL_PRICE = 'cartDuck/TOTAL_PRICE';
const CART_COUNT = 'cartDuck/CART_COUNT';

export const getCurrentId = createAction(CURRENT_CART_ITEM);
export const getCurrentCart = createAction(ADD_TO_CART);
export const getSubCart = createAction(REMOVE_FROM_CART);
export const getTotalPrice = createAction(TOTAL_PRICE);
export const getDeletedCart = createAction(DELETE_FROM_CART);
export const getEmptyCart = createAction(CART_EMPTY);
export const getCartCount = createAction(CART_COUNT);


const initialStateApp = {
  currentCartItemId: null,
  cartData:{},
  totalPrice: 0,
  countItems: 0
};
export const currentCartItem = (id) => (dispatch) => {
     dispatch(getCurrentId(id));
   };
export const getCartItem = (obj) => (dispatch) => {
     dispatch(getCurrentCart(obj));
   };
export const getCountOfCart = (id) => (dispatch) => {
     dispatch(getCartCount(id));
   };
export const getCartToRemove = (id) => (dispatch) => {
     dispatch(getSubCart(id));
   };
export const getClearedCart = (id) => (dispatch) => {
     dispatch(getEmptyCart(id));
   };
export const getTotalPriceValue = (val) => (dispatch) => {
     dispatch(getTotalPrice(val));
   };
export const getModifiedCart = (id) => (dispatch) => {
     dispatch(getDeletedCart(id));
   };

export const fetchAddCart = (id, count) => (dispatch) => {
     fetch(`${root}/list/cart/${id}/${count}`)
          .then((res) => res.json())
          .then((res) => {
               dispatch(getCurrentCart(res));
          })
          .catch((e) => console.log('error from productDuck', e));
};


const CartDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case CURRENT_CART_ITEM:
      return {
        ...state,
        currentCartItemId: action.payload,
      };
    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload ? 
                          state.totalPrice + action.payload 
                                  : action.payload,
      };
    case CART_COUNT:
      return {
        ...state,
        countItems: action.payload ? 
                          state.countItems + action.payload 
                                  : action.payload,
      };
    case ADD_TO_CART: 
        let valObj = {};

        if (checkEmptyObject(state.cartData)) {
          valObj = action.payload;
        }else{
          for (let key in action.payload) {  
            if (key in state.cartData) {  
              valObj = {
                [key] : ++state.cartData[key]
              }
            }else{
              valObj = action.payload;
            }
          }
        }
        return {
          ...state,
          cartData: {
            ...state.cartData,
            ...valObj
          }
        };
    case REMOVE_FROM_CART:
      let subObj = {};

      for (let key in action.payload) { 
        console.log(state.cartData[key]);
        
        if(state.cartData[key] > 1){
          subObj = {
            [key] : --state.cartData[key]
          } 
        }else{subObj = {
          [key] : 1
        }}
      }
      return{
        ...state,
        ...subObj
      }
    case CART_EMPTY:
      return {
        ...state,
        cartData: action.payload
      };

    case DELETE_FROM_CART:
      delete state.cartData[action.payload]
      return {
        ...state,
        cartData: state.cartData
      };
    default:
      return state;
  }
};

export default CartDuck;
