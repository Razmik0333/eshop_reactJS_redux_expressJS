import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArrFromField, getMinMax, getPositiveNumber, getHigherStrValue, checkEmptyObject, getRoundedValue  } from '../../../../helpers/functions/functions';
import { costsValuesSelector, currentCategoryIdSelector, currentLanguageDataSelector, currentSearchData, currentSubCategorySelector, getCurrentCurrencySelector, getFilteredProductsSelector, getSubCategoryDataSelector, productsByCategorySelector } from '../../../../helpers/reduxSelectors';
import { changeCosts } from '../../../../redux/ducks/configsDuck';
import { getNewCurrency } from '../../../../helpers/functions/functions';
import { fetchBySubCategories } from '../../../../redux/ducks/productDuck';
import './styles/_categories-filter-price.scss';
function CategoriesFilterPrice() {
     const [value, setValue] = useState(0);
     const [isUp, setIsUp] = useState(false);
     const [fIsSelected, setFIsSelected] = useState(false);
     const [sIsSelected, setSIsSelected] = useState(false);
     const costInterval= useSelector(costsValuesSelector);
     
     const currentCategory = useSelector(currentCategoryIdSelector);
     const currentSubCategory = useSelector(currentSubCategorySelector)
     
     const productPriceText = useSelector(currentLanguageDataSelector)?.details;
     useEffect(() => {
          
          dispatch(fetchBySubCategories(currentCategory, currentSubCategory))
     }, [currentCategory,currentSubCategory]);
     const dispatch = useDispatch();
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const productsBySubCategory = useSelector(getSubCategoryDataSelector);
     const searchData = (useSelector(currentSearchData));
     //const products =  //searchData.length > 0  ? searchData : productsByCategory;
     const arr = getArrFromField(productsBySubCategory, 'cost');
     //console.log("🚀 ~ CategoriesFilterPrice ~ arr:", arr)
     const min = getMinMax(arr, 'min');
     const max = getMinMax(arr, 'max');
     const baseLineRef = useRef(null);
     const currentLineRef = useRef(null);

     let leftVal = getPositiveNumber(value);
     const startRef = useRef(null);

     const finalRef = useRef(null);

     const roundedStartValue = getRoundedValue(parseInt(startRef.current?.style.left)/283);
     const roundedFinalValue = getRoundedValue(parseInt(finalRef.current?.style.left)/283);
     const minPrice = Math.floor((min + (max - min) * roundedStartValue));
     const maxPrice = Math.floor((min + (max - min) * roundedFinalValue));
     return ( 
          <div className="categories__filter__price">
               <p className="categories__filter__price__header">
                    {productPriceText?.filter_price}
               </p>
               
               <div className="range__content"
                    
                    onMouseMove={(e)=> {
                              const zeroRange = e.pageX - 1084;                              
                              if(isUp){
                                   setValue(zeroRange);
                                   
                                   fIsSelected ? startRef.current.style.left = leftVal + 'px' :
                                   finalRef.current.style.left = leftVal + 'px';
                              }
                         }
                    }
                    onMouseUp = {() => {
                              setIsUp(false);
                              currentLineRef.current.left = leftVal +'px';
                         }
                    }
                    >
                    <div
                         ref = {startRef}
                         onMouseDown={() =>{
                              setFIsSelected(true);
                              setIsUp(true);
                              startRef.current.style.left = leftVal + 'px';  //ok
                              finalRef.current.style.left =
                                   finalRef.current.style.left === '' ? `283px` : finalRef.current.style.left;
                              }
                         }
                         onMouseUp = {() =>{
                              setFIsSelected(false);
                              finalRef.current.style.left =
                                   finalRef.current.style.left === '' ? `283px` : finalRef.current.style.left;
                              startRef.current.style.left = 
                                   currentLineRef.current.style.left = 
                                        getHigherStrValue(startRef.current.style.left, finalRef.current.style.left) + 'px'
                              currentLineRef.current.style.width = 
                                   parseInt(finalRef.current.style.left) - parseInt(startRef.current.style.left) +'px';

                              setIsUp(false);
                              dispatch(changeCosts(
                                   
                                   {
                                        start : Math.floor((min + (max - min) * (parseInt(startRef.current?.style.left + 16)/285 )))
                                   }))
                         }
                         }
                         className={
                              fIsSelected ? "ranges start selected" : "ranges start"
                         }
                         style={checkEmptyObject(costInterval) ? {left:0} : {left:startRef.current?.style.left}}
                         ></div>
                    <div
                         ref={finalRef}  className={
                              sIsSelected ? "ranges final selected" : "ranges final"
                         }
                         onMouseDown={() =>{
                                   setSIsSelected(true)
                                   setIsUp(true);
                                   startRef.current.style.left = 
                                        startRef.current.style.left.length === 0 ? 
                                             '0px':`${startRef.current.style.left}px`;
                                   finalRef.current.style.left = 
                                        finalRef.current.style.left.length === 0 ? 
                                             `283px`:`${finalRef.current.style.left }px`;
                                   //finalRef.current.style.left = leftVal + 'px';
                              }
                         }
                         onMouseUp = {() =>{
                              setSIsSelected(false);
                              setIsUp(false);
                              
                              startRef.current.style.left = 
                                   currentLineRef.current.style.left = 
                                        getHigherStrValue(startRef.current.style.left, finalRef.current.style.left) + 'px'
                              currentLineRef.current.style.width = 
                                    parseInt(finalRef.current.style.left ) - 
                                        parseInt(startRef.current.style.left) +'px';
                              dispatch(changeCosts({final : Math.floor((min + (max - min) * ((parseInt(finalRef.current.style.left))/283 )))}))
                         }}
                         style={checkEmptyObject(costInterval) ? {left:283} : {left:finalRef.current?.style.left}}

                         ></div>
                         <div 
                         ref={baseLineRef}
                         className="line base-line"
                    >
                    </div>
                    <div
                         ref={currentLineRef}
                         className="line current-line"
                         style={checkEmptyObject(costInterval) ? {width:'100%',left:0} : 
                         {
                              width: parseInt(finalRef.current?.style.left) - 
                                   parseInt(startRef.current?.style.left) + 6 ,
                              left:getHigherStrValue(startRef.current?.style.left, finalRef.current?.style.left)}}
                         >
                    </div>
               </div>
               <div className="filter-price">
                    {/* <button className="filter-button" type="button">{productPriceText?.filter}</button> */}
                    <span className="price-numbers">
                    {
                         startRef.current === null ? <></> :
                         (startRef.current.style.left.length === 0 ?  `${min}Դ - ${max}Դ` :
                         `${
                              getNewCurrency(currentCurrency, minPrice).value
                         }${getNewCurrency(currentCurrency, minPrice).char} - ${getNewCurrency(currentCurrency, maxPrice).value}
                         ${getNewCurrency(currentCurrency, maxPrice).char}`)
                         
                    }</span>
               </div>
          </div>
     )
}
export default CategoriesFilterPrice;
