import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { currentLanguageDataSelector, getUserDataSelector } from '../../../../helpers/reduxSelectors';
import { root } from '../../../../helpers/constants/constants';


import '../admin/styles/_admin-menu.scss';
import { currentUser, getUserData } from '../../../../redux/ducks/userDuck';
import { changeOrdersFromLogout } from '../../../../redux/ducks/orderDuck';

function AdminMenu() {
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const userData = useSelector(getUserDataSelector);
     const adminMenuLangData = useSelector(currentLanguageDataSelector)?.admin?.menu_bar;
     const changeLogout = (e) => {        
          dispatch(currentUser(null))
          dispatch(getUserData(null))
          dispatch(changeOrdersFromLogout());
          navigate('/home')
    }
     return (
          <div className="admin__menu">
                    <div className="admin_picture">
                         {/* <div className="admin__img">
                              <img src={`${root}/icons/config/admin.png`} alt='' />
                              <p className="admin__name">
                                   {userData?.name}
                              </p>
                         </div> */}
                         <div className="admin_nav">
                              <ul className="admin_nav_items">
                                   <li className="admin_nav_item"><NavLink to={'/admin/home'} className="admin_nav_link">{adminMenuLangData?.dashboard}</NavLink></li>
                                   <li className="admin_nav_item"><NavLink to={"/admin/page"} className="admin_nav_link">{adminMenuLangData?.administrator}</NavLink></li>
                                   <li className="admin_nav_item"><NavLink to={"/admin/orders"} className="admin_nav_link">{adminMenuLangData?.orders}</NavLink></li>
                                   <li className="admin_nav_item"><NavLink to={'/admin/product'} className="admin_nav_link">{adminMenuLangData?.products}</NavLink></li>
                                   <li className="admin_nav_item"><NavLink to={"/admin/reviews"} className="admin_nav_link">{adminMenuLangData?.reviews}</NavLink></li>
                                   <li className="admin_nav_item"><NavLink to={"/admin/personal"} className="admin_nav_link">{adminMenuLangData?.change}</NavLink></li>
                                   <li className="admin_nav_item"><NavLink to={"/admin/list"} className="admin_nav_link">{adminMenuLangData?.list}</NavLink></li>
                                   {/* <li className="admin_nav_item"><NavLink to={"/admin/discounts"} className="admin_nav_link">{adminMenuLangData?.discount}</NavLink></li> */}
                                   <li className="admin_nav_item"><NavLink to={'/'} className="admin_nav_link" onClick={changeLogout} >{adminMenuLangData?.logout}</NavLink></li>
                              </ul>
                              
                         </div>
                    </div>
               </div>
     )
}

export default memo(AdminMenu);
