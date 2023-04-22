import { useDispatch, useSelector } from 'react-redux';
import ModalPopup from '../../../Base/Modal/ModalPopup';
import { root } from '../../../../helpers/constants/constants';
import './styles/_product-pictures.scss';
import { changePopup, getPopupItemId } from '../../../../redux/ducks/configsDuck';
import { currentProductIdSelector, popupCloseSelector } from '../../../../helpers/reduxSelectors';
function ProductPictures({path}) {
     const dispatch = useDispatch();
     const popupIsShow = useSelector(popupCloseSelector);
     const currentProductId = useSelector(currentProductIdSelector);
     console.log(path);
     const showProductPopup = (e) => {
          dispatch(getPopupItemId(e.target.dataset.id));

          dispatch(changePopup(true));
          document.body.style.overflow = "hidden";
     }

     return (
          <>
               {popupIsShow ?  <ModalPopup id={currentProductId}/> : <></>}
               <div className="product__pictures">
                    <div className="base__picture">
                         <img src={`${root}${path}`} alt="" />
                         <button 
                         className="resize-picture"
                         data-id={currentProductId} 
                         onClick={showProductPopup}
                         > </button>
                    </div>
                    <div className="other__pictures">
                         <div className="other__pictures__items">
                              <img src="../img/36.jpg" alt="" />
                              <img src="../img/36.jpg" alt="" />
                              <img src="../img/36.jpg" alt="" />
                              <img src="../img/36.jpg" alt="" />
                         </div>
                         <div className="other__pictures__buttons">
                              <button className="prev__picture">
                                   <svg height="512px" fill="#fff" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px">
                                        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
                                   </svg>
                              </button>
                              <button className="next__picture">
                                   <svg height="512px" fill="#fff" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px">
                                        <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>
                                   </svg>

                              </button>
                         </div>
                    </div>
               </div>

          </>

     )
}
export default ProductPictures;
