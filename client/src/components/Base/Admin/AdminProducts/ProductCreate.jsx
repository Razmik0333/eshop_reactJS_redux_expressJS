import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentProductClear } from '../../../../redux/ducks/adminProductDuck';
import './styles/_product-create.scss';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
function ProductCreate() {
     const dispatch = useDispatch();
     const productCreateLangData = useSelector(currentLanguageDataSelector)?.admin?.products;

     const toCreateProduct = () => { 
          dispatch(currentProductClear());                
     }
     return (
          <NavLink to={'/admin/product/create/page'} >
               <button className="create__product"  onClick={toCreateProduct}>
                    {productCreateLangData?.create}
               </button>
          </NavLink>
     )
}
export default ProductCreate;
