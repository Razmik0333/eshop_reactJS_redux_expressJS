import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import "./styles/_sub__category__create.scss"
import { currentSubCategoryClear } from '../../../../redux/ducks/adminSubCategoryDuck';
export default function SubCategoryCreate() {
  const dispatch = useDispatch();
     const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category;
    const clearCurrentSubCategoryId = () => {
      dispatch(currentSubCategoryClear())

    }
     return (
       <>
         <NavLink to={'/admin/subcategory/create/page'} >
             <button className="create__sub__category" onClick={clearCurrentSubCategoryId} >
                 {categoriesInfoLangData?.create}
             </button>
         </NavLink>
       </>
     )
}
