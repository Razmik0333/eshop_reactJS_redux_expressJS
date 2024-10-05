import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, getCurrentLanguageSelector, navigationBurgerMenuStateSelector } from '../../../../helpers/reduxSelectors';
import { NavLink } from 'react-router-dom';
import { currentCategory, currentSearch, fetchCurrentCatgory } from '../../../../redux/ducks/navigationDuck';
import { clearSearchData } from '../../../../redux/ducks/productDuck';
import { getNavigationBurgerState } from '../../../../redux/ducks/configsDuck';

export default function Categories() {
     const dispatch = useDispatch()
     const categories = useSelector(categoriesSelector);
     const currentLang = useSelector(getCurrentLanguageSelector);
     const burgerState = useSelector(navigationBurgerMenuStateSelector);
     const [stateBurger, setBurgerState] = useState(burgerState)
     console.log("window.innerWidth > 768", window.innerWidth > 768)
     console.log("window.innerWidth", window.innerWidth)
     useEffect(() => {
          if(window.innerWidth < 740) {
               dispatch(getNavigationBurgerState(false));
               setBurgerState(false);
          }else{
               dispatch(getNavigationBurgerState(true));
               setBurgerState(true);

          }
          
     }, [window.innerWidth]);
     const changeCategory = (e) => {
          dispatch(fetchCurrentCatgory(e.target.dataset.id));
          dispatch(clearSearchData([]));
          dispatch(currentSearch(''));
      }
      const navBurgerStateChange = () => {
          dispatch(getNavigationBurgerState(!stateBurger))
          setBurgerState(!stateBurger)
      }
  return (
    <>
          <div className="navigation__part">
          
          {
               stateBurger &&                
                    <ul className="category__list">
                    
                    {
                         categories.map(item => {
                              return  <li className="category__item"
                                        key={item.id} 
                                        onClick = {changeCategory} >
                                        <NavLink to={`/category/${item.id}`} data-id={item.id}>
                                             {
                                                  currentLang === 'am' ? item?.arm_name : 
                                                       currentLang === 'en' ? item?.eng_name :
                                                            item?.rus_name
                                             }
                                        </NavLink>
                                   </li>
                         })
                         }
                    </ul>
               }
               <div className={`${stateBurger ? "nav__menu__burger__active": "nav__menu__burger"}`}
                    onClick={navBurgerStateChange} >
                    <span></span>
               </div>
          </div>
    </>
  )
}
