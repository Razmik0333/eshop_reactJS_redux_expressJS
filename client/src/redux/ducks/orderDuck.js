import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";
import { checkEmptyObject, getUserOrdersFromArray } from "../../helpers/functions/functions";


const FETCH_ORDERS = 'orderDuck/FETCH_ORDERS';
const FETCH_PRODUCTS = 'orderDuck/FETCH_PRODUCTS';
const PRODUCT_COUNTS = 'orderDuck/PRODUCT_COUNTS';
const CURRENT_STATUS = 'orderDuck/CURRENT_STATUS';
const CHANGE_STATUS = 'orderDuck/CHANGE_STATUS';
const CHANGE_ORDER_CONFIRMED_ID = 'orderDuck/CHANGE_ORDER_CONFIRMED_ID';
const CONFIRMED = 'orderDuck/CONFIRMED';
const DELIVERED_ORDERS_BY_USER = 'orderDuck/DELIVERED_ORDERS_BY_USER';
// const CLEAR_ORDER_FROM_STATUS = 'orderDuck/CLEAR_ORDER_FROM_STATUS';


export const fetchOrders = createAction(FETCH_ORDERS);
export const fetchProducts = createAction(FETCH_PRODUCTS);
export const getProductsCount = createAction(PRODUCT_COUNTS);
export const getCurrentStatus = createAction(CURRENT_STATUS);
export const changeStatus = createAction(CHANGE_STATUS);
export const changeOrderForConfirm = createAction(CHANGE_ORDER_CONFIRMED_ID);
export const changeConfirmed = createAction(CONFIRMED);
export const getDeliveredOredersByUser = createAction(DELIVERED_ORDERS_BY_USER);
// export const clearOrders = createAction(CLEAR_ORDER_FROM_STATUS);createAction(CHANGE_ORDER_CONFIRMED_ID);



const initialStateApp = {
  ordersData:[],
  orderProducts :{},
  deliveredOrders : [],
  productsCounts : {},
  currentStatus: null,
  changedStatus:0,
  orderConfirmId : null,
  isConfirmed : false
};


export const changeOrdersFromLogout = () => (dispatch) => {
  dispatch(fetchOrders([]));
  dispatch(fetchProducts({}));
  dispatch(getProductsCount({}));
  dispatch(getOrderStatus(-1));

}
export const fetchOrderData = (obj) => (dispatch) => {
  const keys = Object.keys;
  const values = Object.values;
  for (const key in obj) {
    dispatch(fetchProductsByOrder(key, keys(obj[key])));
    dispatch(getProductQuantity(key, values(obj[key])));
  }
  
}
export const clearOrders = () => (dispatch) => {

  dispatch(fetchProducts({}));
  dispatch(getProductsCount({}));

}
export const orderConfirmId = (id) => (dispatch) => {

  
  dispatch(changeOrderForConfirm(id));

}
export const orderConfirm = (bool) => (dispatch) => {

  
  dispatch(changeConfirmed(bool));

}
 export const getProductQuantity = (val,obj) => (dispatch) => {
    
      dispatch(getProductsCount({
        [val]:obj
      }));
    };


export const fetchUserOrders = (id) => (dispatch) => {
     fetch(`${root}/package/data/${id}`)
          .then((res) => res.json())
          .then((res) => {
               dispatch(fetchOrders(res));
          })
          .catch((e) => console.log('error from orderDuck', e));
};

export const fetchProductsByOrder = (val, arr) => (dispatch) => {
  if (arr) {
    fetch(`${root}/package/product/${arr}`) 
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      
      dispatch(fetchProducts({
        [val]:res
      }));
    })
    .catch((e) => console.log('error from orderDuck', e));
    
  }

};
export const changeOrderStatus = (id, status) => (dispatch) => {

  //console.log(id, status);
    fetch(`${root}/package/status/${id}/${status}`) 
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      
      dispatch(changeOrderForConfirm(res));
      dispatch(orderConfirm(true));
      
    })
    .catch((e) => console.log('error from orderDuck', e));

};
export const fetchDeliveredOrdersByUser = (id) => (dispatch) => {

  //console.log(id, status);
  id &&
    fetch(`${root}/package/delivered/${id}`) 
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      
       dispatch(getDeliveredOredersByUser(Object.values(getUserOrdersFromArray(res))));
      // dispatch(orderConfirm(true));
      
    })
    .catch((e) => console.log('error from orderDuck', e));

};


export const getOrderStatus = (id) => (dispatch) => {
  dispatch(getCurrentStatus(id))
}




const OrderDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      const ordersObj = action.payload;
      if(!ordersObj.length){
        return {
          ...state,
          ordersData: [...action.payload],
        };
        
      }else{
        
        return {
          ...state,
          ordersData: action.payload,
        };
      }
    case FETCH_PRODUCTS:

      if(checkEmptyObject(action.payload)){
        return {
          ...state,
          orderProducts:{...action.payload}
        };
      }else{
        return {
          ...state,
          orderProducts: {
            ...state.orderProducts,  
            ...action.payload
          },
        };
      }
    case PRODUCT_COUNTS :

      if(checkEmptyObject(action.payload)){
        return {
          ...state,
          productsCounts:{...action.payload}
        };
      }

      else{

        return {
          ...state,
          productsCounts: {
            ...state.productsCounts,  
            ...action.payload
          },
        };

      }
    case CURRENT_STATUS:
      return{
        ...state,
        currentStatus : action.payload
      } 
    case CONFIRMED:
      return{
        ...state,
        isConfirmed : action.payload
      } 
      case DELIVERED_ORDERS_BY_USER:
        return{
          ...state,
          deliveredOrders : action.payload
        } 
    case CHANGE_ORDER_CONFIRMED_ID:
      state.ordersData.map(item => {
        if (item['id'] === action.payload) {
          item['user_status'] = 3
        }
      })
      return{
        ...state,
        orderConfirmId : action.payload
      } 
      
    default:
      return state;
  }
};

export default OrderDuck;
