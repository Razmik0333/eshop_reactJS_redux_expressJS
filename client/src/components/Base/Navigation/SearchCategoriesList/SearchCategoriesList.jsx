import React, { useState } from 'react'
import { root } from '../../../../helpers/constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, currentLanguageDataSelector, getCurrentLanguageSelector } from '../../../../helpers/reduxSelectors';
import "./styles/_search_categories_list.scss"
import { currentCategoryForSearch } from '../../../../redux/ducks/navigationDuck';
export default function SearchCategoriesList() {
     const dispatch = useDispatch();
     const [catTitle, setCatTitle] = useState('');
     const headerLangData = useSelector(currentLanguageDataSelector)?.navigation;
     const categories = useSelector(categoriesSelector);
     const currentLang = useSelector(getCurrentLanguageSelector);
     const changeCategoryTitle = (e) => {
          setCatTitle(e.target.textContent);
          console.log(e.target.dataset.id);
          
          dispatch(currentCategoryForSearch(e.target.dataset.id))
     }
     return (
          <>
          <div className="select__category__main">
               <div className="select__category__header">
                    <span className="select-icon">
                         <img src={`${root}/icons/config/menu.svg`} alt="" />
                    </span>
                    <span className="select-text">{catTitle ? catTitle :  headerLangData?.select}</span>
                    <span className="select-dropdown">
                         <img src={`${root}/icons/config/triangle.svg`} alt="" />
                    </span>
               </div>
          </div>
               <ul className="category__search__items">
                    <li className="category__search__item"
                         data-id={0}
                         onClick={changeCategoryTitle}
                    >ԲՈԼՈՐԸ
                    </li> 
                    {
                         categories.map((item) => {

                              return <li className="category__search__item"
                              data-id={item?.id}
                              onClick={changeCategoryTitle}>
                              {
                                   currentLang === 'am' ? item?.arm_name : 
                                        currentLang === 'en' ? item?.eng_name :
                                             item?.rus_name
                              }
                              </li>
                         })
                    }
               </ul>

          </>
     )
}
