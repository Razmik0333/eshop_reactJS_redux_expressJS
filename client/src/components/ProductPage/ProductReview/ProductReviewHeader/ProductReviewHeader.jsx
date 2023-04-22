import { useDispatch, useSelector } from "react-redux";
import { hasValueInObject } from "../../../../helpers/functions/functions";
import { currentProductSelector, getCurrentTabNameSelector, getDeliveredOrdersByUserSelector, getReviewsByProductSelector } from "../../../../helpers/reduxSelectors";
import { changeTabName } from "../../../../redux/ducks/reviewDuck";

function ProductReviewHeader() {
     const dispatch = useDispatch();
     const currentProduct = useSelector(currentProductSelector);

     const deliveredOrders = useSelector(getDeliveredOrdersByUserSelector);

     const purchacedByUser = hasValueInObject(+currentProduct?.id,deliveredOrders);
     const reviewsByProduct = useSelector(getReviewsByProductSelector)

     const changeCurrentTab = (e) => {
          //console.log(e.target.dataset.tabname);
          dispatch(changeTabName(e.target.dataset.tab));
     }
     const tabName = useSelector(getCurrentTabNameSelector)
     console.log("🚀 ~ file: ProductReviewHeader.jsx ~ line 20 ~ ProductReviewHeader ~ tabName", tabName)
     // const getReviewsByProduct = () => {

     //      dispatch(fetchCurrentProductsReviews(currentProduct?.id))
     // }

     return(
          <div className="product__review__header">
               <ul className="product__review__items" onClick={changeCurrentTab}>
                    {
                         purchacedByUser ?  
                         <li className={`product__review__item ${tabName === 'your review' ? 'active' : ''}`} data-tab="your review">
                                   YOUR REVIEW
                         </li> : <></>
                    }
                    <li className={`product__review__item ${tabName === 'desc' ? 'active' : ''}`} data-tab="desc">DESCRIPTION</li>
                    <li className={`product__review__item ${tabName === 'reviews' ? 'active' : ''}`} data-tab="reviews">REVIEWS ({reviewsByProduct.length})</li>
                    <li className={`product__review__item ${tabName === 'spec' ? 'active' : ''}`} data-tab="spec">SPECIFICATION</li>
               </ul>
          </div>
     )
}
export default ProductReviewHeader;
