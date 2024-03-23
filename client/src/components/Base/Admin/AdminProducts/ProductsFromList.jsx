import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import "./styles/_admin-insert-file.scss"
export default function ProductsFromList() {
     const productsUpdateLangData = useSelector(currentLanguageDataSelector)?.admin?.products?.product_from_list;
     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log('good');
     }
     
     const formRef = useRef(null);

     return <>
     {/* {
           modalIsClose ?
            isCreated ? <Modal message={'Saved'} /> 
            : <Modal message={'Wrong'} />  :<></>

     } */}
     <div className="admin__insert__file">
          <div className="form__container ">
               <form onSubmit={handleSubmit} ref={formRef} encType="multipart/form-data" >
                    <div className="form__items">      
                         <div className="form__item form__item__insert__file">
                              <div className="form__item__header">{productsUpdateLangData?.insert_file}</div>
                              <input type="file" name="list" id="" />
                         </div>
                         <button className="list__save" type="submit">
                         {productsUpdateLangData?.save}
                         </button>
                    </div>  
               </form>
          </div>

     </div>

     
     
</>
}
