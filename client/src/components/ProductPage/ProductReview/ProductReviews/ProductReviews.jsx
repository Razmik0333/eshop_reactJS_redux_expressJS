import { useSelector } from "react-redux";
import { currentLanguageDataSelector, getReviewFilterSelector, getReviewSortTypeSelector, getReviewsByProductSelector } from "../../../../helpers/reduxSelectors";
import ProductReviewItem from "../ProductReviewItem/ProductReviewItem";
import ProductReviewCounts from "../ProductReviewCounts/ProductReviewCounts";
import "./styles/_product-reviews.scss";
import ProductReviewSort from "../ProductReviewSort/ProductReviewSort";
import { getReviewsHavePicture, sortingReviews } from "../../../../helpers/functions/functions";
function ProductReviews() {
     const reviewsByProduct = useSelector(getReviewsByProductSelector);
     const sortType = useSelector(getReviewSortTypeSelector)
     const productsPageData = useSelector(currentLanguageDataSelector)?.product_page;
     const sorted = sortingReviews(reviewsByProduct, sortType.type);
     const isFilter = useSelector(getReviewFilterSelector)
     const finishData = isFilter ? getReviewsHavePicture(sorted) : sorted;

     return (
          <>

               {
                    <ProductReviewCounts />
               }
               {
                    <ProductReviewSort />
               }
               {
                    <div className="review-block">
                    {
                         finishData.length > 0 ?
                              finishData.map((review,pos) => {
                                   return  <ProductReviewItem review={review} key={`review_item_${pos}`} />
                                   
                              } )
                         : <div className="reviews">{productsPageData?.missing}</div>}
                    </div>
               }
                    

          </>
     )
}

export default ProductReviews;
