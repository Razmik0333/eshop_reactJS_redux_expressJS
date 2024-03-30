import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentProductClear, deleteCacheFiles } from '../../../../redux/ducks/adminProductDuck';
import './styles/_product-create.scss';
import { adminProductSavedSelector, currentLanguageDataSelector, modalCloseSelector } from '../../../../helpers/reduxSelectors';
import Modal from '../../Modal/Modal';
import { changeModal } from '../../../../redux/ducks/configsDuck';
function ProductCreate() {
     const dispatch = useDispatch();
     const productCreateLangData = useSelector(currentLanguageDataSelector)?.admin?.products;
     const modalIsClose = useSelector(modalCloseSelector);
     console.log("🚀 ~ ProductCreate ~ modalIsClose:", modalIsClose)

     const toCreateProduct = () => { 
          dispatch(currentProductClear());                
     }
     const saveChanges = () => { 
          dispatch(deleteCacheFiles());  
          dispatch(changeModal(true))    
     }
     const isSaved = useSelector(adminProductSavedSelector)
     console.log("🚀 ~ ProductCreate ~ isSaved:", isSaved)
     return (

          <>
          
          {
                modalIsClose ?
                 isSaved ? <Modal message={'Saved'} /> 
                 : <Modal message={'Wrong'} />  :<></>

          }
               <NavLink to={'/admin/product/create/page'} >
                    <button className="create__product"  onClick={toCreateProduct}>
                         {productCreateLangData?.create}
                    </button>
               </NavLink>
               <button className="create__product"  onClick={saveChanges}>
                    Պահպանել
               </button>
          </>
     )
}
export default ProductCreate;
