import { useDispatch, useSelector } from "react-redux";
import { getOrdersFromStatus } from "../../../helpers/functions/functions";
import { currentLanguageDataSelector, getStatusIndex, getUserOrders } from "../../../helpers/reduxSelectors";
import { changeModal } from "../../../redux/ducks/configsDuck";
import { changeOrderStatus, orderConfirmId } from "../../../redux/ducks/orderDuck";
import "./styles/_order-list-footer.scss";

function OrderListFooter({ind}) {
     //changeOrderStatus

     const dispatch = useDispatch();
     const orderConfirm = useSelector(currentLanguageDataSelector)?.order?.header;
     console.log("🚀 ~ file: OrderListFooter.jsx:13 ~ OrderListFooter ~ orderConfirm:", orderConfirm)
     const statusIndex = useSelector(getStatusIndex);
     const confirmOrder = (e) => { 
          dispatch(changeModal(true));         
          dispatch(orderConfirmId(e.target.dataset.id));         
                   
          
           console.log(e.target.dataset.id);
     }
     const orders =  useSelector(getUserOrders);
     const userObject = getOrdersFromStatus(orders, statusIndex);
     return (
          <>
               <button data-id={userObject[ind]?.id}  className={statusIndex === 3 ?  "confirm_receipt" : 'confirm_receipt_active'}
               onClick={confirmOrder}
               disabled={statusIndex === 3}
               >
                    {orderConfirm?.confirm}
               </button>
               {
                    statusIndex === 3 && 
                    <button  className="confirm_receipt_active"
                         
                    >
                         {orderConfirm?.review}
                    </button>
               }
          </>
     )
}

export default OrderListFooter;
