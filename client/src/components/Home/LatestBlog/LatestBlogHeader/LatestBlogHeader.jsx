import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentLanguageDataSelector, getLatestReviewsSelector, getReviewIdSelector } from '../../../../helpers/reduxSelectors'
import { changeReviewId } from '../../../../redux/ducks/reviewDuck'

export default function LatestBlogHeader() {
     const dispatch = useDispatch();
     const numberReviewsInBlock = 3;

     const latestReviews = useSelector(getLatestReviewsSelector) 
     const setReviewId = (e) => {
          dispatch(changeReviewId(+e.target.dataset.id))
     }
     const latestReviewsIds = latestReviews.filter((_,pos) => pos % numberReviewsInBlock === 0)
     const reviewId = useSelector(getReviewIdSelector)
     const latestBlogData = useSelector(currentLanguageDataSelector)?.home?.latest_blog;

  return (
          <div className="latest__blog__header">
          <p className="latest-blog-header">
               {latestBlogData?.latest}
          </p>
          <div className="latest__blog_line__circles">
               <div className="latest__blog__line">

               </div>
               <div className="circles">
                    {
                         latestReviewsIds.map((_,pos) => {

                              return <div className={
                                        `circle ${(+pos + 1) === reviewId ? `active` : ``}`
                                   }
                                        onClick={setReviewId} 
                                        data-id={`${(+pos + 1)}`}
                                        key={`latestBlogHeader_${pos}`}
                                   >

                              </div>
                         })
                    }
               </div>
          </div>
     </div>
  )
}
