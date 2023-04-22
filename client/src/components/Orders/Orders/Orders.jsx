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
     const keys = Object.keys;
     const values = Object.values;
     useEffect(() => {
          dispatch(fetchUserOrders(userData?.id));
          dispatch(getOrderStatus(-1))
     }, []);
     const orders = useSelector(getUserOrders);
     const statusIndex = useSelector(getStatusIndex);
     console.log("🚀 ~ file: Orders.jsx:40 ~ Orders ~ statusIndex", statusIndex)
     const isConfirmed =  useSelector(isConfirmedSelector);
     const userObject = getOrdersFromStatus(orders, statusIndex);
     
     const ordersUserObject = getUserOrdersFromArray(userObject, statusIndex);
     useEffect(() => {
          setIsLoad(false)
          const id = setTimeout(() => {
               dispatch(clearOrders());
               //debugger;
               if (!checkEmptyObject(ordersUserObject)) {
                    dispatch(fetchOrderData(ordersUserObject))
                    setIsLoad(true);
                    
               }else{
                    setIsLoad(true)
               }

          }, 1500);
          return () => {
               clearTimeout(id)
          }
          
     },[orders.length,statusIndex, isConfirmed]);     
     const userProducts = useSelector(getUserProducts);
     const ordersKeys = sortDesc(keys(userProducts));
     const ordersValues = sortDesc(values(userProducts));
     const productQuantity = sortDesc(values(useSelector(getProductsCounts)));
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
                         ordersKeys.length ?
                              ordersKeys.map((_, ind) => {
                                   return <div className="order-item" key={`order_${ind}`}>
                                        <OrderLists 
                                             ind={ind}
                                             values={ordersValues[ordersKeys.length - 1 - ind]}
                                             counts = {productQuantity[ordersKeys.length - 1 - ind]}
                                        />
                                   </div>
                              })
                         : <>Տվյալները բացակայում են</>
                         
                    }
                    </> : <Loader />
               }
               </div>
          </div>
     </>
     
}
export default Orders;
