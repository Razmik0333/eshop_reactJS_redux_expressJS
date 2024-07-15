import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import { changeSubCategoryId, fetchSubCategoryForDelete } from '../../../../redux/ducks/adminSubCategoryDuck';

export default function SubCategoriesInfoItem({subCategory}) {
     const dispatch = useDispatch();
     const categoriesIsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category;
     const getSubCatId = (e) => {
          dispatch(changeSubCategoryId(e.target.dataset.id))
     }
     const deleteSubCatItem = (e) => {
          dispatch(fetchSubCategoryForDelete(e.target.dataset.id))
     }
     return (
          <>
     
          <div className="sub__category__item__info">
               <div className="sub__category__item__data__info">
                    <input type="checkbox"/>
               </div>
               <div className="sub__category__item__data__info">
                    {subCategory?.id}
               </div>
               <div className="sub__category__item__data__info">
                    {subCategory?.category}
               </div>
               <div className="sub__category__item__data__info">
                    {subCategory?.sub_category}
               </div>
               <div className="sub__category__item__data__info">
                    {subCategory?.alias}
               </div>
               <div className="sub__category__item__data__info">
                    {subCategory?.arm_name}
               </div>
               <div className="sub__category__item__data__info">
                    {subCategory?.rus_name}
               </div>
               <div className="sub__category__item__data__info">
                    {subCategory?.eng_name}
               </div>
               <div className="sub__category__item__data__info">
                    <NavLink 
                         to={`/admin/subcategory/update/page`} 
                         data-id={`${subCategory?.id}`} 
                          onClick={getSubCatId}
                         className="link__action"
                         >
                         {categoriesIsInfoLangData?.actions?.update}
                    </NavLink>
               </div>
               <div className="sub__category__item__data__info">
                   <NavLink to={`#`} data-id={`${subCategory?.id}`}
                    onClick={deleteSubCatItem}
                    className="link__action"
                   >
                    {categoriesIsInfoLangData?.actions?.delete}
                   </NavLink>
               </div>
          </div>
          </>
     ) 
}
