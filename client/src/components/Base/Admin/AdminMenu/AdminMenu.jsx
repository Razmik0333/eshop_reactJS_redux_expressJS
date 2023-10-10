import { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { root } from '../../../../helpers/constants/constants';
import { getUserDataSelector } from '../../../../helpers/reduxSelectors';


import '../admin/styles/_admin-menu.scss';

function AdminMenu() {
     const userData = useSelector (getUserDataSelector)
     return (
          <div className="admin__menu">
                    <div className="admin_picture">
                         <div className="admin__img">
                              <img src={`${root}/icons/config/admin.png`} alt='' />
                              <p className="admin__name">
                                   {userData?.name}
                              </p>
                         </div>
                         <div className="admin_nav">
                              <ul className="admin_nav_items">
                                   <li className="admin_nav_item"><NavLink to={'/admin'} className="admin_nav_link">Dashboard</NavLink></li>
                                   <li className="admin_nav_item"><a href='#' className="admin_nav_link">Administrator</a></li>
                                   <li className="admin_nav_item"><NavLink to={"/admin/orders"} className="admin_nav_link">Orders</NavLink></li>
                                   <li className="admin_nav_item"><NavLink to={'/admin/product'} className="admin_nav_link">Products</NavLink></li>
                                   <li className="admin_nav_item"><a href='#' className="admin_nav_link">Earning status</a></li>
                                   <li className="admin_nav_item"><a href='#' className="admin_nav_link">Settings</a></li>
                                   <li className="admin_nav_item"><a href='#' className="admin_nav_link">Logout</a></li>
                              </ul>
                              
                         </div>
                    </div>
               </div>
     )
}

export default memo(AdminMenu);
