import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCartSelector, getCurrentCurrencySelector, getCurrentLanguageSelector, getUserId, getWishListDataSelector } from '../../../helpers/reduxSelectors';
import { fetchAddCart, fetchRemoveOnCart } from '../../../redux/ducks/cartDuck';
import { currentProduct } from '../../../redux/ducks/productDuck';
import { root } from '../../../helpers/constants/constants';
import RatingMapping from '../../Base/RatingMapping/RatingMapping';
import { getNewCurrency, numInArray } from '../../../helpers/functions/functions';
import { deleteWishListItem, fetchAddWishList } from '../../../redux/ducks/wishListDuck';

import './_cartListItem.scss';

function CartListItem({product, text}) {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const cart = useSelector(getCartSelector);
     const discountedPrice = product.cost *(1 - product.discount / 100);
     const currentCurrency = useSelector(getCurrentCurrencySelector);

     const [count, setCount] = useState(product?.quantity);
     const userId = useSelector(getUserId);
     const wishListData = useSelector(getWishListDataSelector);
     const currentLanguage = useSelector(getCurrentLanguageSelector);

     const wishListIds = wishListData.map(item => item?.id);
     const changeCurrentProduct = (e) => {
          dispatch(currentProduct(e.target.dataset.id))
     }
     const addQuantity = (e) => {
          const inc =  ++e.target.dataset.quantity;
          setCount(inc);
          dispatch(fetchAddCart(userId ,{
               [e.target.dataset.id] : 1
          }))
     }
     const subQuantity = (e) => {
          if (+e.target.dataset.quantity > 1 ) {
               const inc =  --e.target.dataset.quantity;
               setCount(inc);
               dispatch(fetchAddCart(userId ,{
                    [e.target.dataset.id] : -1
               }))
          }else{
               setCount(1);
          }
     }
     const changeDeletedId = (e) => {
          dispatch(fetchRemoveOnCart(userId, e.target.dataset.product))
     }
     const addProductToWishList = (e) => {
          const target = e.target; 
          userId ? 
          (
               numInArray(wishListIds,+target.dataset.id) ? 
               dispatch(fetchAddWishList(userId, +target.dataset.id)):
                    dispatch(deleteWishListItem(userId, +target.dataset.id))
          )
          : navigate('/login')

     }
     return (
          
           <div className="product__list">
               <div className="sale">
               {text?.sale}
               </div>
               <div className="product-pictures">
               <img src={`${root}/images/products/${product.id}.jpg`} alt="" />

               </div>
               <div className="product-details">
                    <p className="product-name">
                         <NavLink to={`/product/${product.id}`}
                         className="product-link" 
                         data-id={product.id}
                         onClick={changeCurrentProduct}>
                              {
                                    
                                   currentLanguage === 'am' ? product?.descr : 
                                        currentLanguage === 'en' ? product?.descr_en :
                                        product?.descr_ru
                                   
                    
                                   }
                         </NavLink>
                    </p>
               <div className="product-prices">
                    {
                         <span className="product-price new-price">
                         {`${getNewCurrency(currentCurrency, discountedPrice).value}
                                   ${getNewCurrency(currentCurrency, discountedPrice).char} X ${product?.quantity}`}
                         </span> 
                    }
                    
               </div>
               <RatingMapping rating={product.rating}  />

               <div className="product-options">
                    <div className="product-description">
                         {
                              product['main']
                         }
                    </div>
                    <div className="product-quantity">
                         <button
                              className="quantity__button remove"
                              data-quantity={product?.quantity}
                              data-id={product.id}
                              onClick={subQuantity}
                         >-</button>
                         <span 
                              type="text" 
                              name="quantity" 
                              data-quantity={product?.quantity}
                         >{count}</span>
                         <button
                              className="quantity__button add"
                              data-quantity={product?.quantity}
                              data-id={product.id}
                              onClick={addQuantity}
                         >+</button>
                         
                    </div>
                    <div className="product-buttons">
                         <button className={`product-button  ${numInArray(wishListIds,product?.id) ? 'button-favorite' : 'button-favorite-full' }`}
                              data-id={`${product?.id}`}
                              onClick={addProductToWishList}
                         ></button>                      
                         <button className="product-button button-compare"></button>
                         <button
                              className="product-button button-delete"
                              data-product={`${product['id']}`}
                              data-price={`-${product.cost * (1 - product.discount / 100)}`}
                              data-count={`${cart[product.id]}`}
                              onClick={changeDeletedId}
                         >
                         </button>
                        
                    </div>
                    
               </div>
               </div>
          </div> 
     )
}
export default CartListItem;
