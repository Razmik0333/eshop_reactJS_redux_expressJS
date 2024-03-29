import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminProductIdSelector, adminProductSelector, categoriesSelector, currentLanguageDataSelector, modalCloseSelector } from "../../../../helpers/reduxSelectors";
import { root } from '../../../../helpers/constants/constants';
import Modal from '../../Modal/Modal';
import { changeModal } from '../../../../redux/ducks/configsDuck';
import ProductCreateUpdateFooter from './ProductCreateUpdateFooter';
import { changeCurrentProduct, fetchProductItem } from '../../../../redux/ducks/adminProductDuck';
import "./styles/_product-create-update-form.scss";

function ProductCreateUpdate() {
     const [isCreated, setIsCreated] = useState(false);
     const modalIsClose = useSelector(modalCloseSelector);
     const [productName, setProductName] = useState(``);
     const [productDesc, setProductDesc] = useState(``);
     const [productCost, setProductCost] = useState(``);
     const [productDiscount, setProductDiscount] = useState(``);
     const [productArticul, setProductArticul] = useState("");
     const [selectedCat, setSelectedCat] = useState('');
     const dispatch = useDispatch();
     const currentProduct = useSelector(adminProductSelector);
     const currentProductId = useSelector(adminProductIdSelector)
     const productsUpdateLangData = useSelector(currentLanguageDataSelector)?.admin?.products?.product_create_page;

     useEffect(() => {
          dispatch(fetchProductItem(currentProductId))
     }, []);
     useEffect(() => {
        setProductName(currentProduct?.descr);
          setProductDesc(currentProduct?.main);
          setProductCost(currentProduct?.cost);
          setProductDiscount(currentProduct?.discount);
          setProductArticul( currentProduct?.['1c_articul']);
          setSelectedCat(currentProduct?.category)
     }, [currentProductId, currentProduct]);
     
     const changeCategory = (e) => {
          setSelectedCat(+e.target.value);
     }
     const formRef = useRef(null);
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          const url = currentProduct ? 
               `${root}/api/admin/product/update`:
                    `${root}/api/admin/product/create`

          await fetch(url, {
               method: 'PUT',
               body: data,    
          })
          .then(res => res.json())
          .then(res => {
               currentProduct && dispatch(changeCurrentProduct(res[0]))
               setIsCreated(res);
               dispatch(changeModal(true))
                           
          })

     }
     const categories = useSelector(categoriesSelector)
     return <>
          {
                modalIsClose ?
                 isCreated ? <Modal message={'Saved'} /> 
                 : <Modal message={'Wrong'} />  :<></>

          }
          <div className="product__create__update">
               <div className="form__container">
                    <form onSubmit={handleSubmit} ref={formRef} encType="multipart/form-data" >
                         <div className="form__items">
                              <div className="form__item">
                                   <div className="form__item__header">{productsUpdateLangData?.headers?.cat_index}</div>
                                   <label htmlFor="cat_index">
                                        <select onChange={changeCategory} id="cat_index" name="category"
                                        value={selectedCat}
                                        >
                                             <option>{productsUpdateLangData?.placeholders?.select_category}</option>
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
                                   <input 
                                        type="hidden" 
                                        name="alias" 
                                        id="" 
                                        value={
                                             `${categories[selectedCat- 1]?.alias}`
                                        } 
                                        onChange={() => {}} 

                                   />
                                   <input 
                                        type="hidden" 
                                        name="arm_name" 
                                        id="" 
                                        value={`${categories[selectedCat- 1]?.arm_name}`} 
                                        onChange={() => {}} 
                                        />
                              { 
                                   currentProduct &&
                                   <input 
                                        type="hidden" 
                                        name="id" 
                                        id="" 
                                        value={`${currentProduct.id}`} 
                                        onChange={() => {}} 
                                        />
                              }
                         <div className="form__item">
                                   <div className="form__item__header">{productsUpdateLangData?.headers?.name}</div>
                                   <input 
                                        type="text" 
                                        name="descr" 
                                        id="" 
                                        placeholder={productsUpdateLangData?.placeholders?.description} 
                                        value={productName}
                                        onChange={(e) => {
                                             setProductName(e.target.value)
                                        }}
                                   />
                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{productsUpdateLangData?.headers?.description}</div>
                                   <textarea 
                                   type="text" 
                                   name="main" 
                                   id="" 
                                   placeholder={productsUpdateLangData?.placeholders?.text}
                                   value={productDesc}
                                   onChange={(e) => {
                                        setProductDesc(e.target.value)
                                   }}
                                   >
                                        {productDesc}
                                   </textarea>

                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{productsUpdateLangData?.headers?.price}</div>
                                   <input 
                                   type="text" 
                                   name="cost" id="" 
                                   placeholder={productsUpdateLangData?.placeholders?.price}
                                   value={productCost}
                                   onChange={(e) => {
                                        setProductCost(e.target.value)
                                   }}
                                   />
                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{productsUpdateLangData?.headers?.discount}</div>
                                   <input 
                                   type="text" 
                                   name="discount" 
                                   id="" 
                                   placeholder={productsUpdateLangData?.placeholders?.discount}
                                   value={productDiscount}
                                   onChange={(e) => {
                                        setProductDiscount(e.target.value)
                                   }}
                                   />
                              </div>
                              <div className="form__item">
                                   <div className="form__item__header">{productsUpdateLangData?.headers?.articul}</div>
                                   <input 
                                   type="text" 
                                   name="1c_articul" 
                                   placeholder={productsUpdateLangData?.placeholders?.articul}
                                   value={productArticul}
                                   onChange={(e) => {
                                        setProductArticul(e.target.value)
                                   }}
                                   />
                              </div>
                              {
                                   currentProduct ? 

                                   <div className="form__item">
                                        <div className="form__item__header">{productsUpdateLangData?.headers?.current_pictures}</div>
                                        <img src={`${root}/images/products/${currentProduct.id}.jpg`} alt="" /> 
                                   </div>:

                                   <></>
                              }
                              <div className="form__item form__item__insert__picture">
                                   <div className="form__item__header">{productsUpdateLangData?.headers?.insert_pictures}</div>
                                   <input type="file" name="image" id="" />
                              </div>
                                   <input type="hidden" name="availability" id="" value={`${currentProduct?.availability || 1}`} onChange={() => {}} />
                                   <input type="hidden" name="is_recommended" id="" value={`${currentProduct?.is_recomended || 1}`} onChange={() => {}} />
                         <ProductCreateUpdateFooter />
                         </div>  
                    </form>
               </div>

          </div>

          
          
     </>
}
   
export default ProductCreateUpdate;
