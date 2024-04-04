import React, { useEffect } from 'react'
import ProductReviewCountItem from './ProductReviewCountItem'
import { useDispatch, useSelector } from 'react-redux';
import { currentProductIdSelector, getRatingListSelector } from '../../../../helpers/reduxSelectors';
import { fetchCurrentProductsRatings } from '../../../../redux/ducks/reviewDuck';
import { getMiddleRating, getObjectSize } from '../../../../helpers/functions/functions';

export default function ProductReviewCounts() {
     const dispatch = useDispatch();
     const productId = useSelector(currentProductIdSelector);
     useEffect(() => {
         dispatch(fetchCurrentProductsRatings(productId))
     }, [productId]);
     const ratingCounts = useSelector(getRatingListSelector)
     const middleRating = getObjectSize(ratingCounts) === 0 ? `0.0` : getMiddleRating(ratingCounts)
     return (
               <div className="product__rating__block">
                    <div className="middle__rating">{middleRating}</div>
                    <div className="review__count__block">
                    {   
                         [5, 4, 3, 2, 1].map(item => {
                              return <ProductReviewCountItem ind={item} count={(item in ratingCounts) ? ratingCounts[item]?.count : 0} key={`rating_count_${item}`} />
                         })
                    }

                    </div>
               </div>
     )
}
