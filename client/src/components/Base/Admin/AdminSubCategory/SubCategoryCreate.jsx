import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import "./styles/_sub__category__create.scss"
export default function SubCategoryCreate() {
     const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category;

     return (
       <>
         <NavLink to={'/admin/product/create/page'} >
             <button className="create__sub__category"  >
                 {categoriesInfoLangData?.create}
             </button>
         </NavLink>
       </>
     )
}
