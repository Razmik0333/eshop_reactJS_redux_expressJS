import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { adminCategoriesSavedSelector, currentLanguageDataSelector, modalCloseSelector } from '../../../../helpers/reduxSelectors';
import "./styles/_category_create.scss";
import { currentCategoryClear } from '../../../../redux/ducks/adminCategoryDuck';
import { changeModal } from '../../../../redux/ducks/configsDuck';
import Modal from '../../Modal/Modal';
import { deleteCacheFiles } from '../../../../redux/ducks/adminCategoryDuck';
export default function CategoryCreate() {
  const dispatch = useDispatch();
  const modalIsClose = useSelector(modalCloseSelector);

  const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.category;
  const clearCurrentCategory = () => {
    dispatch(currentCategoryClear())
  }
  const saveChanges = () => {
    dispatch(deleteCacheFiles());  
    dispatch(changeModal(true))    
  }
  const isSaved = useSelector(adminCategoriesSavedSelector)

  return (
    <>
    {
      modalIsClose ?
        isSaved ? <Modal message={'Saved'} /> 
        : <Modal message={'Wrong'} />  :<></>
    }
      <NavLink to={'/admin/category/update/page'} >
          <button className="create__category" onClick={clearCurrentCategory} >
              {categoriesInfoLangData?.create}
          </button>
      </NavLink>
      <button className="create__product"  onClick={saveChanges}>
      {categoriesInfoLangData?.save}
      </button>
    </>
  )
}
