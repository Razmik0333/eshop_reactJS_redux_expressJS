import { useDispatch, useSelector } from "react-redux";
import { getOrdersFromStatus, getStatus, getNewCurrency } from "../../../helpers/functions/functions";
import { currentLanguageDataSelector, getCurrentCurrencySelector, getStatusIndex, getUserId, getUserOrders } from "../../../helpers/reduxSelectors";
import "./styles/_order-list-header.scss";
import { changeModal } from "../../../redux/ducks/configsDuck";
import { fetchDeletedOrder, orderDeleteId } from "../../../redux/ducks/orderDuck";

function OrderListHeader({ind, id, status, price}) {
     const statusIndex = useSelector(getStatusIndex)
     const orders =  useSelector(getUserOrders);
     const dispatch = useDispatch();
     const user_id = useSelector(getUserId)
     const userObject = getOrdersFromStatus(orders, statusIndex);
     const orderListHeader = useSelector(currentLanguageDataSelector)?.order?.header?.order_item_header;
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const changeRemoveOrder = (e) => {
          console.log(e.target.dataset.id);
          dispatch(fetchDeletedOrder(user_id, e.target.dataset.id));

     }
     return (
          <div className="order__list__header" >
               <div className="order__info">
                    <ul className="order__list__header__items">
                         <li className="order__list__header__item">
                              {orderListHeader?.number} ։ {id}
                         </li>
                         <li className="order__list__header__item">
                              {orderListHeader?.price} ։ 
                              {`${getNewCurrency(currentCurrency,price)?.value}
                              ${getNewCurrency(currentCurrency,price)?.char}`}
                         </li>
                         <li className="order__list__header__item">
                              {orderListHeader?.status} ։ {getStatus(+status)?.title} 
                         </li>
                         {
                              statusIndex === 4 &&
                              <li className="order__list__header__item remove"
                                   data-id={`${id}`}
                                   onClick={changeRemoveOrder}
                              >
                              {orderListHeader?.remove}
                              </li>
                         }
                         
                    </ul>
               </div>
          </div>

          
     )
}

export default OrderListHeader;
