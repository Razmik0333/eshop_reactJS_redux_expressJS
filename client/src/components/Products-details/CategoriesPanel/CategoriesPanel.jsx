import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector, recommendProductsSelector } from '../../../helpers/reduxSelectors.js';
import { fetchRecomendedProducts } from '../../../redux/ducks/productDuck.js';

import CategoriesFilterColor from './CategoriesFilterColor/CategoriesFilterColor';
import CategoriesFilterContent from './CategoriesFilterContent/CategoriesFilterContent';
import CategoriesFilterPrice from './CategoriesFilterPrice/CategoriesFilterPrice';
import CategoriesFilterSize from './CategoriesFilterSize/CategoriesFilterSize';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import './styles/_categories-panel.scss';

function CategoriesPanel(){
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchRecomendedProducts());
     }, []);
     const recommendProducts = useSelector(recommendProductsSelector);
     const featuredProducts = useSelector(currentLanguageDataSelector)?.recomend;

     return (
          <div className="categories__panel">
               <div className="categories__filters">
                    <CategoriesFilterContent /> 
                    <CategoriesFilterPrice /> 
                    <CategoriesFilterColor />
                    <CategoriesFilterSize />
               </div>
               <div className="featured__products">
                    <p className="featured__products__header">
                         {featuredProducts?.recomended_products}
                    </p>
                    {
                         recommendProducts.map(recommendProduct => {
                              return <FeaturedProduct recommendProduct = {recommendProduct} key={recommendProduct.id} />
                         })
                    }
               </div>
          </div>
     )
}

export default CategoriesPanel;
