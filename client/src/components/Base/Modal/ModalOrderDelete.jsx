import { useDispatch, useSelector } from "react-redux";
import { adminOrderIdSelector,  getUserId } from "../../../helpers/reduxSelectors";
import { fetchOrdersForDelete, resetIsDeleted } from "../../../redux/ducks/adminOrderDuck";
import { changeModal } from "../../../redux/ducks/configsDuck";
import "./styles/_modal.scss"

function ModalOrderDelete({message}) {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const orderIdForUpdate = useSelector(adminOrderIdSelector);
     console.log("🚀 ~ file: ModalOrderDelete.jsx ~ line 11 ~ ModalOrderDelete ~ orderIdForUpdate", orderIdForUpdate)

     const orderDelete = (e) => {
          dispatch(fetchOrdersForDelete(userId,orderIdForUpdate));
          dispatch(changeModal(false))
          dispatch(resetIsDeleted(false))
     }
     


     return <div className="modal container">
          <div className="modal__block">
               <div className="modal__header">
                    ԾԱՆՈՒՑՈՒՄ
               </div>
               <div className="modal__content">
                    {message}
               </div>
               <button className="modal__button" type="button"
                onClick={() => dispatch(changeModal(false))}
               >ՈՉ</button>
               <button className="modal__button" type="button"
                onClick={orderDelete}
               >ԱՅՈ</button>
          </div>
     </div>
}

export default ModalOrderDelete;

