import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestReviews } from '../../../../redux/ducks/reviewDuck';
import { getLatestReviewsSelector, getReviewIdSelector } from '../../../../helpers/reduxSelectors';
import { getTime } from '../../../../helpers/functions/functions';
import { root } from '../../../../helpers/constants/constants';

export default function ClientFeedbackContent() {

     const latestReviews = useSelector(getLatestReviewsSelector) 
     console.log("🚀 ~ file: ClientFeedbackContent.jsx:11 ~ ClientFeedbackContent ~ latestReviews:", latestReviews)
     const reviewId = useSelector(getReviewIdSelector)
     const date = latestReviews[reviewId]?.time_add
     const year = new Date(+date).getFullYear() 
     const month = getTime(new Date(+date).getMonth()+1)
     const day = getTime(new Date(+date).getDate())
     
  return (
     <div className="client__feedback__content">
          <div className="blockquotes">
     
          </div>
          <div className="feedback__text">
          {latestReviews[reviewId]?.review}
          </div>
          <div className="feedback__author">
               <div className="feedback__author__pictures">
                    <img src={`${root}/images/users/${latestReviews?.[reviewId]?.user_id}/${latestReviews?.[reviewId]?.picture}`} alt="" />
               </div>
               <div className="feedback__author__info">
                    <div className="feedback__author__name">
                         {latestReviews[reviewId]?.user_name}
                    </div>
                    <div className="feedback__author__type">
                         {
                              `
                              ${day}-${month}-${year}

                              
                              `
                         }
                    </div>
               </div>
          </div>
     </div>
  )
}
