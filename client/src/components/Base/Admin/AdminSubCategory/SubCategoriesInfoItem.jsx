import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';

export default function SubCategoriesInfoItem({subCategory}) {
     const categoriesIsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category;
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
                         to={`/admin/product/update/page`} 
                         data-id={`${subCategory?.id}`} 
                         // onClick={getProductId}
                         className="link__action"
                         >
                         {categoriesIsInfoLangData?.actions?.update}
                    </NavLink>
               </div>
               <div className="sub__category__item__data__info">
                   <NavLink to={`#`} data-id={`${subCategory?.id}`}
                    // onClick={deleteProductItem}
                    className="link__action"
                   >
                    {categoriesIsInfoLangData?.actions?.delete}
                   </NavLink>
               </div>
          </div>
          </>
     ) 
}
