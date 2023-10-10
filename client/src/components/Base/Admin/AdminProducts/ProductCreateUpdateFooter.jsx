import { useDispatch } from "react-redux";
import { changeModal } from "../../../../redux/ducks/configsDuck";

function ProductCreateUpdateFooter() {
     const dispatch = useDispatch();
     const confirmCreate = () => { 
          dispatch(changeModal(true));                
     }
     return (
          <button className="product__save"  onClick={confirmCreate}>
               Save Product
          </button>
     )
}

export default ProductCreateUpdateFooter;
