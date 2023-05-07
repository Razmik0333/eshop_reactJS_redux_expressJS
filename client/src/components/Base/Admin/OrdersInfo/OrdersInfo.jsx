import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminOrderSelector, getUserId } from '../../../../helpers/reduxSelectors';
import { fetchOrdersList } from '../../../../redux/ducks/adminOrderDuck';


import OrdersInfoHeader from './OrdersInfoHeader';

import '../admin/styles/_orders-info.scss';
import OrdersInfoItem from '../AdminOrders/OrdersInfoItem/OrdersInfoItem';

function OrdersInfo() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     
     useEffect(() => {
          dispatch(fetchOrdersList(userId));
          
     }, []);

     const ordersList = useSelector(adminOrderSelector);
     const filteredOrders = ordersList.filter(item => +item?.user_status === 0)
     return (
          <div className="orders__info">
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
