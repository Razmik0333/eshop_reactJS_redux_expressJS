import { useSelector } from "react-redux";
import { getOrdersFromStatus, getStatus, getNewCurrency } from "../../../helpers/functions/functions";
import { currentLanguageDataSelector, getCurrentCurrencySelector, getStatusIndex, getUserOrders } from "../../../helpers/reduxSelectors";
import "./styles/_order-list-header.scss";

function OrderListHeader({ind, id, status, price}) {
     const statusIndex = useSelector(getStatusIndex)
     const orders =  useSelector(getUserOrders);
     const userObject = getOrdersFromStatus(orders, statusIndex);
     const orderListHeader = useSelector(currentLanguageDataSelector)?.order?.header?.order_item_header;
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     return (
          <div className="order__list__header" >
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
                    <li className="order__list__header__item"></li>
                    
               </ul>
          </div>

          
     )
}

export default OrderListHeader;
