import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from '../../../../redux/ducks/configsDuck';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';

export default function SubCategoryCreateUpdateFooter() {
     const dispatch = useDispatch();
     const subCategoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category?.sub_category_create_page;

     const confirmCreate = () => { 
          dispatch(changeModal(true));                
     }
     return (
          <button className="order__save"  onClick={confirmCreate}>
               {subCategoriesInfoLangData?.headers?.save}
          </button>
     )
}
