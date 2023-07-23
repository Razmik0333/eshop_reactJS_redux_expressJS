import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAvatartUrl, getUserDataSelector, getUserId, modalCloseSelector } from '../../../../../../helpers/reduxSelectors'
import { root } from '../../../../../../helpers/constants/constants'
import "./styles/_user-data.scss"
import { userAvatarURL } from '../../../../../../redux/ducks/userDuck'
import ModalUploadAvatar from '../../../../Modal/ModalUploadAvatar'
import { getModalOpenClose } from '../../../../../../redux/ducks/configsDuck'
export default function UserData() {
     const dispatch = useDispatch()
     const userId = useSelector(getUserId)
     const modalIsClose = useSelector(modalCloseSelector)
     const avatarUrl = useSelector(getAvatartUrl)
     console.log("🚀 ~ file: UserData.jsx:14 ~ UserData ~ avatarUrl:", avatarUrl)
     const currentUser = useSelector(getUserDataSelector);
     const [avatar, setAvatar] = useState(currentUser.picture);
     console.log("🚀 ~ file: UserData.jsx:17 ~ UserData ~ avatar:", avatar)
     console.log("🚀 ~ file: UserData.jsx:16 ~ UserData ~ currentUser:", currentUser)
     const modalShow = (e) => {
          console.log(e.target.files);
          dispatch(getModalOpenClose(true))
     }


  return (
     <>
          {
               modalIsClose ?
                    <ModalUploadAvatar /> : <></>
          }
          
               <div className="avatar" onClick={modalShow}>
                    <div className="user_page_avatar"   >
                         <div className="avatar">
                              <img src={currentUser.picture} alt="" />

                              <h1 className="user__name user__data">{currentUser.name}</h1>
                              <h3 className="user__email user__data">{currentUser.email}</h3>
                              <h5 className="user__gender user__data">{currentUser.gender}</h5>
                         </div>
                    </div>
               </div>


     </>
  )
}
