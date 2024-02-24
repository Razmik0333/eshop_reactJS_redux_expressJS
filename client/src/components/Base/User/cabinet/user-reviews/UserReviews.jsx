import React, { useEffect } from 'react'
import MenuBar from '../menu-bar/MenuBar'
import { fetchReviewsByUser } from '../../../../../redux/ducks/reviewDuck';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewByUserId, getReviewIsDeleted, getUserId, modalCloseSelector } from '../../../../../helpers/reduxSelectors';
import UserReviewItem from '../user-review-item/UserReviewItem';
import Modal from '../../../Modal/Modal';

export default function UserReviews() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const modalIsClose = useSelector(modalCloseSelector)
     const getReviewByUser = useSelector(getReviewByUserId)
     console.log("🚀 ~ UserReviews ~ getReviewByUser:", getReviewByUser)
    useEffect(() => {
          dispatch(fetchReviewsByUser(userId));
     }, []);
  return <>
  
  {
               modalIsClose ?
                    <Modal message={'Կարծիքը պահպանված է'} /> 
               : <></>
               }
  <div className="container user_list_container">
       <MenuBar/>
       {
          
          <div className="products-list">
               {
                    getReviewByUser.length > 0 ? 

                    getReviewByUser.map((review,pos) => {
                         return <UserReviewItem review={review}  key={`product_item_${pos}`}/>
                    }) 

                    : <div>ՄԵկնաբանություններ Առկա չեն</div>

               }

               { 
               }
              
          </div>
          }
       
  </div>
</>   
}
