import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
     getOrderIdDelete,
     getProductsCounts,
     getStatusIndex,
     getUserDataSelector,
     getUserOrders,
     getUserProducts,
     isConfirmedSelector,
     modalCloseSelector
} from "../../../helpers/reduxSelectors";
import { clearOrders,
     fetchOrderData,
     fetchUserOrders,
     fetchUserOrdersByStatus,
     getOrderStatus,
} from "../../../redux/ducks/orderDuck";
import OrderLists from "../OrderLists/OrderLists";
import { checkEmptyObject, getOrdersFromStatus,
     getUserOrdersFromArray,
     sortDesc
} from "../../../helpers/functions/functions";
import "./styles/_orders.scss"
import OrderDetails from "../OrderDetails/OrderDetails";



import Loader from "../../Base/Loader/Loader";

import ModalOrderConfirm from "../../Base/Modal/ModalOrderConfirm";
function Orders() {
      const [isLoad, setIsLoad] = useState(false);
      const modalIsClose = useSelector(modalCloseSelector);
     const dispatch = useDispatch();
     const userData = useSelector(getUserDataSelector);
     const statusIndex = useSelector(getStatusIndex);


     useEffect(() => {
          statusIndex === -1 ? 
          
          dispatch(fetchUserOrders(userData?.id)):
               dispatch(fetchUserOrdersByStatus(userData?.id, statusIndex))
          setIsLoad(true);
     }, [statusIndex]);
     const orders = useSelector(getUserOrders);
     console.log("🚀 ~ file: Orders.jsx:54 ~ Orders ~ orders:", orders)

     console.log("🚀 ~ file: Orders.jsx:44 ~ Orders ~ statusIndex:", statusIndex)


     return <>
          {
               modalIsClose ?
                 <ModalOrderConfirm message={'Դուք Ցանկանում եք հեռացնել Ձեր փաթեթը'} /> 
                 : <></>
                 //<ModalOrderConfirm message={'Դուք ստացե՞լ եք Ձեր փաթեթը'} />

          }
          <div className="products__list">
               <div className="container order__list__container">
                    <OrderDetails />
               {  isLoad ? 
                    <>
                    {
                         orders.length ?
                              orders.map((order, ind) => {
                                   return <div className="order-item" key={`order_${ind}`}>
                                        <OrderLists 
                                             ind={ind}
                                             order={order}
                                        />
                                   </div>
                              })
                         : <>Տվյալները բացակայում են</>
                         
                    }
                    </>
                    
                     : <Loader />
               }
               </div>
          </div>
     </>
     
}
export default Orders;
