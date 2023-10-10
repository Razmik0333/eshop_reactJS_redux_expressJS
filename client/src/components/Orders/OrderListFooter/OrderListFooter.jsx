import { useDispatch, useSelector } from "react-redux";
import { getOrdersFromStatus } from "../../../helpers/functions/functions";
import { currentLanguageDataSelector, getStatusIndex, getUserOrders } from "../../../helpers/reduxSelectors";
import { changeModal } from "../../../redux/ducks/configsDuck";
import { orderConfirmId, orderEvaluateId } from "../../../redux/ducks/orderDuck";
import "./styles/_order-list-footer.scss";
import { NavLink } from "react-router-dom";

function OrderListFooter({ind}) {
     const dispatch = useDispatch();
     const orderConfirm = useSelector(currentLanguageDataSelector)?.order?.header;
     const statusIndex = useSelector(getStatusIndex);
     const confirmOrder = (e) => { 
          dispatch(changeModal(true));         
          dispatch(orderConfirmId(e.target.dataset.id));         
     }
     const changeCurrentOrder = (e) => {
         dispatch(orderEvaluateId(e.target.dataset.id));
          
     }
     const orders =  useSelector(getUserOrders);
     const userObject = getOrdersFromStatus(orders, statusIndex);
     return (
          <>
               <button data-id={userObject[ind]?.id}  className={statusIndex === 3 || statusIndex === 4 ?  "confirm_receipt" : 'confirm_receipt_active'}
               onClick={confirmOrder}
               disabled={statusIndex === 3 || statusIndex === 4}
               >
                    {orderConfirm?.confirm}
               </button>
               {
                    statusIndex === 3 && 
                   <NavLink to={"/orders/evaluate"}
                   data-id = {userObject[ind]?.id}
                    onClick={changeCurrentOrder}>
                         <button data-id = {userObject[ind]?.id} className="confirm_receipt_active">
                         {orderConfirm?.review}
                         </button>
                   </NavLink>
               }
          </>
     )
}

export default OrderListFooter;
