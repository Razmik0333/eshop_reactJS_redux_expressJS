import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentProductSelector, currentProductIdSelector } from '../../../helpers/reduxSelectors';
import { fetchCurrentProduct, getViewedProducts } from '../../../redux/ducks/productDuck';
import { fetchCurrentProductsReviews } from '../../../redux/ducks/reviewDuck';
import ProductDesc from "./ProductDesc/ProductDesc";
import ProductPictures from "./ProductPictures/ProductPictures";

function ProductContent() {
     const dispatch = useDispatch();
     const currentProductId = useSelector(currentProductIdSelector) 
     const currentProduct = useSelector(currentProductSelector);
     console.log("🚀 ~ file: ProductContent.jsx:13 ~ ProductContent ~ currentProduct:", currentProduct)

     useEffect(() => {
          dispatch(fetchCurrentProduct(currentProductId));
          dispatch(fetchCurrentProductsReviews(currentProductId));
          dispatch(getViewedProducts(currentProductId))
     }, [currentProductId]);
     return (
          <div className="product__content">
               <div className="container product__content__container">
                    <ProductPictures path={currentProduct.url} />
                    <ProductDesc currentProduct={currentProduct}/>
               </div>
          </div>
     )
}

export default ProductContent;
