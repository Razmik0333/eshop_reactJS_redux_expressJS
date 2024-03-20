import React from 'react'
import RatingMapping from '../../../Base/RatingMapping/RatingMapping'
import '../ProductReviewItem/_product-review-item.scss';
import { root } from '../../../../helpers/constants/constants';
import { getDateTemplate } from '../../../../helpers/functions/timerFunctions';
export default function ProductReviewItem({review}) {
  return (
     <div className="reviews">
          <div className="user__block">

               <div className="user__info">
                    {
                         review.avatar.length === 0 ? 
                         <img src={`${root}/images/users/user-avatar.jpg`} alt="avatar" />
                         :
                         <img src={`${root}/images/users/${review?.user_id}/${review?.avatar}`} alt="avatar" />
                    }
                    <div>
                         <p className="user__name">{review?.user_name}</p>
                         <p className="time__review">{getDateTemplate(+review?.time_add)}</p>

                    </div>
               </div>
               <div className="user__rating">
                    <RatingMapping rating={review?.rating} />
               </div>
          </div>
          <div className="review__info">
               
               <div className="user__comment">
                    {review?.review}

               </div>
               {
                    review?.reply && 
                    <div className="review__reply">

                         {
                              
                                        
                                   <div className="reply">
                                        <div className="reply__header">
                                             <p>Կարծիքի պատասխանը</p> 
                                             <span>
                                                  {getDateTemplate(+review?.reply_time)}

                                             </span>
                                        </div>
                                        <div className="reply__body">
                                             {review?.reply}
                                        </div>

                                   </div>              

                              
                         }
                    </div>
               }
               {
                    review?.pictures.map((item,pos) => {
                         return <img src={`${root}/images/reviews/${review?.user_id}/${review?.order_id}/${review?.product_id}/${item}`} alt="" key={`picture_${pos}`} />
                    })
               }
               

          </div>
     </div>
  )
}
