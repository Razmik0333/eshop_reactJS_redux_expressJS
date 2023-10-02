import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hasValueInObject } from "../../../../helpers/functions/functions";
import { currentProductIdSelector,
      currentProductSelector,
      getDeliveredOrdersByUserSelector,
       getUserDataSelector,getReviewByProductIdAndUserId,
        getUserId, 
        modalCloseSelector} from "../../../../helpers/reduxSelectors";
import { changeModal } from "../../../../redux/ducks/configsDuck";
import { fetchReviewByUserAndProduct } from "../../../../redux/ducks/reviewDuck";
import Modal from "../../../Base/Modal/Modal";
import Rating from "../../../Base/Rating/Rating";

function UserReview() {
     const dispatch = useDispatch();
     const currentUserId = useSelector(getUserId);
     const currentProductId = useSelector(currentProductIdSelector);
     const reviewItem = useSelector(getReviewByProductIdAndUserId);
     const [userReview, setUserReview] = useState(reviewItem?.review);
     const [userName, setUserName] = useState(reviewItem?.user_name);
     const [userEmail, setUserEmail] = useState(reviewItem?.user_email);
     useEffect(() => {
          dispatch(fetchReviewByUserAndProduct(currentUserId,currentProductId))
          
     }, []);
     const currentProduct = useSelector(currentProductSelector);

     const deliveredOrders = useSelector(getDeliveredOrdersByUserSelector);
     const modalIsOpen = useSelector(modalCloseSelector);

     const purchacedByUser = hasValueInObject(+currentProduct?.id,deliveredOrders);
     const changeUserReview = (e) => {
          setUserReview(e.target.value)
     }
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
          <>
               {
                    modalIsOpen ? <Modal message={"Review changed"} /> : <></>
               }
               {    
               //     purchacedByUser ? 
                    <div className="product__review__content">
                         <input type="hidden" name="user_id" value={reviewItem?.user_id || 0} onChange={() =>{}} />
                         <input type="hidden" name="product_id" value={reviewItem?.product_id} onChange={() =>{}} />
                         <p className="product__review__info">There are no reviews for this product.</p>
                         <p className="product__review__add"><a href="/">Add a review</a></p>
                         <div className="product__rating__add">
                              <p className="product__review__add">Your rating</p>
                              <div className="rating__info">
                                   <span className="review__bad">Bad</span>
                                   <div className="rating__block" name="rating">
                                        <Rating id={reviewItem?.product_id} rating={reviewItem?.rating} />
                                   </div>
                                   <span className="review__good">Good</span>
                              </div>
                         </div>
                         <div className="product__review__text">
                              <p>Your Review</p>
                              <textarea name="review" id="" cols="30" rows="10" value={userReview} onChange={changeUserReview} >
                                   {userReview}
                              </textarea>
                         </div>
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
                    // : <></>
               }
          </>
     )
}


export default UserReview;
