import React, { useEffect, useRef, useState } from 'react';
import "./styles/_review-reply.scss";
import { useDispatch, useSelector } from 'react-redux';
import { adminCurrentReviewSelector, adminReviewIdSelector } from '../../../../../helpers/reduxSelectors';
import { changeCurrentReview, fetchReviewById } from '../../../../../redux/ducks/adminReviewDuck';
import ReviewReplyFooter from './ReviewReplyFooter';
import { root } from '../../../../../helpers/constants/constants';
import { changeModal } from '../../../../../redux/ducks/configsDuck';
export default function ReviewReply() {
     const dispatch = useDispatch();
     const [reviewReply, setReviewReply] = useState("");
     const [reviewUpdated, setReviewUpdated] = useState(false);

     const formRef = useRef(null);
     const reviewId = useSelector(adminReviewIdSelector);
     useEffect(() => {
           dispatch(fetchReviewById( reviewId));
     }, []);
     const changeReply = (e) => {
          setReviewReply(e.target.value);
          
     }
     const currentReview = useSelector(adminCurrentReviewSelector)

     const handleSubmit = async(e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          
          await fetch(`${root}/api/admin/review/reply/${reviewId}`, {
               method: 'POST',

               body: new URLSearchParams(data),    
          })
          .then(res => res.json())
          .then(res => {
               console.log(res);
               dispatch(changeCurrentReview(res))
               setReviewUpdated(true)
               
          //     setIsUpdated(res);
          //     dispatch(changeModal(true));          
          }).catch(e => console.log("error", e))
     }
     return <>

     <div className="review__form__container">
          <form onSubmit={handleSubmit} ref={formRef}>
               <div className="form__items">
                   <div className="form__item">
                         <div className="form__item__header">Review Number</div>
                         <input 
                              type="text" 
                              id="" 
                              placeholder="Enter  Description" 
                              value={currentReview?.id}
                              disabled
                         />
                    </div>
                   <div className="form__item">
                         <div className="form__item__header">Customer Name</div>
                         <input 
                              type="text" 
                              id="" 
                              placeholder="Enter  Description" 
                              value={currentReview?.user_name}
                              disabled
                         />
                    </div>
                    <div className="form__item">
                         <div className="form__item__header">Order Number</div>
                         <input 
                              type="text" 
                              id="" 
                              placeholder="Enter  Description" 
                              value={currentReview?.order_id}
                              disabled

                         />
                    </div>
                    <div className="form__item">
                         <div className="form__item__header">Product Number</div>
                         <input 
                              type="text" 
                              id="" 
                              placeholder="Enter  Description" 
                              value={currentReview?.product_id}
                              disabled

                         />
                    </div>
                    <div className="form__item">
                         <div className="form__item__header">Rating</div>
                         <input 
                              type="text" 
                              id="" 
                              placeholder="Enter  Description" 
                              value={currentReview?.rating}
                              disabled

                         />
                    </div>
                    <div className="form__item">
                         <div className="form__item__header">Customer Comment</div>
                         <textarea 
                              type="text" 
                              id="" 
                              placeholder="Enter  Your Text" 
                              value={currentReview?.review}
                              disabled

                         >
                         
                         </textarea>
                    </div> 
                    <div className="form__item">
                         <div className="form__item__header">Review Reply</div>
                         {
                              reviewUpdated ? <textarea 
                              type="text" 
                              name="reply" 
                              id="" 
                              placeholder="Enter  Your Text"
                              onChange={changeReply}
                              value={reviewReply}
                              disabled
                         /> : <textarea 
                              type="text" 
                              name="reply" 
                              id="" 
                              placeholder="Enter  Your Text"
                              onChange={changeReply}
                         />
                         }
                         
                         
                         

                   </div> 
                    <div className="form__item">
                         <ReviewReplyFooter />
                         
                    </div> 
                    
               </div>  
          </form>
     </div>

     
     
</>
}
