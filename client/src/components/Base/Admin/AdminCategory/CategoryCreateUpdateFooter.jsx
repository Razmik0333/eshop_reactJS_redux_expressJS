import React from 'react'
import { changeModal } from '../../../../redux/ducks/configsDuck';
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';

export default function CategoryCreateUpdateFooter() {
     const dispatch = useDispatch();
     const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.category?.category_create_page;

     const confirmCreate = () => { 
          dispatch(changeModal(true));                
     }
     return (
          <button className="order__save"  onClick={confirmCreate}>
               {categoriesInfoLangData?.headers?.save}
          </button>
     )
}
