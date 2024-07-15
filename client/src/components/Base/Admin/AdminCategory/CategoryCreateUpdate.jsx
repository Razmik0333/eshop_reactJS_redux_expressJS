import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adminCurrentCategoryIdSelector, adminCurrentCategorySelector, categoriesSelector, currentLanguageDataSelector, modalCloseSelector } from '../../../../helpers/reduxSelectors';
import { useRef } from 'react';
import { root } from '../../../../helpers/constants/constants';
import { changeModal } from '../../../../redux/ducks/configsDuck';
import Modal from '../../Modal/Modal';
import CategoryCreateUpdateFooter from './CategoryCreateUpdateFooter';
import "./styles/_category-create-update-form.scss"
import { fetchCurrentCategory } from '../../../../redux/ducks/adminCategoryDuck';

export default function CategoryCreateUpdate() {
     const dispatch = useDispatch();

     const [categoryNameArm, setCategoryNameArm] = useState('');
     const [categoryNameEng, setCategoryNameEng] = useState('');
     const [categoryNameRus, setCategoryNameRus] = useState('');
     const [categoryAlias, setCategoryAlias] = useState('');
     const [isCreated, setIsCreated] = useState('');
     const currentCategoryId = useSelector(adminCurrentCategoryIdSelector);
     console.log("🚀 ~ CategoryCreateUpdate ~ currentCategoryId:", currentCategoryId)
     useEffect(() => {
          currentCategoryId && dispatch(fetchCurrentCategory(currentCategoryId))
     }, []);
     const currentCategory = useSelector(adminCurrentCategorySelector)

     useEffect(() => {
          setCategoryNameArm(currentCategory?.arm_name);
          setCategoryNameEng(currentCategory?.eng_name);
          setCategoryNameRus(currentCategory?.rus_name);
          setCategoryAlias(currentCategory?.alias);
     }, [currentCategoryId, currentCategory]);
     const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.category?.category_create_page;
     const modalIsClose = useSelector(modalCloseSelector);
     const formRef = useRef(null);
     
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          const url =  currentCategoryId ? 
               `${root}/api/admin/category/update`:
                    `${root}/api/admin/category/create`;
          await fetch(url, {
               method: 'PUT',
               body: new URLSearchParams(data),    
          })
          .then(res => res.json())
          .then(res => {
                currentCategory && dispatch(fetchCurrentCategory(res?.id))
                setIsCreated(res);
                dispatch(changeModal(true))
                           
          })

     }
     
  return (
     <>
          {
                modalIsClose ?
                 isCreated ? <Modal message={'Saved'} /> 
                 : <Modal message={'Wrong'} />  :<></>

          }
          <div className="category__create__update">
               <div className="form__container">
                    <form onSubmit={handleSubmit} ref={formRef} >
                         <div className="form__items">
                              <input 
                                   type="hidden" 
                                   name="id" 
                                   id="" 
                                   value={currentCategoryId}
                                   onChange={() => {}}
                              />
                              <div className="form__item">
                                   <div className="form__item__header">{categoriesInfoLangData?.headers?.alias}</div>
                                   <input 
                                        type="text" 
                                        name="alias" 
                                        id="" 
                                        placeholder={categoriesInfoLangData?.placeholders?.alias} 
                                        value={categoryAlias}
                                        onChange={(e) => {
                                             setCategoryAlias(e.target.value)
                                        }}
                                   />
                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{categoriesInfoLangData?.headers?.name}</div>
                                        <input 
                                             type="text" 
                                             name="arm_name" 
                                             id="" 
                                             placeholder={categoriesInfoLangData?.placeholders?.description} 
                                             value={categoryNameArm}
                                             onChange={(e) => {
                                                  setCategoryNameArm(e.target.value)
                                             }}
                                        />
                                   </div>
                              <div className="form__item">
                                   <div className="form__item__header">{categoriesInfoLangData?.headers?.name_eng}</div>
                                        <input 
                                             type="text" 
                                             name="eng_name" 
                                             id="" 
                                             placeholder={categoriesInfoLangData?.placeholders?.description_eng} 
                                             value={categoryNameEng}
                                             onChange={(e) => {
                                                  setCategoryNameEng(e.target.value)
                                             }}
                                        />
                                   </div>
                              <div className="form__item">
                                   <div className="form__item__header">{categoriesInfoLangData?.headers?.name_rus}</div>
                                        <input 
                                             type="text" 
                                             name="rus_name" 
                                             id="" 
                                             placeholder={categoriesInfoLangData?.placeholders?.description_rus} 
                                             value={categoryNameRus}
                                             onChange={(e) => {
                                                  setCategoryNameRus(e.target.value)
                                             }}
                                        />
                                   </div>

                                   
                         <CategoryCreateUpdateFooter />
                         </div>  
                    </form>
               </div>

          </div>

     </>
  )
}
