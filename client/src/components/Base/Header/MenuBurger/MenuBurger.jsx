import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { currentLanguageDataSelector, getUserDataSelector, getUserId } from "../../../../helpers/reduxSelectors";
import { currentUser, getUserData } from '../../../../redux/ducks/userDuck';
import { changeOrdersFromLogout } from '../../../../redux/ducks/orderDuck';

import "./styles/_menu-burger.scss";

function MenuBurger() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const headerLangData = useSelector(currentLanguageDataSelector)?.header?.menu_burger;
     const userData = useSelector(getUserDataSelector);
     const userId = useSelector(getUserId);
     const changeLogout = (e) => {        

          dispatch(currentUser(null))
          dispatch(getUserData(null))
          dispatch(changeOrdersFromLogout());
          navigate('/home')
    }
     const [clicked, setClicked] = useState(false);
     const changeClicked = () => {
          setClicked(!clicked)
     }
     const goCabinet = (e) => {
          e.preventDefault();
         return userId ? navigate('/page') : navigate('/login')
     }
     const goOrders = (e) => {
          e.preventDefault();
         return userId ? navigate('/orders') : navigate('/login')
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
                                                       <NavLink to={"/admin/home"} className="register-link">{headerLangData?.admin}</NavLink>

                                                  </li>
                                                  :
                                                  <li className="burger_list_item">
                                                       <NavLink to={"/page"} onClick={goCabinet} className="register-link">{headerLangData?.profile}</NavLink>

                                                  </li>

                                        }
                                        <li 
                                             className="burger_list_item"  
                                        >
                                             <NavLink to={"/orders"} onClick={goOrders} >{headerLangData?.my_orders}</NavLink>
                                        </li>
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
