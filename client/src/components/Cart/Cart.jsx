import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { checkEmptyObject, getCartSumm } from "../../helpers/functions/functions";
import { currentLanguageDataSelector, getCartSelector, getProductsInCart, getTotalPriceSelector, getUserId } from "../../helpers/reduxSelectors";
import { fetchProductsByString } from "../../redux/ducks/productDuck";

import CartListItem from "../Cart/CartListItem/CartListItem";
import './styles/_cart.scss';
import { fetchCurrentCart } from "../../redux/ducks/cartDuck";
function Cart() {
     const dispatch = useDispatch();
     const navigate = useNavigate()
     const cartData = useSelector(getCartSelector);
     console.log("🚀 ~ file: Cart.jsx:14 ~ Cart ~ cartData:", cartData)
     const productsData = useSelector(getProductsInCart);
     //const cartSumm = useSelector(getTotalPriceSelector);
     const cartSumm = getCartSumm(cartData)

     const cartObject = useSelector(currentLanguageDataSelector)?.cart;
     const userId = useSelector(getUserId);
     console.log("🚀 ~ file: Cart.jsx:22 ~ Cart ~ userId:", userId)
     useEffect(() => {
          !userId && navigate('/login') 
     }, []);
     return(
          
          <>
               <div className="products__list">
                    <div className="container product__list__container">
                         <div className="cart__header__items">
                              <div className="cart__header">
                              <span>
                                   {cartObject?.cart}
                              </span>
                              <span className="cart__summ">
                                   {`${cartObject?.total} ՝ ${cartSumm}Դ`}
                              </span>
                              </div>
                         </div>
                         <div className="cart__header__line">
                         </div>
                         <div className="products-list">
                              {
                                   <div className="products-list">
                                   {
                                        checkEmptyObject(cartData) ? <div>{cartObject?.empty}</div> :
                                        cartData.map(product => {
                                             return  <CartListItem product={product} text={cartObject?.cart_item} key={product.id} />
                                        })
                                   }
                                   </div>
                              }
                         </div>
                         <div className="cart__buy">
                              <NavLink to={'/buy'} >
                                   <button 
                                   className="cart__buy__button" 
                                   disabled = {
                                        checkEmptyObject(cartData)
                                   }
                                   >{cartObject?.buy}</button>
                              </NavLink>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Cart;
