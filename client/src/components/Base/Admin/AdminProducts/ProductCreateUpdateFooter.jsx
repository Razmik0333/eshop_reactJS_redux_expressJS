import { useDispatch } from "react-redux";
import { currentProductClear } from "../../../../redux/ducks/adminProductDuck";
import { changeModal } from "../../../../redux/ducks/configsDuck";

function ProductCreateUpdateFooter() {
     const dispatch = useDispatch();
     const confirmCreate = (e) => { 
          dispatch(changeModal(true));                
     }
     return (
          <button className="product__save"  onClick={confirmCreate}>
               Save Product
          </button>
     )
}

export default ProductCreateUpdateFooter;
