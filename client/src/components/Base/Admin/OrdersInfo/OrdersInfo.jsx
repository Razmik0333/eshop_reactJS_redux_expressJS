import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminOrderSelector, currentLanguageDataSelector, getUserId } from '../../../../helpers/reduxSelectors';
import { fetchOrdersList } from '../../../../redux/ducks/adminOrderDuck';



import '../admin/styles/_orders-info.scss';
import OrdersInfoItem from '../AdminOrders/OrdersInfoItem/OrdersInfoItem';
import OrdersInfoHeader from './OrdersInfoHeader';

function OrdersInfo() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const ordersChartsLangData = useSelector(currentLanguageDataSelector)?.admin?.orders;

     useEffect(() => {
          dispatch(fetchOrdersList(userId));
          
     }, []);

     const ordersList = useSelector(adminOrderSelector);
     const filteredOrders = ordersList.filter(item => +item?.user_status === 0)
     return (
          <div className="orders__info">
               <div className="orders__info__header">
                    {ordersChartsLangData?.newest_orders}
               </div>
               <OrdersInfoHeader />
               {
                    filteredOrders.map((order, ind) => {
                        return <OrdersInfoItem order = {order} key={`key_${ind}`} />
                    })
               }

     </div>
     )
}
export default OrdersInfo;
