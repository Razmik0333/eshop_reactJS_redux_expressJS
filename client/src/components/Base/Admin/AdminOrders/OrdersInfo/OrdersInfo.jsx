import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminOrderIsDeletedSelector, adminOrderSelector, getUserId } from "../../../../../helpers/reduxSelectors";
import { fetchOrdersList } from "../../../../../redux/ducks/adminOrderDuck";

import OrdersInfoHeader from "../OrdersInfoHeader/OrdersInfoHeader";
import OrdersInfoItem from "../OrdersInfoItem/OrdersInfoItem";
import "../styles/_orders-info.scss"

function OrdersInfo() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const isDeleted = useSelector(adminOrderIsDeletedSelector);

     useEffect(() => {
          dispatch(fetchOrdersList(userId));
          
     }, [isDeleted]);

     const ordersList = useSelector(adminOrderSelector);
     
     return (
          <>
          <div className="order__info__block">
               <div className="orders__info__header">
                    Orders
               </div>

               <div className="orders__info">
                    <OrdersInfoHeader />
                    <div className="orders__item__infos">
                    {
                         ordersList.map((order, ind) => {
                         
                              return <OrdersInfoItem order = {order} key={`order_${ind}`}/>
                         })
                    }
                    </div>
               </div>

          </div>
          </>

     )
}

export default OrdersInfo;
