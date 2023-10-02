import React, { useEffect } from 'react'
import RatingMapping from '../../../Base/RatingMapping/RatingMapping'
import ProductReviewCountItem from './ProductReviewCountItem'
import { useDispatch, useSelector } from 'react-redux';
import { currentProductIdSelector, currentProductSelector, getRatingListSelector } from '../../../../helpers/reduxSelectors';
import { fetchCurrentProductsRatings, fetchCurrentProductsReviews } from '../../../../redux/ducks/reviewDuck';
import { getMiddleRating, getObjectSize } from '../../../../helpers/functions/functions';

export default function ProductReviewCounts() {
     const dispatch = useDispatch();
     const productId = useSelector(currentProductIdSelector);
     useEffect(() => {
         dispatch(fetchCurrentProductsRatings(productId))
     }, []);
     const ratingCounts = useSelector(getRatingListSelector)
     console.log("🚀 ~ file: ProductReviewCounts.jsx:16 ~ ProductReviewCounts ~ ratingCounts:", ratingCounts)
     const middleRating = getObjectSize(ratingCounts) === 0 ? `0.0` : getMiddleRating(ratingCounts)
     console.log("🚀 ~ file: ProductReviewCounts.jsx:17 ~ ProductReviewCounts ~ middleRating:", middleRating)
     return (
               <div className="product__rating__block">
                    <div className="middle__rating">{middleRating}</div>
                    <div className="review__count__block">
                    {
                              
                         [5, 4, 3, 2, 1].map(item => {
                              return <ProductReviewCountItem ind={item} count={(item in ratingCounts) ? ratingCounts[item].count : 0} key={`rating_count_${item}`} />
                         })
                              

                    }

                    </div>
               </div>
     )
}
