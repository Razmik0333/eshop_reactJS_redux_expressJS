import { useSelector } from "react-redux";
import { getReviewsByProductSelector } from "../../../../helpers/reduxSelectors";
import "./styles/_product-reviews.scss";
import ProductReviewItem from "../ProductReviewItem/ProductReviewItem";
import RatingMapping from "../../../Base/RatingMapping/RatingMapping";
import ProductReviewCounts from "../ProductReviewCounts/ProductReviewCounts";
function ProductReviews() {
     const reviewsByProduct = useSelector(getReviewsByProductSelector);
     
     return (
          <>

               {

                    <ProductReviewCounts />

               }

               {
                    <div>
                    {
                         reviewsByProduct.length > 0 ?
                              reviewsByProduct.map((review,pos) => {
                              return  <ProductReviewItem review={review} key={`review_item_${pos}`} />
                                   
                              } )
                         : <div className="reviews">Reviews are missing </div>}
                    </div>
               }
                    

          </>
     )
}

export default ProductReviews;
