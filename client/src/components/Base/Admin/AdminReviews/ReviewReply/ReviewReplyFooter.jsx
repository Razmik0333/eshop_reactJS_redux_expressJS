import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector } from '../../../../../helpers/reduxSelectors';
import { changeModal } from '../../../../../redux/ducks/configsDuck';

export default function ReviewReplyFooter() {
     const dispatch = useDispatch();
     const productsSaveLangData = useSelector(currentLanguageDataSelector)?.admin?.reviews;

     const confirmCreate = () => { 
          dispatch(changeModal(true));                
     }
     return (
          <button className="review__save"  onClick={confirmCreate}>
               {productsSaveLangData?.footer}
          </button>
     )
}
