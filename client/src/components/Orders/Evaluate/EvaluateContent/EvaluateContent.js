import React, { useState } from 'react'
import { getEvaluateSelector, getUserId, productReviewDataSelector } from '../../../../helpers/reduxSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../../../Base/Rating/Rating';
import { root } from '../../../../helpers/constants/constants';
import './styles/_evaluate-content.scss'
import { changeProductReview } from '../../../../redux/ducks/productDuck';
export default function EvaluateContent({product, ind}) {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const productReview = useSelector(productReviewDataSelector)
     const [userReview, setUserReview] = useState(productReview?.[product?.id]?.review);     
     const evaluateOrderId = useSelector(getEvaluateSelector)
     const changeUserReview = (e) => {
          setUserReview(e.target.value);
          dispatch(changeProductReview(
               product?.id,{
                    review : e.target.value
               }
          ))
     }

  return (
     <div className="product__review__content"  >
          <div className="picture__item">
               <img src={`${root}/images/products/${product?.id}.jpg`} alt="" />
          </div>
          <p className="product_desc">
               {product?.descr}
          </p>
          <input type="hidden" name="order_id" value={evaluateOrderId} onChange={() =>{}} />
          <input type="hidden" name="user_id" value={userId} onChange={() =>{}} />
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
          <div className="product__review__picture">
               <input type="file" name={`${product?.id}`} id="" multiple accept="image/jpeg" />
               <div className="product__review__picture__header">Insert Picture</div>
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
