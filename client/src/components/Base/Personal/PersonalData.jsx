import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataSelector, getUserId, modalCloseSelector } from '../../../helpers/reduxSelectors';
import { getModalOpenClose } from '../../../redux/ducks/configsDuck';
import ModalUploadAvatar from '../Modal/ModalUploadAvatar';
import { root } from '../../../helpers/constants/constants';
import "./personal-data/_personal-data.scss"
import { changeUserName } from '../../../redux/ducks/userDuck';
export default function PersonalData() {
     const dispatch = useDispatch();
     const [nameDisabled, setNameDisabled] = useState(true);
     const [emailDisabled, setEmailDisabled] = useState(true);
     const currentUser = useSelector(getUserDataSelector);
     const [userName, setUserName] = useState(currentUser.name);
     const [userEmail, setUserEmail] = useState(currentUser.email);
     const modalIsClose = useSelector(modalCloseSelector);
     const userId = useSelector(getUserId)
     const modalShow = (e) => {
          dispatch(getModalOpenClose(true))
     }
     const changeName = (e) => {
          setUserName(e.target.value);
          dispatch(changeUserName(userId,e.target.value))
     }
     const changeEmail = (e) => {
          setUserEmail(e.target.value)
     }
     const changeNameDisabled = () => {
          setNameDisabled(!nameDisabled)      
          setEmailDisabled(true)                                     
     }
     const changeEmailDisabled = () => {
          setEmailDisabled(!emailDisabled)      
          setNameDisabled(true)                             
     }
     const path = currentUser.picture.length > 0 ? `${root}/images/users/${currentUser.id}/${currentUser.picture}` 
     :`${root}/images/users/no-image.png`;
  return (
     <>
          {
               modalIsClose ?
                    <ModalUploadAvatar /> : <></>
          }
          
               <div className="avatar" >
                    <div className="user_page_avatar" onClick={modalShow}  >
                         <div className="avatar">
                              <img src={path} alt="" />
                         </div>
                    </div>
                    <div className="user__data">
                         Name
                         <label htmlFor="name">
                              <input type="text" name="user_name" id="name" disabled={nameDisabled} onInput={changeName} value={userName} />
                              <button onClick={changeNameDisabled} >
                                   <img src={`${root}/icons/config/change.png`} alt="" />
                              </button>
                         </label>
                         Email
                         <label htmlFor="email">
                              <input type="email" name="user_email" id="email" disabled={emailDisabled} onInput={changeEmail} value={userEmail} />
                              <button onClick={changeEmailDisabled} >
                                   <img src={`${root}/icons/config/change.png`} alt="" />
                              </button>
                         </label>

                    </div>
               </div>


     </>
  )
}
