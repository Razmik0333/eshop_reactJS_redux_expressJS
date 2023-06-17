import React, { useEffect, useState } from 'react'
import { currentProductIdSelector, currentProductSelector, getDeliveredOrdersByUserSelector, getEvaluateSelector, getReviewByProductIdAndUserId, getUserId, modalCloseSelector, productReviewDataSelector } from '../../../../helpers/reduxSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByOrderId } from '../../../../redux/ducks/orderDuck';
import { hasValueInObject } from '../../../../helpers/functions/functions';
import Rating from '../../../Base/Rating/Rating';
import { root } from '../../../../helpers/constants/constants';
import { changeModal } from '../../../../redux/ducks/configsDuck';
import './styles/_evaluate-content.scss'
import { fetchReviewByUserAndProduct } from '../../../../redux/ducks/reviewDuck';
import { changeEvaluatedProducts, changeEvaluatedProductsData, changeProductReview } from '../../../../redux/ducks/productDuck';
export default function EvaluateContent({product}) {
     const dispatch = useDispatch();
     const currentUserId = useSelector(getUserId);
     const currentProductId = useSelector(currentProductIdSelector);
     const productReview = useSelector(productReviewDataSelector)
     console.log("🚀 ~ file: Evaluate.jsx:43 ~ Evaluate ~ productReview:", productReview)
     const reviewItem = useSelector(getReviewByProductIdAndUserId);
     console.log("🚀 ~ file: EvaluateContent.js:17 ~ EvaluateContent ~ reviewItem:", reviewItem)
     const [userReview, setUserReview] = useState(productReview?.[product?.id]?.review);     
     //console.log("🚀 ~ file: EvaluateContent.js:17 ~ EvaluateContent ~ userReview:", userReview)
     const currentProduct = useSelector(currentProductSelector);
     const deliveredOrders = useSelector(getDeliveredOrdersByUserSelector);

     const purchacedByUser = hasValueInObject(+currentProduct?.id,deliveredOrders);
     const changeUserReview = (e) => {
          setUserReview(e.target.value);
          dispatch(changeProductReview(
               product?.id,{
                    review : e.target.value
               }))
     }

  return (
     <div className="product__review__content">
          <div className="picture__item">
               <img src={`${root}/images/${product?.id}.jpg`} alt="" />
          </div>
          <input type="hidden" name="product_id" value={product?.id} onChange={() =>{}} />
          <div className="product__rating__add">
               <p className="product__review__add">Your rating</p>
               <div className="rating__info">
                    <span className="review__bad">Bad</span>
                    <div className="rating__block" name="rating"  >
                         <Rating id={product?.id} rating={productReview?.[product?.id]?.rating} />
                    </div>
                    <span className="review__good">Good</span>
               </div>
          </div>
          <div className="product__review__text">
               <p>Your Review</p>
               <textarea name="review" id="" value={userReview} cols="30" rows="10" onInput={changeUserReview} onChange={() => {}} >
                    {userReview}
               </textarea>
          </div>
         
     </div>
  )
}
