import { useDispatch, useSelector } from "react-redux";
import { changePopup, getPopupItemId } from "../../../redux/ducks/configsDuck";
import { root } from "../../../helpers/constants/constants";
import { popupItemIdSelector } from "../../../helpers/reduxSelectors";
import "./styles/_modal.scss"

function ModalPopup() {
     const dispatch = useDispatch();
     const pictureId = useSelector(popupItemIdSelector)
     return <div className="modal container">
          <div className="modal__popup">
              <div className="picture-block">
             
                    <img src={`${root}/images/products/${pictureId}.jpg`} alt="" />
              </div>

               <div className="button-block">
                    <button className="modal__resize" type="button"
                         onClick={() =>  {
                              dispatch(changePopup(false));
                              dispatch(getPopupItemId(null));

                              document.body.style.overflow = "initial";
                         }}
                    ></button>
               </div>
          </div>
     </div>
}

export default ModalPopup;
