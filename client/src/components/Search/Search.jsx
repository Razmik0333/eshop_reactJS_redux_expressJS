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
import { clearCostValues } from "../../redux/ducks/configsDuck";
function Search(){
     const dispatch = useDispatch();
     const showType = useSelector(showTypeSelector)
     const productItem = useSelector(currentLanguageDataSelector)?.product_item;
     const searchData = useSelector(currentSearchData);

     console.log("🚀 ~ Search ~ searchData:", searchData)
     
     const isSearchValue = useSelector(isSearchSelector);
     const costObject = useSelector(costsValuesSelector);
     console.log("🚀 ~ Search ~ costObject:", costObject)
     const currentCategory = useSelector(currentCategoryIdSelector);
     const searchWord = useSelector(currentSearchSelector);
     const sortType = useSelector(sortTypeSelector);
     console.log("🚀 ~ Search ~ sortType:", sortType)

     const countsOfProducts = useSelector(countElementsSelector);
     useEffect(() => {
          dispatch(clearProductsByCosts())
          dispatch(clearCostValues())
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
     console.log("🚀 ~ Search ~ productsByCosts:", productsByCosts)

     const sortedSearchData = getObjectSize(sortType) > 0 ? 
          getSortedArray(searchData, sortType) : searchData; //ըստ համապատասխան պարամետրի սորտավորում
     console.log("🚀 ~ Search ~ sortedSearchData:", sortedSearchData);
     
     const searchedSortedProductsByCosts = getObjectSize(sortType) > 0 ? 
               getSortedArray(productsByCosts, sortType) : productsByCosts; //ֆիլտրում ըստ գնի ինտերվալի
     console.log(searchedSortedProductsByCosts);
     const searchedProducts = checkEmptyObject(costObject) ? searchData : productsByCosts;
     console.log("🚀 ~ Search ~ searchedProducts:", searchedProducts)

     
     const counts = countsOfProducts > 0 ? countsOfProducts : searchedProducts.length
     
     const products = (!checkEmptyObject(costObject)) ?
                                   ((!checkEmptyObject(sortType)) ?
                                             searchedSortedProductsByCosts: sortedSearchData): 
                                                  searchData;

     const searchedProductsByCount = products.filter((_,pos) =>  pos < counts)
     console.log("🚀 ~ Search ~ searchedProductsByCount:", searchedProductsByCount)
     
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
                                                  return  showType === 'grid' || '' ? 
                                                       <Product product={item} text={productItem} key={item.id}/> 
                                                       : 
                                                       <ProductByList product={item} text={productItem} key={item.id} />
                                                  }) :
                                                  <NonFound />
                                                  : false
                                   
                                   }
                              </div>
                              <RefreshButton /> 
                         </div> 
                         <CategoriesPanel /> 
                    </div>
               </div>              
     )
}

export default Search;
