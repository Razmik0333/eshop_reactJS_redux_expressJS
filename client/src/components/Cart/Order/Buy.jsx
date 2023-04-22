import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkEmail, checkPhoneNumber, checkStrLength } from '../../../helpers/functions/formFunctions';
import { currentLanguageDataSelector, getCartSelector, getTotalPriceSelector, getUserDataSelector, modalCloseSelector } from '../../../helpers/reduxSelectors';
import { root } from '../../../helpers/constants/constants';
import Modal from '../../Base/Modal/Modal';
import { changeModal } from '../../../redux/ducks/configsDuck';
import './styles/_buy.scss';
import { getClearedCart, getCountOfCart, getTotalPriceValue } from '../../../redux/ducks/cartDuck';
import { getCartProductsItems } from '../../../redux/ducks/productDuck';
import { useNavigate } from 'react-router-dom';
function Buy() {
     const userData = useSelector(getUserDataSelector);
     const cartData = useSelector(getCartSelector);
     const totalPrice = useSelector(getTotalPriceSelector);
     const dispatch = useDispatch();
     const buy = useSelector(currentLanguageDataSelector)?.buy;
     const modalIsClose = useSelector(modalCloseSelector);
     const [userName, setUserName] = useState(userData?.name);
     const [userEmail, setUserEmail] = useState(userData?.email);
     const [userPhone, setUserPhone] = useState('');
     const orderRef = useRef(null);
     const changeUserName = (e) => setUserName(e.target.value)
     const changeEmail = (e) => setUserEmail(e.target.value)
     const changePhoneNumber = (e) => setUserPhone(e.target.value)
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(orderRef?.current);
          await fetch(`${root}/list/buy`, {
               method: 'POST',
               body: data,    
          })
          .then(res => res.json())
          .then(() => {       
               dispatch(changeModal(true));
               dispatch(getClearedCart({}))                          
               dispatch(getCartProductsItems({}))                          
               dispatch(getTotalPriceValue(0))                          
               dispatch(getCountOfCart(0))   
                                     
          })
          .catch((e) => {
               console.log(e)
          })

     }

     return  <>
               {
                    modalIsClose ?
                      <Modal message={`${buy?.buy_info}`} /> 
                      : <></>

               }
               <form className="order__info container" onSubmit={handleSubmit} ref={orderRef}>
                         <h3>
                              {buy?.your_info}
                         </h3>  
                         <div className="user__info">
                              <div className="order__block">
                                   <input type="hidden" name="user_id" value={userData?.id} onChange={()=>{}} />
                              </div>
                              <div className="order__block">
                                   <input 
                                        type="text"
                                        className="order__input__item"
                                        name="user_name" 
                                        id="" 
                                        placeholder={`${buy?.name}*`}
                                        value = {userName}
                                        autoComplete="off"
                                        onChange={changeUserName}
                                   />
                                   <span className="user__name__output">
                                        {
                                             userName && checkStrLength(userName, 2) ? '' : `${buy?.inc_val}`
                                        }
                                   </span>     
                              </div>
                              <div className="order__block">
                                   <input 
                                        type="email" 
                                        className="order__input__item"
                                        name=""
                                        id="" 
                                        placeholder={`${buy?.email}*`}
                                        value = {userEmail}
                                        onChange={changeEmail}
                                   />
                                   <span className="user__email__output">
                                        {
                                             userEmail && checkEmail(userEmail) ? '' : `${buy?.inc_val}`
                                        }
                                   </span>     
                              </div>
                              <div className="order__block">
                                   <input
                                        type="text"
                                        className="order__input__item"
                                        name="user_phone"
                                        id=""
                                        placeholder={`${buy?.phone}*`}
                                        onChange={changePhoneNumber}
                                        value={userPhone}
                                   />
                                   <span className="user__phone__output">
                                   {
                                        checkStrLength(userPhone, 6) && !checkPhoneNumber(userPhone) ? '' : `${buy?.inc_val}`
                                   }
                                   </span>
                              </div>
                              <div className="order__block">
                                   <textarea className="order__input__item" name="user_comment" placeholder={`${buy?.your_review}`}>

                                   </textarea>    
                              </div>
                              <div className="order__block">
                                   <input type="hidden" name="user_order" value={JSON.stringify(cartData)} onChange={()=>{}} />
                              </div>
                              <div className="order__block">
                                   <input type="hidden" name="user_price" value={totalPrice} onChange={()=>{}} />
                              </div>
                              <div className="order__block">
                                   <input type="hidden" name="user_status" value="0" onChange={()=>{}} />
                              </div>
                              <button className="continue" >{buy?.continue}</button>
                         </div>
               </form>

     </>
     
}
export default Buy;
