import React from 'react'
import RatingMapping from '../../../Base/RatingMapping/RatingMapping'
import '../ProductReviewItem/_product-review-item.scss';
import { root } from '../../../../helpers/constants/constants';
export default function ProductReviewItem({review}) {
     console.log(review);
  return (
     <div className="reviews">
     <div className="user__info">
          <p className="user__name">{review?.user_name}</p>
     </div>
     <div className="review__info">
          <div className="user__rating">
          <RatingMapping rating={review?.rating} />
          </div>
          <div className="user__comment">
               {review?.review}
          </div>
     </div>
     <div className="review_pictures">
          {
               review?.pictures.map(item => {
                    return <img src={`${root}/images/reviews/${review?.user_id}/${review?.order_id}/${review?.product_id}/${item}`} alt="" />
               })
          }
     </div>
     </div>
  )
}
