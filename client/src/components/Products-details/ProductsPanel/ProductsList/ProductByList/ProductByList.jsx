import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { currentProduct } from '../../../../../redux/ducks/productDuck';
import { root } from '../../../../../helpers/constants/constants';
import { changePopup, getPopupItemId } from '../../../../../redux/ducks/configsDuck';
import { getCurrentCurrencySelector, getCurrentLanguageSelector, getUserId, getWishListDataSelector, popupCloseSelector } from '../../../../../helpers/reduxSelectors';
import ModalPopup from '../../../../Base/Modal/ModalPopup';
import { fetchAddCart } from '../../../../../redux/ducks/cartDuck';
import RatingMapping from '../../../../Base/RatingMapping/RatingMapping';
import { numInArray,getNewCurrency } from '../../../../../helpers/functions/functions';
import './styles/_products-details-list.scss';
import { deleteWishListItem, fetchAddWishList } from '../../../../../redux/ducks/wishListDuck';

function ProductByList({product, text}) {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const location = useLocation();
     const pathRef = useRef(null);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const discountedPrice = product.cost *(1 - product.discount / 100);
     const wishListData = useSelector(getWishListDataSelector);

     const wishListIds = wishListData.map(item => item?.id);

     const userId = useSelector(getUserId)
     const currentLanguage = useSelector(getCurrentLanguageSelector);

     const popupIsShow = useSelector(popupCloseSelector);
     useEffect(() => {
          pathRef.current = location.pathname
     }, []);
     const changeCurrentProduct = (e) => {
          dispatch( currentProduct(e.target.dataset.id))
     }
     const showProductPopup = (e) => {
          dispatch(changePopup(true));
          dispatch(getPopupItemId(e.target.dataset.id));
          document.body.style.overflow = "hidden";
     }
     const addProductToCart = (e) => {
          userId ? 
          dispatch(fetchAddCart(userId ,{
               [e.target.dataset.id] : 1
          }))
          : navigate('/login')
     }
     const addProductToWishList = (e) => {
          const target = e.target; 
          userId ? 
          (numInArray(wishListIds,+target.dataset.id) ? 
               dispatch(fetchAddWishList(userId, +target.dataset.id)):
                    dispatch(deleteWishListItem(userId, +target.dataset.id)))
          : navigate('/login')

     }
     return (
          <>
               {popupIsShow ?  <ModalPopup id={product?.id}/> : <></>}
               <div className="product__list">
                    <div className="sale">
                    {text['sale']}
                    </div>
                    <div className="product-pictures">
                         <img 
                              src={`${root}/images/products/${product.id}.jpg`} 
                              alt={`${product.descr}`}
                              data-id={`${product.id}`}
                              onClick={showProductPopup}                              
                         />
                    </div>
                    <div 
                    className="product-details" 
                    >
                         <p className="product-name">
                         <NavLink to={`/product/${product.id}`}
                              className="product-link" 
                              data-id={product.id}
                              onClick={changeCurrentProduct}
                         >
                         { 
                                   currentLanguage === 'am' ? product?.descr : 
                                        currentLanguage === 'en' ? product?.descr_en :
                                             product?.descr_ru
                                   
                         }
                         </NavLink></p>
                    <div className="product-prices">
                         {
                              product.discount > 0 ? 
                              <>
                                   <span className="product-price new-price">
                                   {`${getNewCurrency(currentCurrency, discountedPrice).value}
                                        ${getNewCurrency(currentCurrency, discountedPrice).char}`}
                                   </span>
                                   <span className="product-price old-price">
                                        <del>{`${getNewCurrency(currentCurrency, product?.cost).value}
                                        ${getNewCurrency(currentCurrency, product?.cost ).char}`}</del>
                                   </span>
                              </> : 
                                   <span className="product-price new-price">
                                        {`${getNewCurrency(currentCurrency, discountedPrice).value}
                                        ${getNewCurrency(currentCurrency, discountedPrice).char}`}
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
                              <button className={
                                   `product-button  ${numInArray(wishListIds,product?.id) ? 'button-favorite' : 'button-favorite-full' }`
                              }
                                   data-id={`${product?.id}`}
                                   onClick={addProductToWishList}
                              >
                              
                              </button>
                              <button className="product-button button-compare"></button>
                              <button className="add-to-cart"
                                   data-id={product.id}
                                   onClick={addProductToCart}>
                              <img src={`${root}/icons/config/cart.svg`} alt="" />
                                   {text['add_to_cart']}
                              </button>
                         </div>
                         
                    </div>
                    </div>
               </div> 
          </>
     )
}
export default ProductByList;
