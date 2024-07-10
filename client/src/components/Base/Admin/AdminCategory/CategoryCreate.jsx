import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import "./styles/_category_create.scss";
import { currentCategoryClear } from '../../../../redux/ducks/adminCategoryDuck';
export default function CategoryCreate() {
  const dispatch = useDispatch();
  const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.category;
  const clearCurrentCategory = () => {
    dispatch(currentCategoryClear())
  }
  return (
    <>
      <NavLink to={'/admin/category/update/page'} >
          <button className="create__category" onClick={clearCurrentCategory} >
              {categoriesInfoLangData?.create}
          </button>
      </NavLink>
    </>
  )
}
