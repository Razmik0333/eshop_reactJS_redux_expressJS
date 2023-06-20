import { useDispatch } from "react-redux";
import { changeModal } from "../../../redux/ducks/configsDuck";
import "./styles/_modal.scss"
import { useNavigate } from "react-router-dom";

function Modal({message}) {
     const dispatch = useDispatch();
     const navigate = useNavigate()
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
                onClick={() => {
                    dispatch(changeModal(false));
                    navigate(-1)
               }}
               >ԼԱՎ</button>
          </div>
     </div>
}

export default Modal;
