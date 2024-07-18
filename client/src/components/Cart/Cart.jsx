import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { checkEmptyObject, getCartSumm } from "../../helpers/functions/functions";
import { currentLanguageDataSelector, getCartSelector, getUserId } from "../../helpers/reduxSelectors";

import CartListItem from "../Cart/CartListItem/CartListItem";
import './styles/_cart.scss';
function Cart() {
     const navigate = useNavigate()
     const cartData = useSelector(getCartSelector);
     const cartSumm = getCartSumm(cartData)

     const cartObject = useSelector(currentLanguageDataSelector)?.cart;
     const userId = useSelector(getUserId);
     useEffect(() => {
          !userId && navigate('/login') 
     }, []);
     return(
          
          <>
               <div className="products__list cart__products__list">
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
