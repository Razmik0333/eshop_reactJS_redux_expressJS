import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../../../redux/ducks/configsDuck";
import { currentLanguageDataSelector } from "../../../../helpers/reduxSelectors";

function ProductCreateUpdateFooter() {
     const dispatch = useDispatch();
     const productsSaveLangData = useSelector(currentLanguageDataSelector)?.admin?.products;

     const confirmCreate = () => { 
          dispatch(changeModal(true));                
     }
     return (
          <button className="order__save"  onClick={confirmCreate}>
               {productsSaveLangData?.product_create_page?.headers?.save}
          </button>
     )
}

export default ProductCreateUpdateFooter;
