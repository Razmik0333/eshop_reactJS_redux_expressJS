import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from '../../../../../redux/ducks/configsDuck';
import { adminOrdersSaveSelector, modalCloseSelector } from '../../../../../helpers/reduxSelectors';
import { fetchOrdersChanges } from '../../../../../redux/ducks/adminOrderDuck';
import "../styles/_admin-save-footer.scss"
import Modal from '../../../Modal/Modal';
export default function AdminOrderFooter() {
  const dispatch = useDispatch();
  const confirmSave = () => { 
    dispatch(fetchOrdersChanges())
    dispatch(changeModal(true));                
  }
  const modalIsClose = useSelector(modalCloseSelector);

  const isSaved = useSelector(adminOrdersSaveSelector);
return (
  <>

  {
    modalIsClose ? 
      isSaved ? <Modal message={"Saved"}/> : <Modal message={"WRONG"}/> : <></>

  }
    <button className="order__save"  onClick={confirmSave}>
         Save
    </button>
  </>
)
}
