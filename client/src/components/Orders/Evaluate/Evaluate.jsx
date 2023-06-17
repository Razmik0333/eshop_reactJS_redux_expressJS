import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EvaluateContent from './EvaluateContent/EvaluateContent';
import { getEvaluateProductsSelector, getEvaluateSelector, getReviewByProductIdAndUserId, productReviewDataSelector } from '../../../helpers/reduxSelectors';
import { useState } from 'react';
import { changeModal } from '../../../redux/ducks/configsDuck';
import { fetchProductsByOrderId } from '../../../redux/ducks/orderDuck';
import { useEffect } from 'react';

export default function Evaluate() {
     const dispatch = useDispatch();
     const reviewItem = useSelector(getReviewByProductIdAndUserId);
     const [userName, setUserName] = useState(reviewItem?.user_name);
     const [userEmail, setUserEmail] = useState(reviewItem?.user_email);
     const evaluateOrderId = useSelector(getEvaluateSelector)

     useEffect(() => {
          dispatch(fetchProductsByOrderId(evaluateOrderId));
          //dispatch(fetchReviewByUserAndProduct(currentUserId,product?.id))

     }, []);
     /*{
          products : [
               product_id : {
                    rating,
                    review,
               },
               product_id : {
                    rating,
                    review,
               },
               product_id : {
                    rating,
                    review,
               }
          ]
          user_id,
          name,
          email
     }*/
     const evaluatedProducts = useSelector(getEvaluateProductsSelector);
   
     const changeUserName = (e) => {
          setUserName(e.target.value)
     }
     const changeUserEmail = (e) => {
          setUserEmail(e.target.value)
     }
     const sendReview = (e) => {
          dispatch(changeModal(true));
     }
  return (
     <div className="container">
          {
               evaluatedProducts.map(product => {
                   return <EvaluateContent product={product} key={`evaluate_${product?.id}`} />
                   
               })
          }
          <div className="user__info">
               <input 
                    type="text" 
                    name="user_name" 
                    value={userName}
                    placeholder="Name" 
                    onChange={changeUserName}
               />
               <input 
                    type="email" 
                    name="user_email" 
                    value={userEmail} 
                    placeholder="Email" 
                    onChange={changeUserEmail}
               />
               <button className="continue" onClick={sendReview}>CONTINUE</button>
          </div>
     </div>
  )
}
