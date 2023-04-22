import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsByOrder } from "../../../redux/ducks/orderDuck";
import OrderListFooter from "../OrderListFooter/OrderListFooter";
import OrderListHeader from "../OrderListHeader/OrderListHeader";
import OrderListItem from "../OrderListItem/OrderListItem";
import "./styles/_order-lists.scss";
function OrderLists({ind, values,counts}) {   
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchProductsByOrder(values))
     }, []);

     return <div className="orders-list">
          <OrderListHeader ind = {ind} />
          {
               values.map((userOrder,ind) => {
                    
                    return <div key={`userOrder_${userOrder['id']}`}>
                         <OrderListItem product={userOrder} count={counts[ind]} />  
                    </div>
               })
          }
          <OrderListFooter ind = {ind} />
     </div>
     
}

export default OrderLists;
