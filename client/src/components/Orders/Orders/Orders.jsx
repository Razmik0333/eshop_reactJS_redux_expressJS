import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
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
     const keys = Object.keys;
     const values = Object.values;

     useEffect(() => {
          statusIndex === -1 ? 
          
          dispatch(fetchUserOrders(userData?.id)):
          dispatch(fetchUserOrdersByStatus(userData?.id, statusIndex))
          setIsLoad(true);

          //dispatch(getOrderStatus(-1))
     }, [statusIndex]);
     const orders = useSelector(getUserOrders);
     console.log("🚀 ~ file: Orders.jsx:54 ~ Orders ~ orders:", orders)

     console.log("🚀 ~ file: Orders.jsx:44 ~ Orders ~ statusIndex:", statusIndex)
     const isConfirmed =  useSelector(isConfirmedSelector);
     const userObject = getOrdersFromStatus(orders, statusIndex);
     
     //const ordersUserObject = getUserOrdersFromArray(userObject, statusIndex);
     // useEffect(() => {
     //      setIsLoad(false)
     //      const id = setTimeout(() => {
     //           dispatch(clearOrders());
     //           //debugger;
     //           if (!checkEmptyObject(ordersUserObject)) {
     //                dispatch(fetchOrderData(ordersUserObject))
     //                setIsLoad(true);
                    
     //           }else{
     //                setIsLoad(true)
     //           }

     //      }, 1500);
     //      return () => {
     //           clearTimeout(id)
     //      }
          
     // },[orders.length,statusIndex, isConfirmed]);     
     // const userProducts = useSelector(getUserProducts);
     // const ordersKeys = sortDesc(keys(userProducts));
     // const ordersValues = sortDesc(values(userProducts));
     // const productQuantity = sortDesc(values(useSelector(getProductsCounts)));
     return <>
          {
               modalIsClose ?
                 <ModalOrderConfirm message={'Դուք ստացե՞լ եք Ձեր փաթեթը'} /> 
                 : <></>

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
