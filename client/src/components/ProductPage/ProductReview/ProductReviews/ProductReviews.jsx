import { useSelector } from "react-redux";
import { getReviewsByProductSelector } from "../../../../helpers/reduxSelectors";
import RatingMapping from "../../../Base/RatingMapping/RatingMapping";
import "./styles/_product-reviews.scss";
function ProductReviews() {
     const reviewsByProduct = useSelector(getReviewsByProductSelector);
     console.log("🚀 ~ file: ProductReviews.jsx ~ line 7 ~ ProductReviews ~ reviewsByProduct", reviewsByProduct)
     
     return (
          <>
               
               {
                    reviewsByProduct.length > 0 ?
                         reviewsByProduct.map(review => {
                              return <div className="reviews">
                                   <div className="user__info">
                                        <p className="user__name">{review?.user_name}</p>
                                   </div>
                                   <div className="review__info">
                                        <div className="user__rating">
                                        <RatingMapping rating={review?.rating} />
                                        </div>
                                        <div className="product__name">

                                        </div>
                                        <div className="user__comment">
                                             {review?.review}
                                        </div>
                                   </div>
                                   </div>
                              
                         } )
                    : <div className="reviews">Reviews are missing </div>
               }
                    

          </>
     )
}

export default ProductReviews;
