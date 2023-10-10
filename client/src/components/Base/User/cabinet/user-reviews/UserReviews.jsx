import React, { useEffect } from 'react'
import MenuBar from '../menu-bar/MenuBar'
import { fetchReviewsByUser } from '../../../../../redux/ducks/reviewDuck';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewByUserId, getUserId, modalCloseSelector } from '../../../../../helpers/reduxSelectors';
import UserReviewItem from '../user-review-item/UserReviewItem';
import Modal from '../../../Modal/Modal';

export default function UserReviews() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const modalIsClose = useSelector(modalCloseSelector)

     useEffect(() => {
          dispatch(fetchReviewsByUser(userId));
     }, []);
     const getReviewByUser = useSelector(getReviewByUserId)
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
                    getReviewByUser.map((review,pos) => {
                         return <UserReviewItem review={review}  key={`product_item_${pos}`}/>
                    }) 
               }
              
          </div>
          }
       
  </div>
</>   
}
