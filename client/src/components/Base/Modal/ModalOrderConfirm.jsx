import { useDispatch, useSelector } from "react-redux";
import { getConfirmIdSelector, getUserId } from "../../../helpers/reduxSelectors";

import { changeModal } from "../../../redux/ducks/configsDuck";
import { changeOrderStatus, getCurrentStatus, orderConfirm } from "../../../redux/ducks/orderDuck";
import "./styles/_modal.scss"

function ModalOrderConfirm({message}) {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId)
     console.log(message);

     const orderIdForConfirm = useSelector(getConfirmIdSelector)
     console.log("🚀 ~ file: ModalOrderConfirm.jsx:14 ~ ModalOrderConfirm ~ orderIdForConfirm:", orderIdForConfirm)
     const changeOrderConfirm = (e) => {
          //dispatch(changeOrderStatus(orderIdForConfirm, 3));
          dispatch(changeOrderStatus(orderIdForConfirm, userId, 3));
          dispatch(changeModal(false))
          dispatch(orderConfirm(false));
          dispatch(getCurrentStatus(3))
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
                onClick={changeOrderConfirm}
               >ԱՅՈ</button>
          </div>
     </div>
}

export default ModalOrderConfirm;

