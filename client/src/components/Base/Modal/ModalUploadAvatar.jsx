

import { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserDataSelector,  getUserId } from "../../../helpers/reduxSelectors";
import Avatar from "react-avatar-edit";
import { changeModal } from "../../../redux/ducks/configsDuck";
import "./styles/_modal.scss"
import { root } from "../../../helpers/constants/constants";
import { userAvatarPicture } from "../../../redux/ducks/userDuck";
import 'react-image-crop/src/ReactCrop.scss';
import "../Modal/styles/_modal.scss";

function ModalUploadAvatar() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const avatarRef = useRef(null)
     const currentUser = useSelector(getUserDataSelector);
     const path = currentUser.picture.length > 0 ?  `${root}/images/users/${currentUser.id}/${currentUser.picture}` 
     :`${root}/images/users/no-image.png`
     const [avatarUrl, setAvatarUrl] = useState(path);
     const [src, setSrc] = useState(null);
     const [preview, setPreview] = useState(null);
     const closeModal = () => {
          dispatch(changeModal(false))
     }
    const  onClose = () => {
          setPreview(null)
    }
    const  onCrop = view => {
          setPreview(view)
    }

     const handleSubmit = async (e) => {
          e.preventDefault();
          await fetch(`${root}/api/avatar`, {
               method:"POST",
               headers:{
                    "Content-Type":"application/json"
               },
               body:JSON.stringify({
                    preview,
                    userId
               })
          })
          .then(res => res.json())
          .then(res => {
               dispatch(userAvatarPicture(`${res}`))
               setAvatarUrl(`${res}`)
               dispatch(changeModal(false))
          })
          .catch (e => console.log(e))
     }


     return <div className="modal container">
          <div className="modal__block">
               <div className="close" onClick={closeModal}>
                    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
               </div>
               <div className="modal__header">
                    ՆԿԱՐԻ ՓՈԽԱՐԻՆՈՒՄ
               </div>
               <div className="modal__content">
                    <form className="user_page_avatar"
                         method="POST"
                         ref={avatarRef}
                         encType="multipart/form-data"
                         onSubmit={handleSubmit} 
                    >
                         <div className="avatar">
                              <img src={avatarUrl} alt="" />
                         </div>
                         <div className="new_avatar">
                              <p className="new_avatar_header">
                                   Ընտրեք Նկար
                              </p>
                              <Avatar 
                                   width={220}
                                   height={180} 
                                   src={src}
                                   onCrop={onCrop}
                                   onClose={onClose}
                              />
                         </div>
                         <button className="modal__button" type="submit"
                         onClick={handleSubmit}
                         >ՊԱՀՊԱՆԵԼ</button>
                    </form>
               </div>
          </div>
     </div>
}

export default ModalUploadAvatar;

