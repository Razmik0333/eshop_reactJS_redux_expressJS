import React, { useEffect } from 'react'
import "./styles/_product-similar.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSimilarProducts } from '../../../redux/ducks/productDuck';
import { currentLanguageDataSelector, currentProductSelector, productsSimilarSelector } from '../../../helpers/reduxSelectors';
import Product from '../../Base/Product/Product';

export default function ProductSimilar() {
     const dispatch = useDispatch();
     const currentProductCategory = useSelector(currentProductSelector).category
     const currentProductId = useSelector(currentProductSelector).id
     useEffect(() => {
          dispatch(fetchSimilarProducts(currentProductCategory,currentProductId))
     }, [currentProductCategory,currentProductId]);
     const productSimilar = useSelector(productsSimilarSelector);
     const langData = useSelector(currentLanguageDataSelector);

     const productSimilarLang = langData?.product_page;

     const productItemText = langData?.product_item;

  return (
    <div className="similar__products">
          <div className="container similar__products__container">
               <div className="categories">
                    <span>{productSimilarLang?.similar}</span>
               </div>
               <div className="category-line-circle">
                    <div className="category-line">

                    </div>
                    <div className="circles">
                         <div className="circle active"></div>
                         <div className="circle"></div>
                         <div className="circle"></div>
                    </div>
               </div>
               <div className="products-list">
                    {productSimilar.map(item => {
                         return <Product product={item} key={`similar_${item?.id}`} text={productItemText} />
                    })  }
               </div>
          </div>
    </div>
  )
}
