import { NavLink } from "react-router-dom";
import "./styles/_cabinet-header.scss"
import { memo } from "react";

function MenuBar() {
     return <div className="user__page__settings_list">
               <div className="user__page__settings">
                    <div className="user_nav">
                         <ul className="user_nav_items">
                              <li className="user_nav_item"><NavLink to={'/page'} className="user_nav_link">User</NavLink></li>
                              <li className="user_nav_item"><NavLink to={"/orders"} className="user_nav_link">Orders</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/user/product'} className="user_nav_link">Products</NavLink></li>
                              <li className="user_nav_item"><NavLink to={'/personal'} className="user_nav_link">Personal data</NavLink></li>
                              <li className="user_nav_item"><a href='#' className="user_nav_link">Settings</a></li>
                              <li className="user_nav_item"><a href='#' className="user_nav_link">Logout</a></li>
                         </ul>
                                   
                    </div>
               </div>
          </div>
}
export default memo(MenuBar);
