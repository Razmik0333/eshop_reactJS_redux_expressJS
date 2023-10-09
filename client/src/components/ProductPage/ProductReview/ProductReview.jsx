import { useSelector, useDispatch } from 'react-redux';
import {  getCurrentTabNameSelector, getUserDataSelector } from '../../../helpers/reduxSelectors';
import { root } from '../../../helpers/constants/constants';
import './styles/_product-review.scss';
import { useEffect, useRef } from 'react';
import { fetchDeliveredOrdersByUser } from '../../../redux/ducks/orderDuck';
import ProductReviewHeader from './ProductReviewHeader/ProductReviewHeader';
import UserReview from './UserReview/UserReview';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductReviews from './ProductReviews/ProductReviews';
import ProductSpecification from './ProductSpecification/ProductSpecification';
function ProductReview() {
     const dispatch = useDispatch();
     const formRef = useRef(null);
     const currentUser = useSelector(getUserDataSelector);
     useEffect(() => {
          
          dispatch(fetchDeliveredOrdersByUser(currentUser?.id))
     }, []);
     const tabName = useSelector(getCurrentTabNameSelector)
     
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          await fetch(`${root}/review/create`, {
               method: 'POST',
               body: data,    
          })
          .then(res => res.json())
          .then(res => {
               // setIsCreated(res);
               // dispatch(changeModal(true))
               console.log(res);
          })

     }
     return (
          <div className="product__review">
               <div className="product__review__container container">
                    <form onSubmit={handleSubmit}  ref={formRef}>
                         <ProductReviewHeader />
                         {
                              tabName === 'desc' ? 
                                   <ProductDescription /> : tabName === 'reviews' ? 
                                        <ProductReviews /> : tabName === 'spec' ? 
                                             <ProductSpecification /> :<UserReview />
                         }

                    </form>

               </div>
          </div>
     )
}

export default ProductReview;
