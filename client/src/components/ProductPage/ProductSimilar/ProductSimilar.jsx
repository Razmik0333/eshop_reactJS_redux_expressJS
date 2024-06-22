import React, { useEffect } from 'react'
import "./styles/_product-similar.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSimilarProducts } from '../../../redux/ducks/productDuck';
import { currentLanguageDataSelector, currentProductSelector, getSimilarCircleIdSelector, productsSimilarSelector } from '../../../helpers/reduxSelectors';
import Product from '../../Base/Product/Product';
import ProductSimilarHeader from './ProductSimilarHeader';

export default function ProductSimilar() {
     const dispatch = useDispatch();
     const currentProductCategory = useSelector(currentProductSelector).category
     const currentProductId = useSelector(currentProductSelector).id
     useEffect(() => {
          dispatch(fetchSimilarProducts(currentProductCategory,currentProductId))
     }, [currentProductCategory,currentProductId]);
     const productSimilar = useSelector(productsSimilarSelector);
     const langData = useSelector(currentLanguageDataSelector);
     const circleId = useSelector(getSimilarCircleIdSelector)
     const filtered = productSimilar.filter((_, pos) => {
          return pos >= circleId * 8 && pos < (circleId + 1) * 8
     })

     const productItemText = langData?.product_item;

  return (
    <div className="similar__products">
          <div className="container similar__products__container">
               <ProductSimilarHeader />
               <div className="products-list">
                    {
                         filtered.map((item) => {
                              return <Product product={item} key={`similar_${item?.id}`} text={productItemText} />
                         }) 
                    }
                    
               </div>
          </div>
    </div>
  )
}
