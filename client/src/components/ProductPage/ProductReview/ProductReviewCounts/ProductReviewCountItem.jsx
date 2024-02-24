import React from 'react'
import RatingMapping from '../../../Base/RatingMapping/RatingMapping'
import "./styles/_product-review-counts.scss"
import { useSelector } from 'react-redux';
import { getRatingListSelector } from '../../../../helpers/reduxSelectors';
import { getObjectSize } from '../../../../helpers/functions/functions';

export default function ProductReviewCountItem({ind, count}) {
     
     const ratingCounts = useSelector(getRatingListSelector)
     const summRating = getObjectSize(ratingCounts) === 0 ? 0 : Object.values(ratingCounts).reduce((acc, curr) => {      
          acc += curr.count;
          return acc
     }, 0);
     
  return (
     <div className="review__count">

          <RatingMapping rating={ind} />
          <div className="rating__count">
               <div className="rating__count__base">
               
               </div>
               <div className="rating__count__current"
               style={{
                    width: (100 * count) / summRating
               }}
               >
               
               </div>
          </div>
          <span className="rating__count__number">{count}</span>

     </div>
  )
}
