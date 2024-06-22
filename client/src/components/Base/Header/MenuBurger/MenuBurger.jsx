import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { currentLanguageDataSelector, getUserDataSelector, getUserId } from "../../../../helpers/reduxSelectors";
import { clearCachesFiles, currentUser, getUserData } from '../../../../redux/ducks/userDuck';
import { changeOrdersFromLogout } from '../../../../redux/ducks/orderDuck';

import "./styles/_menu-burger.scss";
import { clearviewedProducts } from "../../../../redux/ducks/productDuck";
import { getViewedProductId } from "../../../../redux/ducks/configsDuck";

function MenuBurger() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const headerLangData = useSelector(currentLanguageDataSelector)?.header?.menu_burger;
     const userData = useSelector(getUserDataSelector);
     const userId = useSelector(getUserId);
     const changeLogout = (e) => {        
          dispatch(clearCachesFiles(userId))
          dispatch(currentUser(null))
          dispatch(getUserData(null))
          dispatch(changeOrdersFromLogout());
          dispatch(clearviewedProducts());
          dispatch(getViewedProductId(1))
          navigate('/home')
    }
     const [clicked, setClicked] = useState(false);
     const changeClicked = () => {
          setClicked(!clicked)
     }
     const goCabinet = (e) => {
          e.preventDefault();
         return userId ? navigate('/user/page') : navigate('/login')
     }
     return <div 
               className="login__register__item menu__burger" 
               onClick={changeClicked}
               >
                    <div className={`menu__burger__line ${clicked ? 'menu__burger__right' : ''}` }></div>
                    <div className={`menu__burger__line ${clicked ? 'menu__burger__middle' : ''}`}></div>
                    <div className={`menu__burger__line ${clicked ? 'menu__burger__left' : ''}`}></div>
                    <div className='burger_container'>
                        {
                         clicked ?  <ul className="burger_lists">
                              {
                                   <>
                                        {
                                             userData?.role === "admin" ?  
                                                  <li className="burger_list_item">
                                                       <NavLink to={"/admin/home"} className="menu-burger-link">{headerLangData?.admin}</NavLink>

                                                  </li>
                                                  :
                                                  <li className="burger_list_item" onClick={goCabinet}>
                                                       {headerLangData?.profile}
                                                  </li>

                                        }
                                        
                                        {
                                             userId && 
                                                  <li 
                                                       className="burger_list_item" 
                                                       onClick={changeLogout}
                                                  >
                                                       {headerLangData?.logout}
                                                  </li>
                                        }
                                        
                                   </>
                                   
                              }
                         </ul> :<></>
                        }
                    </div>
             </div>
}

export default memo(MenuBurger);
