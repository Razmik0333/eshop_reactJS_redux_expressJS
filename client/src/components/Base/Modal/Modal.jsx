import { useDispatch } from "react-redux";
import { changeModal } from "../../../redux/ducks/configsDuck";
import "./styles/_modal.scss"

function Modal({message}) {
     const dispatch = useDispatch();
     console.log(message);
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
               >ԼԱՎ</button>
          </div>
     </div>
}

export default Modal;
