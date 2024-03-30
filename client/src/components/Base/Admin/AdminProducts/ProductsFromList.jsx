import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { root } from '../../../../helpers/constants/constants'; 
import { currentLanguageDataSelector, modalCloseSelector } from '../../../../helpers/reduxSelectors';
import "./styles/_admin-insert-file.scss"
import Modal from '../../Modal/Modal';
import { changeModal } from '../../../../redux/ducks/configsDuck';
import { useNavigate } from 'react-router-dom';
export default function ProductsFromList() {
     const dispatch = useDispatch();
     const [isCreated, setIsCreated] = useState(false);
     const inputFile = useRef(null);
     const navigate = useNavigate();
     const productsUpdateLangData = useSelector(currentLanguageDataSelector)?.admin?.products?.product_from_list;
     const handleSubmit = async (e) => {
           e.preventDefault();
           const data = new FormData(formRef.current);
          await fetch(`${root}/api/admin/product/data`,
          {
                method: 'POST',
                body: data,    
           }
          )
           .then(res => res.json())
           .then(res => {
               console.log(res);
               res && setIsCreated(true)
               dispatch(changeModal(true));
              
               // navigate('/admin/product');

           }).catch(err => {throw err})
     }

     const formRef = useRef(null);
      const modalIsClose = useSelector(modalCloseSelector);
      console.log("🚀 ~ ProductsFromList ~ modalIsClose:", modalIsClose)

     return (
          <>
               {modalIsClose ?
                 isCreated ? <Modal message={'Saved'} /> 
                 : <Modal message={'Wrong'} />  :<></>   

               } 
               <div className="admin__insert__file">
                    <div className="form__container ">
                         <form onSubmit={handleSubmit} ref={formRef} encType="multipart/form-data" >
                              <div className="form__items">      
                                   <div className="form__item form__item__insert__file">
                                        <div className="form__item__header">{productsUpdateLangData?.insert_file}</div>
                                        <input type="file" name="list" id="" ref={inputFile}  multiple  />
                                   </div>
                                   <button className="list__save" type="submit">
                                   {productsUpdateLangData?.save}
                                   </button>
                              </div>  
                         </form>
                    </div>

               </div>

          </>
     )
}
