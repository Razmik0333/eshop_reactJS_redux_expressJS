
import { useDispatch, useSelector } from 'react-redux';
import { adminCategoriesListSelector, adminCurrentCategoryIdSelector, adminCurrentCategorySelector, adminCurrentSubCategorySelector, adminSubCategoryIdSelector, categoriesSelector, currentLanguageDataSelector, modalCloseSelector } from '../../../../helpers/reduxSelectors';
import { useEffect, useRef, useState } from 'react';
import { root } from '../../../../helpers/constants/constants';
import { changeModal } from '../../../../redux/ducks/configsDuck';
import Modal from '../../Modal/Modal';
import "./styles/_sub__category__create__update.scss"
import { fetchCurrentCategory } from '../../../../redux/ducks/adminCategoryDuck';
import SubCategoryCreateUpdateFooter from './SubCategoryCreateUpdateFooter';
import { fetchCurrentSubCategory } from '../../../../redux/ducks/adminSubCategoryDuck';

export default function SubCategoryCreateUpdate() {

     const dispatch = useDispatch();
     const [subCategoryNameArm, setSubCategoryNameArm] = useState('');
     const [subCategoryNameEng, setSubCategoryNameEng] = useState('');
     const [subCategoryNameRus, setSubCategoryNameRus] = useState('');
     const [subCategoryAlias, setSubCategoryAlias] = useState('');
     const [categoryId, setCategoryId] = useState(1);
     const [isCreated, setIsCreated] = useState('');
     const formRef = useRef(null);
     const categories = useSelector(adminCategoriesListSelector);
     const currentSubCategoryId = useSelector(adminSubCategoryIdSelector)
     console.log("🚀 ~ SubCategoryCreateUpdate ~ currentSubCategoryId:", currentSubCategoryId)
     useEffect(() => {
         currentSubCategoryId && dispatch(fetchCurrentSubCategory(currentSubCategoryId))
     }, [currentSubCategoryId]);
     const currentCategory = useSelector(adminCurrentCategorySelector)
     console.log("🚀 ~ SubCategoryCreateUpdate ~ currentCategory:", currentCategory)
     const currentSubCategory = useSelector(adminCurrentSubCategorySelector)

     useEffect(() => {
          setCategoryId(currentSubCategory?.category);
          setSubCategoryNameArm(currentSubCategory?.arm_name);
          setSubCategoryNameEng(currentSubCategory?.eng_name);
          setSubCategoryNameRus(currentSubCategory?.rus_name);
          setSubCategoryAlias(currentSubCategory?.alias);
     }, [currentSubCategoryId, currentSubCategory]);

     const subCategoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category?.sub_category_create_page;
     console.log("🚀 ~ SubCategoryCreateUpdate ~ subCategoriesInfoLangData:", subCategoriesInfoLangData)
     const modalIsClose = useSelector(modalCloseSelector);
     const changeCategory = (e) => {
          setCategoryId(e.target.value)
     }
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          const url =  currentSubCategoryId ? 
               `${root}/api/admin/subcategory/update`:
                    `${root}/api/admin/subcategory/create`;

          await fetch(url, {
               method: 'PUT',

               body: new URLSearchParams(data),    
          })
          .then(res => res.json())
          .then(res => {
               console.log(res);
               
               currentSubCategoryId && dispatch(fetchCurrentSubCategory(res?.id))
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
               <div className="sub_category__create__update">
                    <div className="form__container">
                         <form onSubmit={handleSubmit} ref={formRef} >
                              <div className="form__items">
                              <input 
                                   type="hidden" 
                                   name="id" 
                                   id="" 
                                   value={currentSubCategoryId}
                                   onChange={() => {}}
                              />
                              <div className="form__item">
                                   <div className="form__item__header">{subCategoriesInfoLangData?.headers?.cat_index}</div>
                                   <label htmlFor="cat_index">
                                        <select onChange={changeCategory} id="cat_index" name="category"
                                        value={categoryId}
                                        >
                                             <option>{subCategoriesInfoLangData?.headers?.select_category}</option>
                                             {
                                                  categories.map(cat => {
                                                       
                                                       return  <option 
                                                            value={`${cat?.id}`}
                                                            key={`val__${cat?.id}`} 
                                                            
                                                       >{cat?.id}</option>

                                                  })
                                             }
                                        </select>
                                   </label>
                              </div>
                              
                                        {/* <div className="form__item">
                                             <div className="form__item__header">{subCategoriesInfoLangData?.headers?.sub_cat_index}</div>
                                             <label htmlFor="sub_cat_index">
                                                  <select onChange={()=>{}} id="sub_cat_index" name="sub_category"
                                                  value={currentCategory}
                                                  >
                                                       <option>{subCategoriesInfoLangData?.headers?.select_sub_category}</option>
                                                       {
                                                            [].map(cat => {
                                                                 
                                                                 return  <option 
                                                                      value={`${cat?.id}`}
                                                                      key={`val__${cat?.id}`} 
                                                                      
                                                                 >{cat?.arm_name}</option>

                                                            })
                                                       }
                                                  </select>
                                             </label>
                                        </div> */}
                              
                              <div className="form__item">
                                   <div className="form__item__header">{subCategoriesInfoLangData?.headers?.alias}</div>
                                   <input 
                                        type="text" 
                                        name="alias" 
                                        id="" 
                                        placeholder={subCategoriesInfoLangData?.placeholders?.alias} 
                                        value={subCategoryAlias}
                                        onChange={(e) => {
                                             setSubCategoryAlias(e.target.value)
                                        }}
                                   />
                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{subCategoriesInfoLangData?.headers?.name}</div>
                                        <input 
                                             type="text" 
                                             name="arm_name" 
                                             id="" 
                                             placeholder={subCategoriesInfoLangData?.placeholders?.description} 
                                             value={subCategoryNameArm}
                                             onChange={(e) => {
                                                  setSubCategoryNameArm(e.target.value)
                                             }}
                                        />
                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{subCategoriesInfoLangData?.headers?.name_eng}</div>
                                        <input 
                                             type="text" 
                                             name="eng_name" 
                                             id="" 
                                             placeholder={subCategoriesInfoLangData?.placeholders?.description_eng} 
                                             value={subCategoryNameEng}
                                             onChange={(e) => {
                                                  setSubCategoryNameEng(e.target.value)
                                             }}
                                        />
                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{subCategoriesInfoLangData?.headers?.name_rus}</div>
                                        <input 
                                             type="text" 
                                             name="rus_name" 
                                             id="" 
                                             placeholder={subCategoriesInfoLangData?.placeholders?.description_rus} 
                                             value={subCategoryNameRus}
                                             onChange={(e) => {
                                                  setSubCategoryNameRus(e.target.value)
                                             }}
                                        />
                              </div>
     
                                   <SubCategoryCreateUpdateFooter />
                              </div>  
                         </form>
                    </div>
     
               </div>
     
          </>
       )
}
