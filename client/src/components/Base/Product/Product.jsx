import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartItem, getCountOfCart, getTotalPriceValue } from '../../../redux/ducks/cartDuck';
import { currentProduct } from '../../../redux/ducks/productDuck'; 
import ModalPopup from "../../Base/Modal/ModalPopup";
import { root } from '../../../helpers/constants/constants';
import { changePopup, getIsLogin, getPopupItemId } from '../../../redux/ducks/configsDuck';
import { getCurrentCurrencySelector, getUserId, getWishListIdsSelector, popupCloseSelector } from '../../../helpers/reduxSelectors';
import { getNewCurrency, numInArray } from '../../../helpers/functions/functions';
import RatingMapping from '../RatingMapping/RatingMapping';
import './styles/_products.scss';
import { deleteWishListItem, fetchAddWishList } from '../../../redux/ducks/wishListDuck';


function Product({product, text}) {
    
     const dispatch = useDispatch();
     
     const discountedPrice = product.cost *(1 - product.discount / 100);
     const popupIsShow = useSelector(popupCloseSelector);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const wishListIds = useSelector(getWishListIdsSelector)
     const userId = useSelector(getUserId);
     const changeCurrentProduct = (e) => {
          dispatch(currentProduct(e.target.dataset.id));
     }
     const addProductToCart = (e) => {
          console.log(e.target.dataset.id);
          
          //e.stopPropagation()
          // dispatch(getCartItem({
          //           [e.target.dataset.id] : 1 
          //      }
          // ))
          // dispatch(getCountOfCart(1));
          // dispatch(getTotalPriceValue(discountedPrice));
     }
     const showProductPopup = (e) => {
          dispatch(changePopup(true));
          dispatch(getPopupItemId(e.target.dataset.id));
          document.body.style.overflow = "hidden";
     }
     const addProductToWishList = (e) => {
          const target = e.target; 
               numInArray(wishListIds,target.dataset.id) ? 
                    dispatch(fetchAddWishList(userId, target.dataset.id)):
                         dispatch(deleteWishListItem(userId, target.dataset.id))

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
                    {/* <img src={`../template/images/${product.id}.jpg`} alt="" /> */}
                    <img src={`${root}/images/${product?.id}.jpg`} alt="" />
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
                              <img src={`${root}/icons/config/cart.svg`} alt="" />
                         {text?.add_to_cart}
                    </button>
               </div>
                    <p className="product-name">
                         <NavLink to={`/product/${product?.id}`}
                              data-id={product?.id}
                              className="product-link"  onClick={changeCurrentProduct}>
                              {product?.descr}
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
