import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adminCategoriesListSelector, currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import CategoriesInfoHeader from './CategoriesInfoHeader';
import CategoriesInfoItem from './CategoriesInfoItem';
import CategoryCreate from './CategoryCreate';
import "./styles/_category-info.scss";
import { fetchCategoriesList } from '../../../../redux/ducks/adminCategoryDuck';

export default function CategoriesInfo() {
     const dispatch = useDispatch();
     useEffect(() => {
          
          dispatch(fetchCategoriesList())
     }, []);
     const categories = useSelector(adminCategoriesListSelector);
     const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.category;
  return (
     <div className="category__info__block">
          <div className="categories__info__header">
               {categoriesInfoLangData?.all_categories}
          </div>

     <div className="categories__info">
               <CategoriesInfoHeader />
               <div className="categories__item__infos">
               {
                    categories.map((category, pos) => {
                    
                         return <CategoriesInfoItem category={category} key={`category_${pos}`}/>
                    })
               }
               </div>
          </div>
          <CategoryCreate />
     </div>
  )
}
