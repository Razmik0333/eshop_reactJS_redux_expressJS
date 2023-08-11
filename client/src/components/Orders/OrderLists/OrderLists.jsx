import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsByOrder } from "../../../redux/ducks/orderDuck";
import OrderListFooter from "../OrderListFooter/OrderListFooter";
import OrderListHeader from "../OrderListHeader/OrderListHeader";
import OrderListItem from "../OrderListItem/OrderListItem";
import "./styles/_order-lists.scss";
function OrderLists({ind,order}) {  
     const orderProducts = order?.user_order;
     console.log("🚀 ~ file: OrderLists.jsx:10 ~ OrderLists ~ orderProducts:", orderProducts)
     const productQuantities = order?.quantities;
     return <div className="orders-list">
          <OrderListHeader 
               ind = {ind} 
               id={order?.id} 
               status={order?.user_status} 
               price = {order?.user_price} />
          {
               orderProducts.map((orderProduct,ind) => {
                    
                    return <div key={`userOrder_${orderProduct['id']}`}>
                         <OrderListItem product={orderProduct} counts = {productQuantities[ind]}  />  
                    </div>
               })
          }
          <OrderListFooter ind = {ind} />
     </div>
     
}

export default OrderLists;
