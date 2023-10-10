import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EvaluateContent from './EvaluateContent/EvaluateContent';
import { getEvaluateProductsSelector, getEvaluateSelector, getUserDataSelector, modalCloseSelector, productReviewDataSelector } from '../../../helpers/reduxSelectors';
import { useState } from 'react';
import { changeModal } from '../../../redux/ducks/configsDuck';
import { fetchProductsByOrderId, getOrderStatus } from '../../../redux/ducks/orderDuck';
import { useEffect } from 'react';
import { changeProductsRating, clearProductReview } from '../../../redux/ducks/productDuck';
import Modal from '../../Base/Modal/Modal';
import { root } from '../../../helpers/constants/constants';

export default function Evaluate() {
     const dispatch = useDispatch();
     const formRef = useRef(null);
     const currentUser = useSelector(getUserDataSelector);
     const modalIsClose = useSelector(modalCloseSelector);

     const [userName, setUserName] = useState(currentUser?.name);
     const [userEmail, setUserEmail] = useState(currentUser?.email);
     const evaluateOrderId = useSelector(getEvaluateSelector)
     useEffect(() => {
          dispatch(fetchProductsByOrderId(evaluateOrderId));
     }, []);

     const evaluatedProducts = useSelector(getEvaluateProductsSelector);
     const productReview = useSelector(productReviewDataSelector)
     const changeUserName = (e) => {
          setUserName(e.target.value)
     }
     const changeUserEmail = (e) => {
          setUserEmail(e.target.value)
     }
     const handleSendReview = async(e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          data.evaluate = {
               review:productReview,
               orderId:evaluateOrderId,
               user : {
                    userId: currentUser?.id,
                    userName,
                    userEmail
               }
          }   
          await fetch(`${root}/api/product/evaluate`, {
               method: "POST",
               body: data
          })
          .then(res => res.json())
          .then(res => {
               if( res === '1'){
                    dispatch(clearProductReview());
                    dispatch(changeModal(true))
                    dispatch(getOrderStatus(4));
                    dispatch(changeProductsRating(Object.keys(data.evaluate.review)))
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
               <form className="product__review" method="POST" ref={formRef} onSubmit={handleSendReview} encType="multipart/form-data">
                    {
                         evaluatedProducts.map((product, pos) => {
                              return <EvaluateContent product={product} ind = {pos}  key={`evaluate_${pos}`} />
                         })
                    }
                    <div className="user__info">
                         <input 
                              type="hidden" 
                              name="user_id" 
                              value={currentUser?.id}
                              onChange={() => {}}
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

               </form>
          </div>

     </>
  )
}
