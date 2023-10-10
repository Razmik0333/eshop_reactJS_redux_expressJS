import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, getCurrentTabNameSelector, getReviewsByProductSelector } from "../../../../helpers/reduxSelectors";
import { changeTabName } from "../../../../redux/ducks/reviewDuck";

function ProductReviewHeader() {
     const dispatch = useDispatch();
     const user_review_header = useSelector(currentLanguageDataSelector)?.product_page?.review?.header;
     const reviewsByProduct = useSelector(getReviewsByProductSelector)
     const changeCurrentTab = (e) => {
          dispatch(changeTabName(e.target.dataset.tab));
     }
     const tabName = useSelector(getCurrentTabNameSelector)

     return(
          <div className="product__review__header">
               <ul className="product__review__items" onClick={changeCurrentTab}>
                    <li className={`product__review__item ${tabName === 'desc' ? 'active' : ''}`} data-tab="desc">{user_review_header?.description}</li>
                    <li className={`product__review__item ${tabName === 'reviews' ? 'active' : ''}`} data-tab="reviews">{user_review_header?.reviews}({reviewsByProduct.length})</li>
                    <li className={`product__review__item ${tabName === 'spec' ? 'active' : ''}`} data-tab="spec">{user_review_header?.recommendation}</li>
               </ul>
          </div>
     )
}
export default ProductReviewHeader;
