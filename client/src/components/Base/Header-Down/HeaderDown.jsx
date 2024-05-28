
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartSelector, getWishListDataSelector, hotDealsTimerSelector } from '../../../helpers/reduxSelectors';
import { useEffect } from 'react';
import { getHotDealsTimerSecond } from '../../../redux/ducks/configsDuck';
import { getProductCount } from '../../../helpers/functions/functions';
import { root } from '../../../helpers/constants/constants'; 
import './styles/_header-down.scss';
function HeaderDown() {
     const dispatch = useDispatch();
     const cartData = useSelector(getCartSelector);
     const cartCount = getProductCount(cartData)

     
     const timeDeals = useSelector(hotDealsTimerSelector);
     const wishListData = useSelector(getWishListDataSelector)
     const date = new Date();

     useEffect(() => {
          
         const id = setInterval(() => {
               let  currentSecond = Math.floor((Date.now() - date)/1000);
                
               dispatch(getHotDealsTimerSecond(timeDeals - currentSecond))
               
          }, 30000);
          timeDeals <= 0 &&  dispatch(getHotDealsTimerSecond(3*24*3600))
          return () => clearInterval(id)
     }, []);

     return (
          <div className="header__down">
          <div className="container header__down__container">
               <div className="header__down__item phone__number">
                    <span className="phone-icon">
                         <img src={`${root}/icons/config/phone.svg`} alt="" />
                    </span>
                    <a type="phone" href="/" className="phone-number">(+374)41-016-006</a>
               </div>
               <div className="header__down__item logo__part">
                    <a href="/home">
                         <img src={`${root}/icons/config/logo.jpg`} alt=""  />
                    </a>
               </div>
                    <div className="header__down__item">
                         <NavLink to={'/wishlist'} className="cart__part">

                                   <div className="cart">
                                        <img src={
                                             wishListData.length > 0 ? `${root}/icons/config/wishlist_active.svg`:
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
