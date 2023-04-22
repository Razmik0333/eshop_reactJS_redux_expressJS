import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { checkEmptyObject } from "../../helpers/functions/functions";
import { currenciesSelector, currentLanguageDataSelector, getCartSelector, getProductsInCart, getTotalPriceSelector } from "../../helpers/reduxSelectors";
import { fetchProductsByString } from "../../redux/ducks/productDuck";

import CartListItem from "../Cart/CartListItem/CartListItem";
import './styles/_cart.scss';
function Cart() {
     const dispatch = useDispatch();
     const cartData = useSelector(getCartSelector);
     const productsData = useSelector(getProductsInCart);
     const cartSumm = useSelector(getTotalPriceSelector);
     const cartObject = useSelector(currentLanguageDataSelector)?.cart;

     console.log("🚀 ~ file: Cart.jsx ~ line 16 ~ Cart ~ cartObject", cartObject)

     useEffect(() => {
          
          
               dispatch(fetchProductsByString(Object.keys(cartData)));

     }, [cartSumm]);
     return(

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
                                   checkEmptyObject(productsData) ? <div>{cartObject?.empty}</div> :
                                   productsData.map(product => {
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
                                   checkEmptyObject(productsData)
                              }
                              >{cartObject?.buy}</button>
                         </NavLink>
                    </div>
               </div>
          </div>
     )
}

export default Cart;
