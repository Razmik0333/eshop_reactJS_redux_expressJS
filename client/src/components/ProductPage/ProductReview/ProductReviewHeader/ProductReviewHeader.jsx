import { useDispatch, useSelector } from "react-redux";
import { hasValueInObject } from "../../../../helpers/functions/functions";
import { currentLanguageDataSelector, currentProductSelector, getCurrentTabNameSelector, getDeliveredOrdersByUserSelector, getReviewsByProductSelector } from "../../../../helpers/reduxSelectors";
import { changeTabName } from "../../../../redux/ducks/reviewDuck";

function ProductReviewHeader() {
     const dispatch = useDispatch();
     const currentProduct = useSelector(currentProductSelector);
     const user_review_header = useSelector(currentLanguageDataSelector)?.product_page?.review?.header;
     console.log("🚀 ~ file: ProductReviewHeader.jsx:10 ~ ProductReviewHeader ~ user_review_header:", user_review_header)

     const deliveredOrders = useSelector(getDeliveredOrdersByUserSelector);

     const purchacedByUser = hasValueInObject(+currentProduct?.id,deliveredOrders);
     const reviewsByProduct = useSelector(getReviewsByProductSelector)

     const changeCurrentTab = (e) => {
          dispatch(changeTabName(e.target.dataset.tab));
     }
     const tabName = useSelector(getCurrentTabNameSelector)

     return(
          <div className="product__review__header">
               <ul className="product__review__items" onClick={changeCurrentTab}>
                    {
                         purchacedByUser ?  
                         <li className={`product__review__item ${tabName === 'your review' ? 'active' : ''}`} data-tab="your review">
                                   YOUR REVIEW
                         </li> : <></>
                    }
                    <li className={`product__review__item ${tabName === 'desc' ? 'active' : ''}`} data-tab="desc">{user_review_header?.description}</li>
                    <li className={`product__review__item ${tabName === 'reviews' ? 'active' : ''}`} data-tab="reviews">{user_review_header?.reviews}({reviewsByProduct.length})</li>
                    <li className={`product__review__item ${tabName === 'spec' ? 'active' : ''}`} data-tab="spec">{user_review_header?.recommendation}</li>
               </ul>
          </div>
     )
}
export default ProductReviewHeader;
