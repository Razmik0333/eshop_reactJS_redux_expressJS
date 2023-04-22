import { useDispatch, useSelector } from "react-redux";
import { adminProductIdSelector,  getUserId } from "../../../helpers/reduxSelectors";
import { fetchProductsForDelete, resetIsDeleted } from "../../../redux/ducks/adminProductDuck";
import { changeModal } from "../../../redux/ducks/configsDuck";
import "./styles/_modal.scss"

function ModalProductDelete({message}) {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const productIdForUpdate = useSelector(adminProductIdSelector);

     const productDelete = (e) => {
          dispatch(fetchProductsForDelete(userId,productIdForUpdate));
          dispatch(changeModal(false))
          //dispatch(resetIsDeleted(false))
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
                onClick={productDelete}
               >ԱՅՈ</button>
          </div>
     </div>
}

export default ModalProductDelete;

