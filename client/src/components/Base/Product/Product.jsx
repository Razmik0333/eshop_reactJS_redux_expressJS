import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchAddCart, getCartItem, getCountOfCart, getTotalPriceValue } from '../../../redux/ducks/cartDuck';
import { currentProduct, fetchViewedProductIds } from '../../../redux/ducks/productDuck'; 
import ModalPopup from "../../Base/Modal/ModalPopup";
import { root } from '../../../helpers/constants/constants';
import { changePopup, getPopupItemId } from '../../../redux/ducks/configsDuck';
import { getCurrentCurrencySelector, getCurrentLanguageSelector, getUserId, getWishListDataSelector, popupCloseSelector } from '../../../helpers/reduxSelectors';
import { getNewCurrency, numInArray } from '../../../helpers/functions/functions';
import RatingMapping from '../RatingMapping/RatingMapping';
import './styles/_products.scss';
import { deleteWishListItem, fetchAddWishList } from '../../../redux/ducks/wishListDuck';


function Product({product, text}) {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const discountedPrice = product.cost *(1 - product.discount / 100);
     const popupIsShow = useSelector(popupCloseSelector);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const currentLanguage = useSelector(getCurrentLanguageSelector);

     const userId = useSelector(getUserId);
     const wishListData = useSelector(getWishListDataSelector);
     const wishListIds = wishListData.map(item => item?.id);
     const changeCurrentProduct = (e) => {
          e.stopPropagation();
          dispatch(currentProduct(e.target.dataset.id));
          dispatch (fetchViewedProductIds(userId,e.target.dataset.id))
     }
     const addProductToCart = (e) => {
          userId ? 
          dispatch(fetchAddCart(userId ,{
               [e.target.dataset.id] : 1
          }))
          : navigate('/login')
     }
     const showProductPopup = (e) => {
          dispatch(changePopup(true));
          dispatch(getPopupItemId(e.target.dataset.id));
          document.body.style.overflow = "hidden";
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
          <div className="product">
               {
                    product?.discount > 0 ? <div className="sale">
                         {text?.sale}
                    </div>
                    : <></>
               }
               <div className="product-pictures">
                    <img src={`${root}/images/products/${product?.id}.jpg`} alt="" />
                    <button 
                         className="quick-view" 
                         onClick={showProductPopup}
                         data-id={product?.id}
                    >
                      {text?.quick_view}
                    </button>
                    <button 
                         className="add-to-cart"
                         data-id={product?.id}
                         onClick={addProductToCart}>
                         {text?.add_to_cart}
                    </button>
               </div>
                    <p className="product-name">
                         <NavLink to={`/product/${product?.id}`}
                              data-id={product?.id}
                              className="product-link"
                              onClick={changeCurrentProduct}
                              >
                              

                              { 
                                   currentLanguage === 'am' ? product?.descr : 
                                        currentLanguage === 'en' ? product?.descr_en :
                                             product?.descr_ru
                                   
                              }
                         </NavLink>
                    </p>
               <RatingMapping rating={product?.rating} />
               <div className="product-options">
                    <div className="product-buttons">
                         <button className={
                              `product-button  ${numInArray(wishListIds,product?.id) ? 'button-favorite' : 'button-favorite-full' }`
                         }
                         data-id={`${product?.id}`}
                         onClick={addProductToWishList}
                         >

                         </button>
                         <button className="product-button button-compare"></button>
                    </div>
                    <div className="product-prices">   
                    {
                         product.discount > 0 ? 
                         <>
                              <span className="product-price old-price">
                                   <del>{`${getNewCurrency(currentCurrency, product?.cost).value}
                                        ${getNewCurrency(currentCurrency, product?.cost ).char}`}</del>
                              </span>
                              <span className="product-price new-price">
                              {`${getNewCurrency(currentCurrency, discountedPrice).value}
                              ${getNewCurrency(currentCurrency, discountedPrice).char}`}
                              </span>
                         </>
                         :  <span className="product-price new-price">
                                   {`${getNewCurrency(currentCurrency, discountedPrice).value}
                                   ${getNewCurrency(currentCurrency, discountedPrice).char}`}
                             </span>
                    }    
                    </div>
               </div>
          </div>
          </>
     )
}

export default Product;
