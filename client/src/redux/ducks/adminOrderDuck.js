import { createAction } from "../../helpers/redux";
import { root } from "../../helpers/constants/constants";

const ORDERS_LIST = 'adminOrderDuck/ORDERS_LIST';
const CURRENT_ORDER = 'adminOrderDuck/CURRENT_ORDER';
const CURRENT_ORDER_ID = 'adminOrderDuck/CURRENT_ORDER_ID';
const CURRENT_ORDER_INFO = 'adminOrderDuck/CURRENT_ORDER_INFO';
const CURRENT_ORDER_PRODUCTS = 'adminOrderDuck/CURRENT_ORDER_PRODUCTS';
const CURRENT_ORDER_DELETE = 'adminOrderDuck/CURRENT_ORDER_DELETE';
const TIME_OBJECT = 'adminOrderDuck/TIME_OBJECT';
const CLEAR_TIME_OBJECT = 'adminOrderDuck/CLEAR_TIME_OBJECT';


export const getOrdersList = createAction(ORDERS_LIST);
export const getOrderForUpdate = createAction(CURRENT_ORDER);
export const getCurrentOrderId = createAction(CURRENT_ORDER_ID);
export const getCurrentOrderProducts = createAction(CURRENT_ORDER_PRODUCTS);
export const getCurrentOrderInfo = createAction(CURRENT_ORDER_INFO);
export const getCurrentOrderDelete = createAction(CURRENT_ORDER_DELETE);
export const getTimeObject = createAction(TIME_OBJECT);
export const clearTimeObject = createAction(CLEAR_TIME_OBJECT);



const initialStateApp = {
  ordersList: [],
  currentOrderId:null,
  currentOrder:{},
  currentOrderProducts:[],
  currentOrderInfo: null,
  isDeleted: false,
  timeObj : {}
};
export const currentCartItem = () => (dispatch) => {
     dispatch(getOrdersList());
   };
export const currentOrderId = (id) => (dispatch) => {
     dispatch(getCurrentOrderId(id));
   };
export const createYear = (obj) => (dispatch) => {
    dispatch(getTimeObject(obj))
}
export const createMonth = (obj) => (dispatch) => {
  dispatch(getTimeObject(obj))

}
export const clearCurrentOrder = () => (dispatch) => {
  dispatch(getCurrentOrderInfo({}))
}
export const resetIsDeleted = (bool) => (dispatch) => {
  dispatch(getCurrentOrderDelete(bool));
};
export const resetTimeObject = () => (dispatch) => {
    dispatch(clearTimeObject())
}
export const fetchOrdersList = (id) => async(dispatch) => { 
    
  try {
    const data = await (await fetch(`${root}/api/admin/orders/list`)).json();
    dispatch(getOrdersList(data));
  } catch (e) {
    console.log('error from AdminOrderDuck', e)
  }
};
export const fetchOrderItem = (userId, orderId) => async (dispatch) => {
    try {
      const data = await (await fetch(`${root}/api/admin/order/${orderId}`)).json()
      dispatch(getOrderForUpdate(data));
    } catch (e) {
      console.log('error from AdminOrderDuck', e)
    }

};
export const fetchOrderProducts = (orderId) => async (dispatch) => {
    try {
      const data = await (await fetch(`${root}/api/admin/order/products/${orderId}`)).json()
      dispatch(getCurrentOrderProducts(data));
    } catch (e) {
      console.log('error from AdminOrderDuck', e)
    }

};

export const fetchOrdersByString = (arr) => (dispatch) => {
  fetch(`${root}/list/product/${arr}`) 
    .then((res) => res.json())
    .then((res) => {
      
      dispatch(getCurrentOrderInfo(res));
    })
    .catch((e) => console.log('error from productDuck', e));
};

export const fetchOrdersForDelete = (order_id) => async(dispatch) => {
  try {
    const data = await(await fetch(`${root}/api/admin/order/delete`, 
    {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        order_id
      })
    }
    )).json();
    dispatch(getOrdersList(data));
  } catch (e) {
    console.log('error from AdminProductDuck', e)
  }
};


const AdminOrderDuck = (state = initialStateApp, action) => {
  switch (action.type) {
    case ORDERS_LIST:
      return {
        ...state,
        ordersList: action.payload,
      };
    case CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };
    case CURRENT_ORDER_ID:
      return {
        ...state,
        currentOrderId: action.payload,
      };
    case CURRENT_ORDER_INFO:
      return {
        ...state,
        currentOrderInfo: action.payload,
      };
    case CURRENT_ORDER_DELETE:
      return {
        ...state,
        isDeleted: action.payload,
      };
    case TIME_OBJECT:
      return {
        ...state,
        timeObj: {
          ...state.timeObj,
          ...action.payload
        },
      };
    case CLEAR_TIME_OBJECT:
      return {
        ...state,
        timeObj: {},
      };
    case CURRENT_ORDER_PRODUCTS:
      return {
        ...state,
        currentOrderProducts: action.payload,
      };

    default:
      return state;
  }
};

export default AdminOrderDuck;
