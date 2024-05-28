import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { currentLanguageDataSelector, getCurrentCurrencySelector, getCurrentLanguageSelector, getUserId, getWishListDataSelector, hotDealsSelector, maxDiscountDataSelector, popupCloseSelector } from "../../../../../helpers/reduxSelectors";
import {root} from '../../../../../helpers/constants/constants' ;
import ModalPopup from "../../../../Base/Modal/ModalPopup";
import { getNewCurrency, numInArray } from "../../../../../helpers/functions/functions";
import { currentProduct, fetchMaxDiscountProduct } from "../../../../../redux/ducks/productDuck";
import { fetchAddCart } from "../../../../../redux/ducks/cartDuck";
import { changePopup, getPopupItemId } from "../../../../../redux/ducks/configsDuck";
import RatingMapping from "../../../../Base/RatingMapping/RatingMapping";
import "./styles/_hot-deals-content.scss"
import { deleteWishListItem, fetchAddWishList } from "../../../../../redux/ducks/wishListDuck";
function HotDealsContent() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const userId = useSelector(getUserId)
     const popupIsShow = useSelector(popupCloseSelector);

     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const wishListData = useSelector(getWishListDataSelector);
     const currentLanguage = useSelector(getCurrentLanguageSelector);

     const wishListIds = wishListData.map(item => item?.id);

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
          dispatch(fetchAddCart(userId ,{
               [e.target.dataset.id] : 1
          }))
     }
     const addProductToWishList = (e) => {
          const target = e.target; 
          userId ? 
          (numInArray(wishListIds,+target.dataset.id) ? 
               dispatch(fetchAddWishList(userId, +target.dataset.id)):
                    dispatch(deleteWishListItem(userId, +target.dataset.id)))
          : navigate('/login')

     }
     const maxDiscountData = useSelector(maxDiscountDataSelector);
     const hotDealsId = useSelector(hotDealsSelector);
     const currentItem = maxDiscountData[hotDealsId];
     const discountedPrice = currentItem?.cost *(1 - currentItem?.discount / 100);
     const addCart = useSelector(currentLanguageDataSelector)?.home?.hot_deals?.add_to_cart;
     return (
          <>
               {popupIsShow ?  <ModalPopup id={currentItem?.id}/> : <></>}
               <>
                    <div className="hot__deals__content">
                         {
                              currentItem?.discount > 0 ? <div className="sale">
                                   Զեղչ
                              </div>
                              : <></>
                         }
                         <div className="hot-deals-picture-part">
                              <div className="hot-deals-picture">
                                   <img src={`${root}/images/products/${currentItem?.id}.jpg`} alt="" />
                                   <button type="button" className="add-cart" data-id={currentItem?.id}>
                                        
                                        <span className="add-cart-text"
                                             data-id={currentItem?.id}
                                             onClick={addProductToCart}
                                        ><img src={`${root}/icons/config/add-cart.png`} alt="" />
                                        {addCart}
                                        </span>
                                   </button>
                                   
                              </div>
                         </div>
                         <div className="hot-deals-desc-part">
                              <div className="hot-deals-desc-header">
                                   <p className="hot-deals-header">
                                        <NavLink to={`/product/${currentItem?.id}`}
                                             data-id={currentItem?.id}
                                             className="product-link"  onClick={changeCurrentProduct}>
                                        {
                                             currentLanguage === 'am' ? currentItem?.descr : 
                                                  currentLanguage === 'en' ? currentItem?.descr_en :
                                                       currentItem?.descr_ru
                                        }
                                        </NavLink>
                                   </p>
                              </div>
                              <RatingMapping 
                                   rating={currentItem?.rating} 
                              /> 
                              <div className="hot-deals-desc-options">
                                   <div className="hot-deals-buttons">
                                        <button 
                                             className="hot-deals-button button-eyes"
                                             onClick={showProductPopup}
                                             data-id={currentItem?.id}
                                        >
                                        </button>
                                        <button className={
                                             `hot-deals-button  ${numInArray(wishListIds,currentItem?.id) ? 'button-favorite' : 'button-favorite-full' }`
                                             }
                                             data-id={`${currentItem?.id}`}
                                             onClick={addProductToWishList}
                                             >

                         </button>
                                        <button className="hot-deals-button button-compare"></button>
                                   </div>
                                   <div className="hot-deals-prices">
                                        <span className="hot-deals-price old-price">
                                             <del>
                                                  {`${getNewCurrency(currentCurrency, currentItem?.cost).value}
                                                  ${getNewCurrency(currentCurrency, currentItem?.cost ).char}`}
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
          </>
          
     ) 

}

export default HotDealsContent;
