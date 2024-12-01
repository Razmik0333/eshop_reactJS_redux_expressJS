import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { currentLanguageDataSelector, getIsSmallSizeSelector, getSubCatForSmallSizeSelector, recommendProductsSelector } from '../../../helpers/reduxSelectors.js';
import { fetchRecomendedProducts } from '../../../redux/ducks/productDuck.js';

import CategoriesFilterColor from './CategoriesFilterColor/CategoriesFilterColor';
import CategoriesFilterContent from './CategoriesFilterContent/CategoriesFilterContent';
import CategoriesFilterPrice from './CategoriesFilterPrice/CategoriesFilterPrice';
import CategoriesFilterSize from './CategoriesFilterSize/CategoriesFilterSize';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import CategoriesListForSmallSize from "./CategoriesListForSmallSize/CategoriesListForSmallSize.jsx";
import './styles/_categories-panel.scss';

function CategoriesPanel(){
     const dispatch = useDispatch();
     const [screenWidth, setInnerWidth] = useState(window.screen.width);
     useEffect(() => {
          dispatch(fetchRecomendedProducts());
     }, []);
     
     useEffect(() => {
          function handleResize(){
               setInnerWidth(window.screen.width)
          }
          window.addEventListener('resize', handleResize)
          return () => {
               window.removeEventListener('resize',handleResize)
          };
     }, []);
 

     const recommendProducts = useSelector(recommendProductsSelector);
     const featuredProducts = useSelector(currentLanguageDataSelector)?.recomend;
     const navBarShowInSmallSize = useSelector(getSubCatForSmallSizeSelector)
     return (
          <>
               {
                    navBarShowInSmallSize ?  
                         <CategoriesListForSmallSize /> : <></>
               }
               <>
                    {
                         screenWidth < 840 ? 
                         <></> :
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
                         
                    }
               </>

          </>
     )
}

export default CategoriesPanel;
