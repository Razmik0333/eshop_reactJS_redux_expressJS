import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartSelector, getUserId } from '../../../helpers/reduxSelectors';
import { fetchAddCart, fetchRemoveOnCart, getCartItem, getCartToRemove, getCountOfCart, getModifiedCart, getTotalPrice, getTotalPriceValue } from '../../../redux/ducks/cartDuck';
import { currentProduct } from '../../../redux/ducks/productDuck';
import { root } from '../../../helpers/constants/constants';
import Rating from '../../Base/Rating/Rating';

import './_cartListItem.scss';

function CartListItem({product, text}) {
     const cart = useSelector(getCartSelector);
     const [count, setCount] = useState(product?.quantity);
     const userId = useSelector(getUserId);
     const dispatch = useDispatch();
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
                              {product.descr}
                         </NavLink>
                    </p>
               <div className="product-prices">
                    {
                         <span className="product-price new-price">
                         {`${product.cost * (1 - product.discount / 100)}Դ X ${product?.quantity}`}
                         </span> 
                    }
                    
               </div>
               <Rating rating={product.rating}  />

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
                         <button className="product-button button-favorite"></button>
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
