import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, getCurrentLanguageSelector } from '../../../../helpers/reduxSelectors';
import { NavLink } from 'react-router-dom';
import { currentCategory, currentSearch, fetchCurrentCatgory } from '../../../../redux/ducks/navigationDuck';
import { clearSearchData } from '../../../../redux/ducks/productDuck';

export default function Categories() {
     const dispatch = useDispatch()
     const categories = useSelector(categoriesSelector);
     const currentLang = useSelector(getCurrentLanguageSelector)
     console.log("🚀 ~ file: PathPanel.jsx:11 ~ PathPanel ~ currentLang:", currentLang)
     const changeCategory = (e) => {
          dispatch(currentCategory(e.target.dataset.id));
          dispatch(fetchCurrentCatgory(e.target.dataset.id));
          dispatch(clearSearchData([]));
          dispatch(currentSearch(''));
      }
  return (
    <>
          <div className="navigation__part">
               <ul className="category__list">
                    
                    {
                    
                         categories.map(item => {
                              return  <li className="category__item"
                                        key={item.id} 
                                        onClick = {changeCategory} >
                                        <NavLink to={`/category/${item.id}`} data-id={item.id}>

                                             {
                                                  currentLang === "am" ? item?.arm_name : `${item?.alias}`.toUpperCase()
                                             }
                                        </NavLink>
                                   </li>
                         })
                         
                    }
               </ul>
          </div>
    </>
  )
}
