import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EvaluateContent from './EvaluateContent/EvaluateContent';
import { getEvaluateProductsSelector, getEvaluateSelector, getReviewByProductIdAndUserId, getUserDataSelector, modalCloseSelector, productReviewDataSelector } from '../../../helpers/reduxSelectors';
import { useState } from 'react';
import { changeModal } from '../../../redux/ducks/configsDuck';
import { fetchProductsByOrderId } from '../../../redux/ducks/orderDuck';
import { useEffect } from 'react';
import { root } from '../../../helpers/constants/constants';
import { clearProductReview } from '../../../redux/ducks/productDuck';
import Modal from '../../Base/Modal/Modal';
import { useNavigate } from 'react-router-dom';

export default function Evaluate() {
     const dispatch = useDispatch();
     const navigate = useNavigate()
     const reviewItem = useSelector(getReviewByProductIdAndUserId);
     const currentUser = useSelector(getUserDataSelector);
     const modalIsClose = useSelector(modalCloseSelector);

     const [userName, setUserName] = useState(currentUser?.name);
     const [userEmail, setUserEmail] = useState(currentUser?.email);
     const evaluateOrderId = useSelector(getEvaluateSelector)
     console.log("🚀 ~ file: Evaluate.jsx:19 ~ Evaluate ~ evaluateOrderId:", evaluateOrderId)
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
     const productReview = useSelector(productReviewDataSelector)
     console.log("🚀 ~ file: Evaluate.jsx:43 ~ Evaluate ~ productReview:", productReview)
     const changeUserName = (e) => {
          setUserName(e.target.value)
     }
     const changeUserEmail = (e) => {
          setUserEmail(e.target.value)
     }
     const handleSendReview = async(e) => {

          await fetch(`${root}/api/product/evaluate`, {
               method: 'POST',
               headers: {
                    "Content-Type":"application/json"
               },
               body: JSON.stringify({
                    review:productReview,
                    orderId:evaluateOrderId,
                    user : {
                         userId: currentUser?.id,
                         userName,
                         userEmail
                    }
               })    
          })
          .then(res => res.json())
          .then(res => {
               if( res === '1'){
                    dispatch(clearProductReview());
                    dispatch(changeModal(true))
                    //navigate('/orders')
               }
          })
          .catch (e => console.log('error from orderDuck', e))
     }
  return (
     <>
          {
               modalIsClose ?
                      <Modal message={`ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ ԿԱՐԾԻՔԻ ՀԱՄԱՐ`} /> 
                      : <></>

          }
          <div className="container">
               <div className="product__review">
                    {
                         evaluatedProducts.map(product => {
                         return <EvaluateContent product={product} key={`evaluate_${product?.id}`} />
                         
                         })
                    }
                    <div className="user__info">
                         <input 
                              type="hidden" 
                              name="user_id" 
                              value={currentUser?.id}
                         />
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
                         <button className="continue" onClick={handleSendReview}>CONTINUE</button>
                    </div>

               </div>
          </div>

     </>
  )
}
