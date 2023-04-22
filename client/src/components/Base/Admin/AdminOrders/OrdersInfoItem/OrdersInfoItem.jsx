import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentOrder, currentOrderId, fetchOrderItem } from "../../../../../redux/ducks/adminOrderDuck";
import {  getUserId, modalCloseSelector } from "../../../../../helpers/reduxSelectors";
import ModalOrderDelete from "../../../Modal/ModalOrderDelete";
import { changeModal } from "../../../../../redux/ducks/configsDuck";

import { getStatus } from "../../../../../helpers/functions/functions";


function OrdersInfoItem({order}) {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId)
     const modalIsClose = useSelector(modalCloseSelector);
     const getOrderId = (e) => {
          //dispatch(clearCurrentOrder());
          //console.log(e.target.dataset.id);
          dispatch(currentOrderId(e.target.dataset.id))
     }
     const deleteOrderItem = (e) => {
          dispatch(changeModal(true))
          dispatch(currentOrderId(e.target.dataset.id))
      
     }
     
     return (
          <>
          {
               modalIsClose ? <ModalOrderDelete message={'Դուք Ցնկանում եք ջնջլ տվյալ ապրանքը'} /> : <></>
          }         
          <div className="order__item__info">
               <div className="order__item__data__info">
                    <input type="checkbox"/>
               </div>
               <div className="order__item__data__info">
                    {order?.id}
               </div>
               <div className="order__item__data__info">
                    {order?.user_name}
               </div>
               <div className="order__item__data__info">
                    {order?.user_phone}
               </div>
               <div className="order__item__data__info">
                    {order?.user_comment}
               </div>
               <div className="order__item__data__info">
                    {order?.user_price}

               </div>
               <div className="order__item__data__info">
                    {

                         <div className={`status__order ${getStatus(+order?.user_status)?.status}`}>
                              {
                                   getStatus(+order?.user_status)?.title
                                   }
                         </div>
                    }

               </div>
               


               <div className="order__item__data__info">
                    <NavLink 
                         to={`/admin/order/update/page`} 
                         data-id={`${order?.id}`} 
                         onClick={getOrderId}
                         className="link__action"
                         >
                          Update

                    </NavLink>
               </div>
               <div className="order__item__data__info">
                   <NavLink to={`#`} data-id={`${order?.id}`}
                     onClick={deleteOrderItem}
                    className="link__action"
                   >
                    Delete
                   </NavLink>
               </div>
          </div>
          </>
        
     )    
}

export default OrdersInfoItem;
