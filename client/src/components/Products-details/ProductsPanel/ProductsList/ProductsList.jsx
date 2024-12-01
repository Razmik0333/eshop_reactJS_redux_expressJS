import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkEmptyObject, getObjectSize, getSortedArray } from "../../../../helpers/functions/functions";
import { costsValuesSelector, countElementsSelector, countItemsOfPageSelector, currentCategoryIdSelector, currentLanguageDataSelector, currentSubCategoryIdSelector, currentSubCategorySelector, elementsCostsSelector, getFilteredProductsSelector, getSubCategoryDataSelector, getSubCategoryParamsSelector, getSubCatForSmallSizeSelector, productsByCategorySelector, showTypeSelector, sortTypeSelector } from "../../../../helpers/reduxSelectors";
import { changeCountElements, getSubCategory, getSubCategoryId, showSubCategoriesSmallSize } from "../../../../redux/ducks/configsDuck";
import { clearFilteredProductsList, clearProductsByCosts, fetchBySubCategories, fetchForFilters, fetchProductsByCategory, fetchProductsByCosts } from "../../../../redux/ducks/productDuck";
import Product from "../../../Base/Product/Product";
import ProductByList from "./ProductByList/ProductByList";
import Loader from "../../../Base/Loader/Loader";
function ProductsList() {
     const dispatch = useDispatch();
     const [isLoad, setIsLoad] = useState(false);

     const showType = useSelector(showTypeSelector)
     const currentCategory = useSelector(currentCategoryIdSelector);
     const currentSubCategory = useSelector(currentSubCategorySelector)

     const costObject = useSelector(costsValuesSelector);
     const sortType = useSelector(sortTypeSelector);
     const countsOfProducts = useSelector(countElementsSelector);
     const countsElementsOfPage = useSelector(countItemsOfPageSelector);
     useEffect(() => {
          dispatch(getSubCategoryId("1"));
          dispatch(getSubCategory("1"));
     }, [currentCategory]);
     useEffect(() => {  
          setTimeout(() => {
               dispatch(fetchForFilters(JSON.stringify({
                    cost : costObject,
                    sort : sortType,
                    category : currentCategory,
                    subCategory : currentSubCategory
               }), countsElementsOfPage));
               setIsLoad(true)
               
          }, 500);   
          return () => {
               setIsLoad(false);
               dispatch(clearFilteredProductsList([]))
          }    
     }, [costObject.start, costObject.final, sortType, currentCategory, currentSubCategory]);

     const filteredProducts = useSelector(getFilteredProductsSelector)

/* useEffect(() => {
          dispatch(fetchProductsByCategory(currentCategory,countsElementsOfPage));
          dispatch(getSubCategoryId(1));
          dispatch(getSubCategory(1));
          dispatch(changeCountElements(6));
          dispatch(clearProductsByCosts())
     }, [currentCategory]);

     useEffect(() => {
          dispatch(fetchBySubCategories(currentCategory, currentSubCategory,countsOfProducts))
           dispatch(changeCountElements(6));
           dispatch(clearProductsByCosts())
     }, [currentCategory, currentSubCategory]);


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
*/
     // const productsByCategory = useSelector(productsByCategorySelector); // all products by category 
     // const productsBySubCategory = useSelector(getSubCategoryDataSelector); // all products by category 
     


     
     // const sortedArray = 
     //      getObjectSize(sortType) > 0 ? 
     //           getSortedArray(productsByCategory, sortType) : productsByCategory;

     // const productsByCosts = useSelector(elementsCostsSelector);
     // console.log("🚀 ~ ProductsList ~ productsByCosts:", productsByCosts)
     // const sortedProductsByCosts = 
     //      getObjectSize(sortType) > 0 ? 
     //           getSortedArray(productsByCosts, sortType) : productsByCosts;
     // const counts = countsOfProducts > 0 ? countsOfProducts : sortedArray.length
     // const products = sortedProductsByCosts?.length > 0 ? sortedProductsByCosts : sortedArray;*/
     const productsByCount = filteredProducts.filter((_,pos) =>  pos < countsOfProducts);
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;
     const showSubCatForSmallSize = (e) => {          
          
          dispatch(showSubCategoriesSmallSize(true))
     }
     
     return (
          <>

               <div className="details-products-list">
                    <div className="filters-show" onClick={showSubCatForSmallSize}>
                         <svg aria-labelledby="filterIconTitle"
                         color="#2329D6"
                         fill="none"
                         height="48px"
                         role="img"
                              stroke="#b7b7b7"
                              stroke-linecap="square"
                              stroke-linejoin="miter"
                              stroke-width="1"
                              viewBox="0 0 24 24"
                                   width="48px"
                                   xmlns="http://www.w3.org/2000/svg">
                              <title id="filterIconTitle"/>
                              <path d="M10 12.261L4.028 3.972h16L14 12.329V17l-4 3z"/>
                         </svg>
                    </div>
                    <>
                         {
                              isLoad ? 
                              <>
                                   <div className="products-list">
                                        {
                                             productsByCount.map(product => {
                                                  return  showType === 'grid' || '' ? 
                                                       <Product product={product} text={productItemText} key={product.id}/> : 
                                                            <ProductByList product={product} text={productItemText} key={product.id} />
                                             })
                                        }
                                   </div>
                              </> 
                              : 
                              <Loader /> 
                         }
                    </>
                    
               </div>

          </>
     )
}
export default ProductsList;
