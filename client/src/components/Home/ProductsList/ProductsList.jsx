import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector, idProductsFromStartSelector, popupCloseSelector, popupItemIdSelector, productsSelector } from '../../../helpers/reduxSelectors';
import { fetchProductsForStartingPage } from '../../../redux/ducks/productDuck';
import Product from "../../Base/Product/Product";
import Categories from "./Categories/Categories";
import CategoryLineCircle from "./CategoryLineCircle/CategoryLineCircle";
import ModalPopup from '../../Base/Modal/ModalPopup';

function ProductsList() {
     const dispatch = useDispatch();
     const idProductsFromStart = useSelector(idProductsFromStartSelector);
     const popupIsShow = useSelector(popupCloseSelector);
     const popupId = useSelector(popupItemIdSelector)
     useEffect(() => {
          dispatch(fetchProductsForStartingPage(idProductsFromStart));
     }, [idProductsFromStart]);

     const products = useSelector(productsSelector);
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;
     return(
          <>
               {popupIsShow ?  <ModalPopup id={popupId}/> : <></>}
               <div className="products__list">
                    <div className="container product__list__container">
                         <Categories />
                         <CategoryLineCircle />
                         <div className="products-list">
                              {
                                   products.map(product => {
                                        return  <Product product={product} text={productItemText} key={product?.id} />
                                   })
                              }
                         </div>
                    </div>
               </div>

          </>
     )
}

export default ProductsList;
