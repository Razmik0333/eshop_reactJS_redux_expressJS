import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartSelector } from '../../../helpers/reduxSelectors';
import { getCartItem, getCartToRemove, getCountOfCart, getModifiedCart, getTotalPrice, getTotalPriceValue } from '../../../redux/ducks/cartDuck';
import { currentProduct } from '../../../redux/ducks/productDuck';
import { root } from '../../../helpers/constants/constants';
import Rating from '../../Base/Rating/Rating';

import './_cartListItem.scss';

function CartListItem({product, text}) {
     const cart = useSelector(getCartSelector);
     const [count, setCount] = useState(cart[product.id]);
     const dispatch = useDispatch();
     const changeCurrentProduct = (e) => {
          dispatch(currentProduct(e.target.dataset.id))
     }
     const addQuantity = (e) => {
          dispatch(getCartItem({
               [e.target.dataset.id] : 1 
          }))
          dispatch(getCountOfCart(1));
          dispatch(getTotalPriceValue(product.cost *(1 - product.discount / 100)));
          setCount(++e.target.dataset.count);
     }
     const subQuantity = (e) => {
          if (+e.target.dataset.count > 1 ) {
               dispatch(getCartToRemove({
                    [e.target.dataset.id] : 1 
               }))
               dispatch(getCountOfCart(-1));
               dispatch(getTotalPriceValue(-(product.cost *(1 - product.discount / 100))));
               setCount(--e.target.dataset.count);
          }else{
               
               setCount(1);
          }
          

     }
     const changeDeletedId = (e) => {
          dispatch(getModifiedCart(e.target.dataset.product));
          dispatch(getTotalPrice(e.target.dataset.price * e.target.dataset.count));
          dispatch(getCountOfCart(-e.target.dataset.count));
     }
     return (
          
           <div className="product__list">
               <div className="sale">
               {text?.sale}
               </div>
               <div className="product-pictures">
               <img src={`${root}/template/images/${product.id}.jpg`} alt="" />

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
                         {`${product.cost * (1 - product.discount / 100)}Դ X ${cart[product.id]}`}
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
                         data-count={cart[product.id]}
                         data-id={product.id}
                         onClick={subQuantity}
                         >-</button>
                         <span 
                         type="text" 
                         name="quantity" 
                         data-count={cart[product.id]}
                         >{count}</span>
                         <button
                         className="quantity__button add"
                         data-count={cart[product.id]}
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
