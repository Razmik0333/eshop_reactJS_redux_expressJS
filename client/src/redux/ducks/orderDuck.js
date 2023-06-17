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
const DELETE_ID = 'orderDuck/DELETE_ID';
const DELIVERED_ORDERS_BY_USER = 'orderDuck/DELIVERED_ORDERS_BY_USER';
const EVALUATE_PRODUCT_ID = 'orderDuck/EVALUATE_PRODUCT_ID';
const EVALUATE_PRODUCTS = 'orderDuck/EVALUATE_PRODUCTS';
// const CLEAR_ORDER_FROM_STATUS = 'orderDuck/CLEAR_ORDER_FROM_STATUS';


export const fetchOrders = createAction(FETCH_ORDERS);
export const fetchProducts = createAction(FETCH_PRODUCTS);
export const getProductsCount = createAction(PRODUCT_COUNTS);
export const getCurrentStatus = createAction(CURRENT_STATUS);
export const changeStatus = createAction(CHANGE_STATUS);
export const changeOrderForConfirm = createAction(CHANGE_ORDER_CONFIRMED_ID);
export const changeConfirmed = createAction(CONFIRMED);
export const getDeliveredOredersByUser = createAction(DELIVERED_ORDERS_BY_USER);
export const getEvaluateProductId = createAction(EVALUATE_PRODUCT_ID);
export const getEvaluateProducts = createAction(EVALUATE_PRODUCTS);



const initialStateApp = {
  ordersData:[],
  orderProducts :{},
  deliveredOrders : [],
  productsCounts : {},
  evaluatedProducts : [],
  currentStatus: -1,
  changedStatus:0,
  orderConfirmId : null,
  isConfirmed : false,
  orderId:null
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
export const orderEvaluateId = (id) => (dispatch) => {

  
  dispatch(getEvaluateProductId(id));

}

export const orderConfirm = (bool) => (dispatch) => {

  
  dispatch(changeConfirmed(bool));

}
 export const getProductQuantity = (val,obj) => (dispatch) => {
    
      dispatch(getProductsCount({
        [val]:obj
      }));
};
export const emptyOrders = () => (dispatch) => {
  dispatch(fetchOrders([]));
}

export const fetchUserOrders = (id) => async(dispatch) => {
  try {
    const data = await (await fetch(`${root}/api/package/user/${id}`)).json()
    dispatch(fetchOrders(data));
  } catch (e) {
    console.log('error from orderDuck', e)
  }
};
export const fetchProductsByOrderId = (id) => async(dispatch) => {
  try {
    const data = await (await fetch(`${root}/api/package/${id}`)).json()
    dispatch(getEvaluateProducts(data));
    //console.log("🚀 ~ file: orderDuck.js:110 ~ fetchProductsByOrderId ~ data:", data)
  } catch (e) {
    console.log('error from orderDuck', e)
  }
};
export const fetchUserOrdersByStatus = (id,status) => async(dispatch) => {
  try {
    const data = await (await fetch(`${root}/api/package/delivered/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        status
      })
    })).json()
    dispatch(fetchOrders(data));
    console.log("🚀 ~ file: orderDuck.js:95 ~ fetchUserOrdersByStatus ~ data:", data)
  } catch (e) {
    console.log('error from orderDuck', e)
  }
};

export const fetchProductsByOrder = (val, arr) => (dispatch) => {
  if (arr) {
    fetch(`${root}/package/product/${arr}`) 
    .then((res) => res.json())
    .then((res) => {
      
      dispatch(fetchProducts({
        [val]:res
      }));
    })
    .catch((e) => console.log('error from orderDuck', e));
    
  }

};


export const changeOrderStatus = (id, userId, status) => async(dispatch) => {
    try {
      const res = await (await fetch(`${root}/api/package/status/${id}`, {
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status,
          userId
        })
      })).json();
      //dispatch(changeOrderForConfirm(res));
      console.log(res);
      
      dispatch(fetchOrders(res));
    } catch (e) {
      console.log('error from orderDuck', e)
    }

};
export const fetchDeliveredOrdersByUser = (id) => (dispatch) => {

  //console.log(id, status);
  id &&
    fetch(`${root}/package/delivered/${id}`) 
    .then((res) => res.json())
    .then((res) => {
      
       dispatch(getDeliveredOredersByUser(Object.values(getUserOrdersFromArray(res))));
      // dispatch(orderConfirm(true));
      
    })
    .catch((e) => console.log('error from orderDuck', e));

};
export const fetchDeletedOrder = (user_id,order_id) => async(dispatch) => {
  try {
    const data = await (await fetch(`${root}/api/package/delete`, {
      method: "DELETE",
      headers:{
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id,
        order_id

      })
    })).json();
    console.log(data);
    
    dispatch(fetchOrders(data))
  } catch (e) {
    console.log('error from orderDuck', e)
  }
}

export const getOrderStatus = (id) => (dispatch) => {
  dispatch(getCurrentStatus(id))
}




const OrderDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
        return {
          ...state,
          ordersData: action.payload,
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
    case EVALUATE_PRODUCT_ID:
      return{
        ...state,
        orderId : action.payload
      } 
    case EVALUATE_PRODUCTS:
      return{
        ...state,
        evaluatedProducts : action.payload
      } 
    case CONFIRMED:
      return{
        ...state,
        isConfirmed : action.payload
      } 
    case DELETE_ID:
      return{
        ...state,
        orderIdForDelete : action.payload
      } 
    case DELIVERED_ORDERS_BY_USER:
      return{
        ...state,
        deliveredOrders : action.payload
      } 
    case CHANGE_ORDER_CONFIRMED_ID:
      
      return{
        ...state,
        orderConfirmId : action.payload
      } 
      
    default:
      return state;
  }
};

export default OrderDuck;
