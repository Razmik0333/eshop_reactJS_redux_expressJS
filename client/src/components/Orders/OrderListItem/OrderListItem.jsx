import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { currentProduct } from '../../../redux/ducks/productDuck';
import { root } from '../../../helpers/constants/constants';
import { getNewCurrency } from '../../../helpers/functions/functions';
import { currentLanguageDataSelector, getCurrentCurrencySelector } from '../../../helpers/reduxSelectors';
import RatingMapping from '../../Base/RatingMapping/RatingMapping';
import './styles/_orderListItem.scss'
function OrderListItem({product, counts}) {
     const dispatch = useDispatch();
     const orderTextItem = useSelector(currentLanguageDataSelector)?.product_item;
     const currentCurrency = useSelector(getCurrentCurrencySelector)
     const changeCurrentProduct = (e) => {
          dispatch( currentProduct(e.target.dataset.id))
     }
     return (
          
           <div className="product__list">
               <div className="sale">
               {orderTextItem?.sale}
               </div>
               <div className="product-pictures">
               <img src={`${root}/images/products/${product.id}.jpg`} alt="" />

               </div>
               <div className="product-details">
                    <p className="product-name"><NavLink to={`/product/${product.id}`}
                     className="product-link" 
                     data-id={product.id}
                     onClick={changeCurrentProduct}>
                         {product.descr}
                    </NavLink></p>
                    <div className="product-prices">
                         {
                              product.discount > 0 ? 
                              <>
                                   <span className="product-price new-price">
                                   {`${counts} x ${getNewCurrency(currentCurrency,product.cost *(1 - product.discount / 100))?.value}
                                   ${getNewCurrency(currentCurrency,product.cost *(1 - product.discount / 100))?.char}`}
                                   </span>
                                   
                              </> : 
                                   <span className="product-price new-price">
                                   {`${counts} x ${product.cost}Դ`}
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
                         <div className="product-buttons">
                              <button className="product-button button-favorite"></button>
                              <button className="product-button button-compare"></button>

                              <button className="add-to-cart">
                                   <img src={`${root}/icons/config/cart.svg`} alt="" />
                                   {orderTextItem?.add_to_cart}
                              </button>

                         </div>
                         
                    </div>
               </div>
          </div> 
     )
}


export default memo(OrderListItem);
