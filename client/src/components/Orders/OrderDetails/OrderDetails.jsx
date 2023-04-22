import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector } from '../../../helpers/reduxSelectors';
import { getOrderStatus } from '../../../redux/ducks/orderDuck';
import './styles/_order-details.scss'

function OrderDetails() {
     const dispatch = useDispatch();
     const orderHeader = useSelector(currentLanguageDataSelector)?.order?.header;

     const changeStatusIndex = (e) => {
          dispatch(getOrderStatus(+e.target.dataset.status))
     }

     return (
          <div className="details__products__header">
               <div className="products__header__items">
                    <div className="current__category">{orderHeader?.my_orders}</div>
                    <ul className="show__parameters" >
                         {
                              orderHeader?.nav?.map((item, pos) => {
                                   return <li className="show__parameter"
                                        data-status={pos - 1}
                                        onClick={changeStatusIndex}
                                        key={`orderHeader_${pos-1}`}
                                   >
                                   {item}
                                   </li>
                              })
                         
                         }
                    </ul>
               </div>
               <div className="products__header__line">
               </div>
          </div>
     )
}


export default memo(OrderDetails);
