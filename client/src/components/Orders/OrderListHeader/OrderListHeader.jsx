import { useDispatch, useSelector } from "react-redux";
import { getStatus, getNewCurrency } from "../../../helpers/functions/functions";
import { currentLanguageDataSelector, getCurrentCurrencySelector, getStatusIndex, getUserId } from "../../../helpers/reduxSelectors";
import "./styles/_order-list-header.scss";
import { fetchDeletedOrder } from "../../../redux/ducks/orderDuck";
import { getDateTemplate } from "../../../helpers/functions/timerFunctions";

function OrderListHeader({ind, id, status, price, time}) {
     const statusIndex = useSelector(getStatusIndex)
     const dispatch = useDispatch();
     const user_id = useSelector(getUserId)
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
                         <li className="order__list__header__item">
                              {orderListHeader?.time} ։ {getDateTemplate(+time)} 
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
