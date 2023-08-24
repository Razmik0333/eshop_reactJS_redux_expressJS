import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLatestReviewsSelector, getReviewIdSelector } from '../../../../helpers/reduxSelectors'
import { changeReviewId } from '../../../../redux/ducks/reviewDuck'

export default function LatestBlogHeader() {
     const dispatch = useDispatch();
     const latestReviews = useSelector(getLatestReviewsSelector) 
     const setReviewId = (e) => {
          dispatch(changeReviewId(+e.target.dataset.id))
     }
     const reviewId = useSelector(getReviewIdSelector)

  return (
          <div className="latest__blog__header">
          <p className="latest-blog-header">
               LATEST BLOG
          </p>
          <div className="latest__blog_line__circles">
               <div className="latest__blog__line">

               </div>
               <div className="circles">
                    {
                         latestReviews.map((item,pos) => {

                              return (pos +  1 ) % 3 === 0 && 
                              
                                   <div className={
                                        `circle ${(+pos + 1)/3 === reviewId ? `active` : ``}`
                                   }
                                        onClick={setReviewId} 
                                        data-id={`${(+pos + 1)/3}`}
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
