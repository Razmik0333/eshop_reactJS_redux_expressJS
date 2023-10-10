import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkEmptyObject, getObjectSize, getSortedArray } from "../../helpers/functions/functions";
import { costsValuesSelector, countElementsSelector, currentCategoryIdSelector, currentLanguageDataSelector, currentSearchData, currentSearchSelector, elementsCostsSelector, isSearchSelector, showTypeSelector, sortTypeSelector } from "../../helpers/reduxSelectors";
import { clearProductsByCosts, fetchProductsByCosts } from "../../redux/ducks/productDuck";
import NonFound from "../Base/NonFound/NonFound";
import Product from "../Base/Product/Product";
import CategoriesPanel from "../Products-details/CategoriesPanel/CategoriesPanel";
import ProductsDetailsList from "../Products-details/ProductsPanel/ProductsDetailsList/ProductsDetailsList";
import ProductByList from "../Products-details/ProductsPanel/ProductsList/ProductByList/ProductByList";
import RefreshButton from "../Products-details/ProductsPanel/RefreshButton/RefreshButton";
import './styles/_search.scss';
function Search(){
     const dispatch = useDispatch();
     const showType = useSelector(showTypeSelector)
     const productItem = useSelector(currentLanguageDataSelector)?.product_item;
     const searchData = useSelector(currentSearchData);
     const isSearchValue = useSelector(isSearchSelector);
     const costObject = useSelector(costsValuesSelector);
     const currentCategory = useSelector(currentCategoryIdSelector);
     const costItems = useSelector(elementsCostsSelector);
     const searchWord = useSelector(currentSearchSelector);
     const sortType = useSelector(sortTypeSelector);

     const countsOfProducts = useSelector(countElementsSelector);
     useEffect(() => {
          dispatch(clearProductsByCosts())
        //  dispatch(clearCostValues())
     }, [currentCategory]);
     useEffect(() => {
          const id = setTimeout(() => {
               if(!checkEmptyObject(costObject)){
                    dispatch(fetchProductsByCosts({'search' : [searchWord]},costObject,countsOfProducts));
              }
          }, 200);
          return () => {
               clearTimeout(id)
          }
     }, [costObject.start, costObject.final]);

     const productsByCosts = useSelector(elementsCostsSelector);
     const sortedArray = 
          getObjectSize(sortType) > 0 ? 
               getSortedArray(searchData, sortType) : searchData;
     const searchedSortedProductsByCosts = 
          getObjectSize(sortType) > 0 ? 
               getSortedArray(productsByCosts, sortType) : productsByCosts;
     const searchedProducts = checkEmptyObject(costObject) ? searchData : costItems;
     const counts = countsOfProducts > 0 ? countsOfProducts : searchedProducts.length
     const products = searchedSortedProductsByCosts?.length > 0 ? searchedSortedProductsByCosts : sortedArray;

     const searchedProductsByCount = products.filter((_,pos) =>  pos < counts)

     return (
               <div className="details__products__list search__list">
                    <div className="container details__products__container">
                         <div className="products__panel">
                              <ProductsDetailsList />
                              <div className="products-list">
                         
                                   {
                                        isSearchValue ? 
                                        searchedProductsByCount.length > 0 ?
                                        searchedProductsByCount.map(item => {
                                             return  showType === 'grid' || '' ? <Product product={item} text={productItem} key={item.id}/> : <ProductByList product={item} text={productItem} key={item.id} />
                                                  }) :
                                                  <NonFound />
                                                  : false
                                   
                                   }
                              </div>
                              <RefreshButton /> 
                         </div> 
                         <CategoriesPanel  /> 
                    </div>
               </div>              
     )
}

export default Search;
