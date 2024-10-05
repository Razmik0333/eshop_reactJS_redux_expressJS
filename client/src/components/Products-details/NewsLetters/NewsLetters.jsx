import { useEffect, useState } from 'react';
import './styles/_newsletter-panel.scss';
import { checkEmail } from '../../../helpers/functions/formFunctions';
import { changeModal } from '../../../redux/ducks/configsDuck';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailNoticeSelector, modalCloseSelector } from '../../../helpers/reduxSelectors';
import Modal from '../../Base/Modal/Modal';
import { fetchEmailForNotice } from '../../../redux/ducks/userDuck';
function NewsLetters() {
     const dispatch = useDispatch();
     const [emailRecommend, setEmailRecommend] = useState('');
     const [emailCorrect, setEmailCorrect] = useState(true);
     const modalIsClose = useSelector(modalCloseSelector);

     const changeEmail = (e) => {
          setEmailRecommend(e.target.value)
     }
     const clickButton = () => {
          const isValid = emailRecommend && checkEmail(emailRecommend);
          setEmailCorrect(isValid);          
          isValid ? dispatch(fetchEmailForNotice(emailRecommend)) : <></>;
          isValid ? dispatch(changeModal(true)) :<></>;
     }
     const isNotice = useSelector(getEmailNoticeSelector);
     return (
          <>
          {
               modalIsClose ?
                    isNotice ? 
                      <Modal message={`ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ ԴՈՒՔ ԳՐԱՆՑՎԵԼ ԵՔ ՆՈՐՈՒԹՅՈՒՆՆԵՐԻՆ`} /> 
                      : <Modal message={`ԴՈՒՔ ԱՐԴԵՆ ԳՐԱՆՑՎԵԼ ԵՔ ՆՈՐՈՒԹՅՈՒՆՆԵՐԻՆ`} />
                      :<></>
          }

          <div className="newsletter">
               <div className="newsletter__content">
                    <span>NEWSLETTER:</span>
                    <input className={`newsletter__email ${!emailCorrect && `wrong`}`   }  type="email"  placeholder="Enter your email address" value={emailRecommend} onChange={changeEmail} />
                    <button className="newsletter__enter" onClick={clickButton} >
                         <svg height="512px" className="newsletter__arrow" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" >
                              <path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z"/>
                         </svg>
                    </button>
               </div>
          </div>
          </>
     )
}

export default NewsLetters;
