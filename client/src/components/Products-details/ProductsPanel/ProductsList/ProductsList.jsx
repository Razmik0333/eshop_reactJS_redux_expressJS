import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkEmptyObject, getObjectSize, getSortedArray } from "../../../../helpers/functions/functions";
import { costsValuesSelector, countElementsSelector, countItemsOfPageSelector, currentCategoryIdSelector, currentLanguageDataSelector, elementsCostsSelector, productsByCategorySelector, showTypeSelector, sortTypeSelector } from "../../../../helpers/reduxSelectors";
import { changeCountElements } from "../../../../redux/ducks/configsDuck";
import { clearProductsByCosts, fetchProductsByCategory, fetchProductsByCosts } from "../../../../redux/ducks/productDuck";
import Product from "../../../Base/Product/Product";
import ProductByList from "./ProductByList/ProductByList";

function ProductsList() {
     const dispatch = useDispatch();
     const showType = useSelector(showTypeSelector)

     const currentCategory = useSelector(currentCategoryIdSelector);
     const costObject = useSelector(costsValuesSelector);
     const sortType = useSelector(sortTypeSelector);
     const countsOfProducts = useSelector(countElementsSelector);
     const countsElementsOfPage = useSelector(countItemsOfPageSelector);
     
     useEffect(() => {
          dispatch(fetchProductsByCategory(currentCategory,countsElementsOfPage));
          dispatch(changeCountElements(6));
          dispatch(clearProductsByCosts())
     }, [currentCategory]);

     useEffect(() => {
          const id = setTimeout(() => {
               if(!checkEmptyObject(costObject)){                    
                    dispatch(fetchProductsByCosts({'category' : [currentCategory]},costObject,countsOfProducts));
               }
          }, 200);
          return () => {
               clearTimeout(id)
          }
     }, [costObject.start, costObject.final]);


     const productsByCategory = useSelector(productsByCategorySelector); // all products by category 
     
     
     const sortedArray = 
          getObjectSize(sortType) > 0 ? 
               getSortedArray(productsByCategory, sortType) : productsByCategory;

     const productsByCosts = useSelector(elementsCostsSelector);
     const sortedProductsByCosts = 
          getObjectSize(sortType) > 0 ? 
               getSortedArray(productsByCosts, sortType) : productsByCosts;
     const counts = countsOfProducts > 0 ? countsOfProducts : sortedArray.length
     const products = sortedProductsByCosts?.length > 0 ? sortedProductsByCosts : sortedArray;

     const productsByCount = products.filter((_,pos) =>  pos < counts);
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;

     return (
          <div className="details-products-list">
               <div className="products-list">
                    {
                         productsByCount.map(product => {
                              return  showType === 'grid' || '' ? 
                                   <Product product={product} text={productItemText} key={product.id}/> : 
                                        <ProductByList product={product} text={productItemText} key={product.id} />
                         })
                    }
               </div>
          </div>
     )
}
export default ProductsList;
