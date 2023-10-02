import React from 'react';
import { useSelector } from 'react-redux'
import { getUserDataSelector } from '../../../../../../helpers/reduxSelectors'
import { root } from '../../../../../../helpers/constants/constants';
import "./styles/_user-data.scss"
export default function UserData() {
     const currentUser = useSelector(getUserDataSelector);
     console.log("🚀 ~ file: UserData.jsx:7 ~ UserData ~ currentUser:", currentUser)

     //const picturePath =  // 
     const path = currentUser.picture.length > 0 ?  `${root}/images/users/${currentUser.id}/${currentUser.picture}` 
     :`${root}/images/users/no-image.png`
  return (
     <>
          <div className="avatar">
               <div className="user_page_avatar"   >
                    <div className="avatar">
                         <img src={`${path}`} alt="" />
                         <div className="user__data">
                              <p className="user__name">{currentUser.name}</p>
                              <p className="user__email">{currentUser.email}</p>
                              <p className="user__gender">{currentUser.gender}</p>

                         </div>
                    </div>
               </div>
          </div>
     </>
  )
}
