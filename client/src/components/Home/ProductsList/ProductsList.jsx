import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector, getUserId, idProductsFromStartSelector, productsSelector } from '../../../helpers/reduxSelectors';
import { fetchProductsForStartingPage } from '../../../redux/ducks/productDuck';
import { fetchCurrentWishList } from '../../../redux/ducks/wishListDuck';
import Product from "../../Base/Product/Product";
import Categories from "./Categories/Categories";
import CategoryLineCircle from "./CategoryLineCircle/CategoryLineCircle";

function ProductsList() {
     const dispatch = useDispatch();
     const idProductsFromStart = useSelector(idProductsFromStartSelector);
     const userId = useSelector(getUserId)
     useEffect(() => {
          dispatch(fetchProductsForStartingPage(idProductsFromStart));
     }, [idProductsFromStart]);

     useEffect(() => {
          dispatch(fetchCurrentWishList(userId))
         // userId ?  dispatch(fetchWishList(wishListIds)) : dispatch(fetchWishList([]))
         
     }, [userId]);
     const products = useSelector(productsSelector);
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;
     return(
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
     )
}

export default ProductsList;
