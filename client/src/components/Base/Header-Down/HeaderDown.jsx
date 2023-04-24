
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartCountSelector, getCartSelector, getUserId, getWishListDataSelector, getWishListIdsSelector, hotDealsTimerSelector } from '../../../helpers/reduxSelectors';
import './styles/_header-down.scss';
import { root } from '../../../helpers/constants/constants'; 
import { useEffect, useState } from 'react';
import { getHotDealsTimerSecond } from '../../../redux/ducks/configsDuck';
import { fetchCurrentWishList, fetchWishList } from '../../../redux/ducks/wishListDuck';
import { getProductCount } from '../../../helpers/functions/functions';
import { fetchCurrentCart } from '../../../redux/ducks/cartDuck';
function HeaderDown() {
     const dispatch = useDispatch();
     //const cartCount = useSelector(getCartCountSelector);
     const cartData = useSelector(getCartSelector);
     console.log("🚀 ~ file: HeaderDown.jsx:16 ~ HeaderDown ~ cartData:", cartData)
     const cartCount = getProductCount(cartData)

     
     const timeDeals = useSelector(hotDealsTimerSelector);
     const wishListIds = useSelector(getWishListIdsSelector)
     const wishListItems = useSelector(getWishListDataSelector);
     const userId = useSelector(getUserId);

     const date = new Date();
     useEffect(() => {
          dispatch(fetchCurrentCart(userId))
         const id = setInterval(() => {
               let  currentSecond = Math.floor((Date.now() - date)/1000);
                
               dispatch(getHotDealsTimerSecond(timeDeals - currentSecond))
               
          }, 30000);
          timeDeals <= 0 &&  dispatch(getHotDealsTimerSecond(3*24*3600))
          return () => clearInterval(id)
     }, [userId]);

     return (
          <div className="header__down">
          <div className="container header__down__container">
               <div className="header__down__item phone__number">
                    <span className="phone-icon">
                         <img src={`${root}/icons/config/phone.svg`} alt="" />
                    </span>
                    <a type="phone" href="/" className="phone-number">2300 - 3560 - 222</a>
               </div>
               <div className="header__down__item logo__part">
                    <a href="/home">
                         <img src={`${root}/icons/config/Layer 1.png`} alt=""  />
                    </a>
               </div>
                    <div className="header__down__item">
                         <NavLink to={'/wishlist'} className="cart__part">

                                   <div className="cart">
                                        <img src={
                                             wishListIds.length > 0 ? `${root}/icons/config/wishlist_active.svg`:
                                             `${root}/icons/config/wishlist.svg`
                                        } alt="" />
                                   </div>
                                   
                         </NavLink>
                         <NavLink to={'/cart'} className="cart__part">

                                   <div className="cart">
                                        <img src={`${root}/icons/config/cart.svg`} alt="" />
                                   </div>
                                   <div className="quantity">{cartCount}</div>
                         </NavLink>
                    </div>
          </div>
     </div>
     )
}

export default HeaderDown;
