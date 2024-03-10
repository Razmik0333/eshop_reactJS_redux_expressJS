import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { currentOrderId } from "../../../../../redux/ducks/adminOrderDuck";
import { currentLanguageDataSelector, getCurrentLanguageSelector, modalCloseSelector } from "../../../../../helpers/reduxSelectors";
import ModalOrderDelete from "../../../Modal/ModalOrderDelete";
import { changeModal } from "../../../../../redux/ducks/configsDuck";

function AdminReviewsInfoItem({review}) {
     const dispatch = useDispatch();
     const reviewInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.orders;
     const currentLang = useSelector(getCurrentLanguageSelector); 
     const modalIsClose = useSelector(modalCloseSelector);
     const getOrderId = (e) => {
          dispatch(currentOrderId(e.target.dataset.id))
     }
     const deleteOrderItem = (e) => {
          dispatch(changeModal(true));
          dispatch(currentOrderId(e.target.dataset.id));
     }
     return (
          <>
          {
               modalIsClose ? <ModalOrderDelete message={'Դուք Ցնկանում եք ջնջլ տվյալ ապրանքը'} /> : <></>
          }         
          <div className="review__item__info">
               <div className="review__item__data__info">
                    <input type="checkbox"/>
               </div>
               <div className="review__item__data__info">
                    {review?.id}
               </div>
               <div className="review__item__data__info">
                    {review?.user_name}
               </div>
               <div className="review__item__data__info">
                    {review?.order_id}
               </div>
               <div className="review__item__data__info">
                    {review?.product_id}
               </div>
               <div className="review__item__data__info">
                    {review?.review}
               </div>
               <div className="review__item__data__info">
                    <div className="rating">{review?.rating}</div>
               </div>
               <div className="review__item__data__info">
                    <NavLink 
                         to={`/admin/review/update/page`} 
                         data-id={`${review?.id}`} 
                         onClick={getOrderId}
                         className="link__action"
                         >
                         {
                              reviewInfoLangData?.actions?.update
                         }
                    </NavLink>
               </div>
               <div className="review__item__data__info">
                   <NavLink to={`#`} data-id={`${review?.id}`}
                    onClick={deleteOrderItem}
                    className="link__action"
                   >
                    {reviewInfoLangData?.actions?.delete}
                   </NavLink>
               </div>
          </div>
          </>
        
     )    
}

export default AdminReviewsInfoItem;
