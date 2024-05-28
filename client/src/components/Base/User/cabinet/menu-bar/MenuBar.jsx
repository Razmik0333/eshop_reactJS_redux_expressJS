import { NavLink, useNavigate } from "react-router-dom";
import "./styles/_cabinet-header.scss"
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, getUserCacheClearSelector, getUserId, modalCloseSelector } from "../../../../../helpers/reduxSelectors";
import { clearCachesFiles, currentUser, getUserData } from "../../../../../redux/ducks/userDuck";
import { changeOrdersFromLogout } from "../../../../../redux/ducks/orderDuck";
import Modal from "../../../Modal/Modal";

function MenuBar() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const userId = useSelector(getUserId)
     const menuLangData = useSelector(currentLanguageDataSelector)?.personal?.menu_bar;
     const changeLogout = (e) => {        
          dispatch(clearCachesFiles(userId))
           dispatch(currentUser(null))
          dispatch(getUserData(null))
           dispatch(changeOrdersFromLogout());
         // navigate('/home')
    }
    const modalIsClose = useSelector(modalCloseSelector);


    const isCleared = useSelector(getUserCacheClearSelector);
     return <>
          {/* {
               modalIsClose ?
                    isCleared ? <Modal message={isCleared} /> 
                    : <Modal message={'Wrong'} /> : <></>
          } */}
          <div className="user__page__settings_list">
               <div className="user__page__settings">
                    <div className="user_nav">
                         <ul className="user_nav_items">
                              <li className="user_nav_item"><NavLink to={'/page'} className="user_nav_link">{menuLangData?.general}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={"/user/orders"} className="user_nav_link">{menuLangData?.orders}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/user/products'} className="user_nav_link">{menuLangData?.products}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/personal'} className="user_nav_link">{menuLangData?.personal}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/user/reviews'} className="user_nav_link">{menuLangData?.reviews}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/user/card'} className="user_nav_link">{menuLangData?.card}</NavLink></li>
                              {/* <li className="user_nav_item"><a href='#' className="user_nav_link">Settings</a></li> */}
                              <li className="user_nav_item" ><NavLink to={"/"}  className="user_nav_link" onClick={changeLogout}>{menuLangData?.logout}</NavLink></li>
                         </ul>
                                   
                    </div>
               </div>
          </div>
     </>
}
export default memo(MenuBar);
