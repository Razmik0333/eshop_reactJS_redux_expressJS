import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviewList } from '../../../../../redux/ducks/adminReviewDuck';
import { adminReviewListSelector, currentLanguageDataSelector } from '../../../../../helpers/reduxSelectors';
import ReviewsInfoHeader from './ReviewsInfoHeader';
import AdminReviewsInfoItem from './AdminReviewsInfoItem';
import "../styles/_review-info.scss";
export default function AdminReviewsInfo() {
     const dispatch = useDispatch();
     const reviewsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.reviews;
     console.log("🚀 ~ AdminReviewsInfo ~ reviewsInfoLangData:", reviewsInfoLangData)

     useEffect(() => {
         dispatch(fetchReviewList())
     }, []);
     const reviewList = useSelector(adminReviewListSelector)
     return (
      <div className="review__info">
           <div className="review__info__header">
                {reviewsInfoLangData?.all_reviews }
           </div>
           <ReviewsInfoHeader />
           {
               reviewList.map(( review, ind) => {
                    return <AdminReviewsInfoItem review = {review} key={`key_${ind}`} />
                })
           }

 </div>
 )
}
