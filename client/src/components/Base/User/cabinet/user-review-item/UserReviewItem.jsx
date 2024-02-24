import React, { useRef, useState } from 'react'
import "./styles/user-review-item.scss";
import { root } from '../../../../../helpers/constants/constants';
import RatingMapping from '../../../RatingMapping/RatingMapping';
import Rating from '../../../Rating/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId, productReviewDataSelector } from '../../../../../helpers/reduxSelectors';
import { changeReviewData, changeReviewIsDeleted } from '../../../../../redux/ducks/reviewDuck';
import { changeModal } from '../../../../../redux/ducks/configsDuck';
import { useNavigate } from 'react-router-dom';
export default function UserReviewItem({review}) {
     const dispatch = useDispatch();
     const navigate= useNavigate();
     const [changeReview, setChangeReview] = useState(false);
     const [review_value, setChangeReviewValue] = useState(review?.review);
     const [isDeleted, setIsDeleted] = useState(false);
     const reviewRef = useRef(null);
     const userId = useSelector(getUserId);
     const updatedRatingValue = useSelector(productReviewDataSelector);
     const [updatedRating] = Object.values(updatedRatingValue) 
     const changeReviewValue = (e) => {
          setChangeReviewValue(e.target.value)
     }
     const refreshPage = () => {
          navigate(0);
      }
     const changeReviewFieldStatus = (e) => {
          e.preventDefault()
          setChangeReview(!changeReview);
     };
     const handleDelete = async (e) => {
          e.preventDefault();
          const reviewData = await (await fetch(`${root}/api/review/delete/${review.id}`, {
               method : "DELETE",
               headers: {
                    "Content-Type":"application/json"
               },
               body: JSON.stringify(
                    {
                         user_id: userId
     
                    }
               )
          }) ).json();
          dispatch(changeReviewData(reviewData));
          refreshPage();
          setChangeReview(false)
     }
     const handleUpdate = async (e) => {
          e.preventDefault()
          const reviewData = await (await fetch(`${root}/api/review/update/${review.id}`, {
               method : "PUT",
               headers: {
                    "Content-Type":"application/json"
               },
               body: JSON.stringify(
                    {
                         rating: updatedRating.rating,
                         review_value,
                         user_id: userId
     
                    }
               )
          }) ).json();
          dispatch(changeModal(true));

          dispatch(changeReviewData(reviewData));
          setChangeReview(false)
     }
     return (
          <>
               <form method="PUT" className="user__review__item" ref={reviewRef} >
                    <div className="user_product_item">
                         <div className="user_product_picture">
                              <img src={`${root}/images/products/${review.product.id}.jpg`} alt="" />
                         </div>
                         <div className="user_product_content">
                              <p className="user_product_title">{review.product.descr}</p>
                              <div className="user_product_main">{review.product.main}</div>
                              <RatingMapping rating={review.product.rating} />
                         </div>
                         
                         <button 
                              className="delete_button"
                              onClick={handleDelete}
                         >&#x2715;
                         </button>

                    </div>
                    <div className="user__review__content">
                         <p>Ձեր Կարծիքը</p>
                         {
                              <>
                                   <p className="user_review">
                                       { 
                                        changeReview ?
                                        <textarea 
                                             disabled = {!changeReview} 
                                             name="" 
                                             id="" 
                                             cols="30" 
                                             rows="10" 
                                             defaultValue={review.review}  
                                             value={review_value} 
                                             onChange={changeReviewValue}>

                                        </textarea>
                                        :
                                        <p>
                                             {review_value}
                                        </p>
                                        
                                        }
                                   </p>
                                   {
                                        changeReview ? 
                                        <Rating id={review.product.id}  rating={review.rating} />  
                                        :
                                        <RatingMapping rating={review.product.rating} />
                                   }      
                                   
                              </>
                         }
                    {
                         <div className="review_pictures">
                              {
                                   review.pictures.map(picture => {
                                        return <img src={`${root}/images/reviews/${review.user_id}/${review.order_id}/${review.product_id}/${picture}`} alt="" />
                                   })
                              }
                         </div>
                    }
                    </div>
                    <button 
                         className="change_review"
                         onClick={changeReviewFieldStatus}
                    >Փոփոխել</button>
                    <button 
                         type="submit"
                         className="change_review"
                         onClick={handleUpdate}
                    >Պահպանել</button>
               </form>
          </>
     )
}
