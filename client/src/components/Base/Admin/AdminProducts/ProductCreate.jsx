import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentProductClear } from '../../../../redux/ducks/adminProductDuck';
import './styles/_product-create.scss';
function ProductCreate() {
     const dispatch = useDispatch();
     const toCreateProduct = () => { 
          dispatch(currentProductClear());                
     }
     return (
          <NavLink to={'/admin/product/create/page'} >
               <button className="create__product"  onClick={toCreateProduct}>
                    Create Product
               </button>
          </NavLink>
     )
}
export default ProductCreate;
