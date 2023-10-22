import { useSelector, useDispatch } from 'react-redux';
import {  getCurrentTabNameSelector, getUserDataSelector } from '../../../helpers/reduxSelectors';
import { useEffect } from 'react';
import { fetchDeliveredOrdersByUser } from '../../../redux/ducks/orderDuck';
import ProductReviewHeader from './ProductReviewHeader/ProductReviewHeader';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductReviews from './ProductReviews/ProductReviews';
import ProductSpecification from './ProductSpecification/ProductSpecification';
import './styles/_product-review.scss';
function ProductReview() {
     const dispatch = useDispatch();
     const currentUser = useSelector(getUserDataSelector);
     useEffect(() => {
          dispatch(fetchDeliveredOrdersByUser(currentUser?.id))
     }, []);
     const tabName = useSelector(getCurrentTabNameSelector)
     
     return (
          <div className="product__review">
               <div className="product__review__container container">
                         <ProductReviewHeader />
                         {
                              tabName === 'desc' ? 
                                   <ProductDescription /> : <ProductReviews /> 
                         }


               </div>
          </div>
     )
}

export default ProductReview;
