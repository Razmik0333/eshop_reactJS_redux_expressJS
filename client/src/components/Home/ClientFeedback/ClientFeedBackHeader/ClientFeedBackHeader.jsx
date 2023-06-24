import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLatestReviewsSelector, getReviewIdSelector } from '../../../../helpers/reduxSelectors';
import { changeReviewId } from '../../../../redux/ducks/reviewDuck';

export default function ClientFeedBackHeader() {
     const  dispatch = useDispatch();
     const latestReviews = useSelector(getLatestReviewsSelector);
     const reviewId = useSelector(getReviewIdSelector)

     const setReviewId = (e) => {
          console.log(e.target.dataset.id);
          dispatch(changeReviewId(e.target.dataset.id))
     }
  return (
     <div className="client__feedback__header">
          <p className="client-feedback-header">
               CLIENT FEEDBACK
          </p>
          <div className="client__feedback_line__circles">
               <div className="client__feedback__line"></div>



               <div className="circles">
                    {
                         latestReviews.map((_, pos) => {
                              return <div className={`circle ${pos === +reviewId ? `active`:``}`} 
                                   data-id={`${pos}`} 
                                        onClick={setReviewId} 
                                             key={`clientFeedBackHeader_${pos}`}></div>
                         })
                    }
                    

               </div>
          </div>
     </div>
  )
}
