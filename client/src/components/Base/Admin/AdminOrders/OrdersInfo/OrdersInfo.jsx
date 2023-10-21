import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminOrderIsDeletedSelector, adminOrderSelector, currentLanguageDataSelector, getUserId } from "../../../../../helpers/reduxSelectors";
import { fetchOrdersList } from "../../../../../redux/ducks/adminOrderDuck";

import OrdersInfoItem from "../OrdersInfoItem/OrdersInfoItem";
import "../styles/_orders-info.scss"
import OrdersInfoHeader from "../../OrdersInfo/OrdersInfoHeader";

function OrdersInfo() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const isDeleted = useSelector(adminOrderIsDeletedSelector);
     const ordersChartsLangData = useSelector(currentLanguageDataSelector)?.admin?.orders;

     useEffect(() => {
          dispatch(fetchOrdersList(userId));
          
     }, [isDeleted]);

     const ordersList = useSelector(adminOrderSelector);
     
     return (
          <>
          <div className="order__info__block">
               <div className="orders__info__header">
                   {ordersChartsLangData?.all_orders}
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
