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
     const [stateBurger, setBurgerState] = useState(burgerState);
     const [screenWidth, setInnerWidth] = useState(window.screen.width);

     useEffect(() => {
          function handleResize(){
               setInnerWidth(window.screen.width)
          }
          window.addEventListener('resize', handleResize);
          if(screenWidth < 840) {
               dispatch(getNavigationBurgerState(false));
               setBurgerState(false);
          }else{
               dispatch(getNavigationBurgerState(true));
               setBurgerState(true);
          }
          return () => {
               window.removeEventListener('resize',handleResize)
          };
     }, [window.screen.width]);
     
     const changeCategory = (e) => {
          dispatch(currentCategory(e.target.dataset.id))
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
                                        onClick = {changeCategory} 
                                        data-id={item.id}
                                        >
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
                    <span>

                    </span>
               </div>
          </div>
    </>
  )
}
