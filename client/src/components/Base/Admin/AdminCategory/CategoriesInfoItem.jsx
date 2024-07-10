import React from 'react'
import { NavLink } from 'react-router-dom'
import { adminCurrentCategoryIdSelector, adminCurrentCategorySelector, currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { currentCategoryId, fetchProductsForDelete } from '../../../../redux/ducks/adminCategoryDuck';

export default function CategoriesInfoItem({category}) {
     const dispatch = useDispatch()
     const categoriesIsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.category;
     const changeCategoryId = (e) => {
          dispatch(currentCategoryId(e.target.dataset.id))
     }
     const deleteCategoryItem = (e) => {
          dispatch(fetchProductsForDelete(e.target.dataset.id))
     }
     return (
          <>
     
          <div className="category__item__info">
               <div className="category__item__data__info">
                    <input type="checkbox"/>
               </div>
               <div className="category__item__data__info">
                    {category?.id}
               </div>
               <div className="category__item__data__info">
                    {category?.alias}
               </div>
               <div className="category__item__data__info">
                    {category?.arm_name}
               </div>
               <div className="category__item__data__info">
                    {category?.rus_name}
               </div>
               <div className="category__item__data__info">
                    {category?.eng_name}
               </div>
               <div className="category__item__data__info">
                    <NavLink 
                         to={`/admin/category/update/page`} 
                         data-id={`${category?.id}`} 
                          onClick={changeCategoryId}
                         className="link__action"
                         >
                         {categoriesIsInfoLangData?.actions?.update}
                    </NavLink>
               </div>
               <div className="category__item__data__info">
                   <NavLink to={`#`} data-id={`${category?.id}`}
                     onClick={deleteCategoryItem}
                    className="link__action"
                   >
                    {categoriesIsInfoLangData?.actions?.delete}
                   </NavLink>
               </div>
          </div>
          </>
     ) 
}
