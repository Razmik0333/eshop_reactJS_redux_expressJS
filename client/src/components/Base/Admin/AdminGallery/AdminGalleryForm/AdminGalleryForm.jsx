import React, { useRef } from 'react'
import './styles/_admin-gallery-form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector, modalCloseSelector } from '../../../../../helpers/reduxSelectors';
import { useState } from 'react';
import { root } from '../../../../../helpers/constants/constants';
import { getGalleryAdd } from '../../../../../redux/ducks/adminProductDuck';
import { changeModal } from '../../../../../redux/ducks/configsDuck';
import Modal from '../../../Modal/Modal';
export default function AdminGalleryForm() {
     const [galleryName, setGalleryName] = useState("");
     const [isAdd, setIsAdd] = useState(false)
     const formRef = useRef(null);
     const dispatch = useDispatch();
     const modalIsClose = useSelector(modalCloseSelector);

     const productsSaveLangData = useSelector(currentLanguageDataSelector)?.admin?.gallery;
     const handleSubmit = async(e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          
          await fetch(`${root}/api/admin/gallery`, {
               method: 'POST',

               body: data,    
          })
          .then(res => res.json())
          .then(res => {
               if( res === "ok") {
                    console.log(res);
                    dispatch(getGalleryAdd(true))
                    setIsAdd(true)
               } else{
                    setIsAdd(false)
                    dispatch(getGalleryAdd(false))
               }
               dispatch(changeModal(true));          
          }).catch(e => console.log("error", e))
     }
  return <>
          {
                modalIsClose ?
                isAdd ? <Modal message={"Հաջողությամբ Ավելացվեց"} /> 
                 : <Modal message={"Չստացվեց, կրկին փորձեք"} />  :<></>

          }
     <div className="admin-gallery">
               <form onSubmit={handleSubmit} ref={formRef}>

                    <div className="form__item">
                         <div className="form__item__header">{productsSaveLangData?.name}</div>
                         <input 
                              type="text" 
                              name="description" 
                              placeholder={productsSaveLangData?.name}
                              value={galleryName}
                              onChange={(e) => {
                                   setGalleryName(e.target.value)
                              }}
                         />
                    </div>
                    <div className="form__item form__item__insert__picture">
                         <div className="form__item__header">{productsSaveLangData?.insert_file}</div>
                         <input type="file" name="image" id="" />
                    </div>
                    <button className="product__save"  onClick={() => {}}>
                         {productsSaveLangData?.save}
                    </button>
               </form>
     </div>
     </>
  
}
