import { useSelector } from "react-redux";
import { currentLanguageDataSelector, getReviewsByProductSelector } from "../../../../helpers/reduxSelectors";
import ProductReviewItem from "../ProductReviewItem/ProductReviewItem";
import ProductReviewCounts from "../ProductReviewCounts/ProductReviewCounts";
import "./styles/_product-reviews.scss";
function ProductReviews() {
     const reviewsByProduct = useSelector(getReviewsByProductSelector);
     const productsPageData = useSelector(currentLanguageDataSelector)?.product_page;

     return (
          <>

               {

                    <ProductReviewCounts />

               }

               {
                    <div className="review-block">
                    {
                         reviewsByProduct.length > 0 ?
                              reviewsByProduct.map((review,pos) => {
                              return  <ProductReviewItem review={review} key={`review_item_${pos}`} />
                                   
                              } )
                         : <div className="reviews">{productsPageData?.missing}</div>}
                    </div>
               }
                    

          </>
     )
}

export default ProductReviews;
