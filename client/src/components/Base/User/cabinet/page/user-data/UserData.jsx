import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAvatartUrl, getUserDataSelector, getUserId } from '../../../../../../helpers/reduxSelectors'
import { root } from '../../../../../../helpers/constants/constants'
import "./styles/_user-data.scss"
import { userAvatarURL } from '../../../../../../redux/ducks/userDuck'
export default function UserData() {
     const dispatch = useDispatch()
     const userId = useSelector(getUserId)
     const avatar = useSelector(getAvatartUrl);
     console.log("🚀 ~ file: UserData.jsx:11 ~ UserData ~ avatar:", avatar)
     const [avatarUrl, setAvatarUrl] = useState(avatar);
     const currentUser = useSelector(getUserDataSelector);
     const avatarRef = useRef(null);
     const changeAvatar = (e) => {
          console.log(e.target.files);
         // setAvatarUrl()
     }
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(avatarRef.current);

          await fetch(`${root}/api/avatar`, {
               method:"POST",
               body:data
          }).then(res => res.json())
          .then(res => {
               console.log(typeof res);

               dispatch(userAvatarURL(`${root}${res}`))
               setAvatarUrl(`${root}${res}`)
          })
          .catch (e => console.log( e))
     }

  return (
     <form className="user_page_avatar" method="POST" ref={avatarRef} encType="multipart/form-data" >
          <div className="avatar">
               <label htmlFor="avatar">
                    <img src={avatarUrl} alt="" />
                    <input type="file" name={`${userId}`} id="avatar" onChange={handleSubmit} />
                    <input type="hidden" name="user_id" value={userId}  />
               </label>
          </div>
          <h1 className="user__name">{currentUser.name}</h1>
          <h3 className="user__email">{currentUser.email}</h3>
     </form>
  )
}
