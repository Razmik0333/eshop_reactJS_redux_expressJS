import { NavLink } from "react-router-dom";
import "./styles/_cabinet-header.scss"
import { memo } from "react";
import { useSelector } from "react-redux";
import { currentLanguageDataSelector } from "../../../../../helpers/reduxSelectors";

function MenuBar() {
     const menuLangData = useSelector(currentLanguageDataSelector)?.personal?.menu_bar;

     return <div className="user__page__settings_list">
               <div className="user__page__settings">
                    <div className="user_nav">
                         <ul className="user_nav_items">
                              <li className="user_nav_item"><NavLink to={'/page'} className="user_nav_link">{menuLangData?.general}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={"/user/orders"} className="user_nav_link">{menuLangData?.orders}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/user/products'} className="user_nav_link">{menuLangData?.products}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/personal'} className="user_nav_link">{menuLangData?.personal}</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/user/reviews'} className="user_nav_link">{menuLangData?.reviews}</NavLink></li>
                              <li className="user_nav_item"><a href='#' className="user_nav_link">Settings</a></li>
                              <li className="user_nav_item"><a href='#' className="user_nav_link">Logout</a></li>
                         </ul>
                                   
                    </div>
               </div>
          </div>
}
export default memo(MenuBar);
