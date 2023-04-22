import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currentLanguageDataSelector, getCurrentCurrencySelector, hotDealsSelector, maxDiscountDataSelector, popupCloseSelector } from "../../../../../helpers/reduxSelectors";
import {root} from '../../../../../helpers/constants/constants' ;
import ModalPopup from "../../../../Base/Modal/ModalPopup";
import { getNewCurrency } from "../../../../../helpers/functions/functions";
import { currentProduct, fetchMaxDiscountProduct } from "../../../../../redux/ducks/productDuck";
import { getCartItem, getCountOfCart, getTotalPriceValue } from "../../../../../redux/ducks/cartDuck";
import { changePopup, getPopupItemId } from "../../../../../redux/ducks/configsDuck";
import RatingMapping from "../../../../Base/RatingMapping/RatingMapping";
import "./styles/_hot-deals-content.scss"
function HotDealsContent() {
     const dispatch = useDispatch();

     const popupIsShow = useSelector(popupCloseSelector);

     const currentCurrency = useSelector(getCurrentCurrencySelector);

     useEffect(() => {
          dispatch(fetchMaxDiscountProduct())
     }, []);
     const showProductPopup = (e) => {
          dispatch(changePopup(true));
          dispatch(getPopupItemId(e.target.dataset.id));
          document.body.style.overflow = "hidden";
     }
     const changeCurrentProduct = (e) => {
          dispatch(currentProduct(e.target.dataset.id));
     }
     const addProductToCart = (e) => {
          console.log(e.target.dataset);
          e.stopPropagation();
          dispatch(getCartItem({
                    [e.target.dataset.id] : 1 
               }
          ));
          dispatch(getCountOfCart(1));
          dispatch(getTotalPriceValue(arr?.cost *(1 - arr?.discount / 100)));
     }
     const maxDiscountData = useSelector(maxDiscountDataSelector);
     const hotDealsId = useSelector(hotDealsSelector);
     const arr = maxDiscountData[hotDealsId];
     const discountedPrice = arr?.cost *(1 - arr?.discount / 100);
     const addCart = useSelector(currentLanguageDataSelector)?.home?.hot_deals?.add_to_cart;
     return (
          <>
               {popupIsShow ?  <ModalPopup id={arr?.id}/> : <></>}
               <div className="hot__deals__content">
                    <div className="hot-deals-picture-part">
                         <div className="hot-deals-picture">
                              <img src={`${root}/images/${arr?.id}.jpg`} alt="" />
                              <button type="button" className="add-cart">
                                   <img src={`${root}/icons/config/add-cart.png`} alt="" />
                                   <span className="add-cart-text"
                                        data-id={arr?.id}
                                        onClick={addProductToCart}
                                   >
                                   {addCart}
                                   </span>
                              </button>
                              
                         </div>
                    </div>
                    <div className="hot-deals-desc-part">
                         <div className="hot-deals-desc-header">
                              <p className="hot-deals-header">
                                    <NavLink to={`/product/${arr?.id}`}
                                        data-id={arr?.id}
                                        className="product-link"  onClick={changeCurrentProduct}>
                                   {arr?.descr}
                                   </NavLink>
                              </p>
                         </div>
                         <RatingMapping 
                              rating={arr?.rating} 
                         /> 
                         <div className="hot-deals-desc-options">
                              <div className="hot-deals-buttons">
                                   <button 
                                        className="hot-deals-button button-eyes"
                                        onClick={showProductPopup}
                                        data-id={arr?.id}
                                   >
                                   </button>
                                   <button className="hot-deals-button button-favorite"></button>
                                   <button className="hot-deals-button button-compare"></button>
                              </div>
                              <div className="hot-deals-prices">
                                   <span className="hot-deals-price old-price">
                                        <del>
                                             {`${getNewCurrency(currentCurrency, arr?.cost).value}
                                             ${getNewCurrency(currentCurrency, arr?.cost ).char}`}
                                        </del>
                                   </span>
                                   <span className="hot-deals-price new-price">
                                        {
                                             `${getNewCurrency(currentCurrency, discountedPrice).value}
                                             ${getNewCurrency(currentCurrency, discountedPrice).char}`
                                        }
                                   </span>
                              </div>
                         </div>

                    </div>
                    
               </div>
          </>
          
     ) 

}

export default HotDealsContent;
