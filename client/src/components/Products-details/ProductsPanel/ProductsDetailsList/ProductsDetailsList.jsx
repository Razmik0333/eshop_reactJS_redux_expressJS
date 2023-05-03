import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentCategorySelector, currentLanguageDataSelector, currentSearchData, currentSearchSelector, elementsCostsSelector, productsByCategorySelector } from '../../../../helpers/reduxSelectors';
import { changeCountElements, changeCountItemsOfPage, changeSortType, changeShowType } from '../../../../redux/ducks/configsDuck';
import { getStepsCounts } from '../../../../redux/ducks/productDuck';
import './styles/_products-panel-show.scss';

function ProductsDetailsList() {
     const [filterShowBar, setFilterShowBar] = useState(false);
     const [countShowBar, setCountShowBar] = useState(false);
     const [countItems, setCountItems] = useState(null);
     const [filterItems, setFilterItems] = useState(null);
     const searchData = useSelector(currentSearchData);
     const searchWord = useSelector(currentSearchSelector);

     const productsByCategory = useSelector(productsByCategorySelector);
     const productsByCosts = useSelector(elementsCostsSelector);
     const productsList = searchData.length > 0 ? searchData : productsByCategory;

     const products = productsByCosts?.length > 0 ? productsByCosts : productsList;

     const dispatch = useDispatch();
     const category = useSelector(currentCategorySelector)
     const changeType = (e) => {
          dispatch(changeShowType(e.target.dataset.type))
      }
     const changeShowCount = (e) => {
          setCountItems(e.target.dataset.count);
          dispatch(changeCountElements(e.target.dataset.count))
          dispatch(changeCountItemsOfPage(e.target.dataset.count))
          dispatch(getStepsCounts(Math.ceil(products.length / +e.target.dataset.count)));
          setCountShowBar(false)
      }
     const changeFilterItems = (e) => {        
          setFilterItems(e.target.innerText)
          dispatch(changeSortType({
               type : e.target.dataset.type,
               time : e.target.dataset.time
          }))
     }
     const productDetailText = useSelector(currentLanguageDataSelector)?.details;

     return (
          <div className="details__products__header">
               
               
               <div className="current__category">
                    {
                         searchData.length === 0 ? category?.['arm_name']:`ԴՈՒՔ ՓՆՏՐԵԼ ԵՔ\` ${searchWord}`
                    }
                    
               </div>
               <div className="products__header__line">
               </div>
               <div className="products__header__items">
                    
                    <ul className="show__parameters" >
                         <li className="show__parameter filter-type-parameter">
                         <span className="show__parameter_text">{productDetailText?.sort_by}</span>
                               <ul className="sorting" 
                                   onMouseMove={()=>{setFilterShowBar(true)}}>
                                   
                                   <span className="filter_header">
                                        {
                                             filterItems ?                                        
                                             `${filterItems}` : productDetailText?.select_type
                                        }

                                   </span>
                                   <li>
                                        <ul className={filterShowBar ? "filter__types" : "filter__types hidden"}
                                                  onMouseOut={() => setFilterShowBar(false)}
                                                  onMouseMove={() => setFilterShowBar(true)}
                                                  onClick={changeFilterItems}
                                        >
                                        {
                                             productDetailText['filter_type'].map((item, pos) => {
                                                  return <li 
                                                  key={`filter_${pos}`}
                                                  className="filter__type" 
                                                  data-type={pos < 2 ? "price" : pos < 4 ? "date" : pos < 6 ? "rating" : ""} 
                                                  data-time={pos % 2 === 0 ? "lowest" : "highest"}
                                                  >{item}</li>
                                             })
                                        }
                                        </ul>
                                   </li>
                                   <span className="select-dropdown">
                                        <img src="../icons/triangle.svg" alt="" />
                                   </span>
                              </ul>
                         </li>
                         <li className="show__parameter count-parameter">
                                   <span className="show__parameter_text">{productDetailText['show']}</span>
                                   <ul className="count-items" 
                                        onMouseMove={()=>{setCountShowBar(true)}}
                                        >
                                        {
                                             countItems > 0 ?  countItems: productDetailText['select_count']
                                        }
                                        
                                        <li>
                                             <ul 
                                                  className={ countShowBar ? "quantities" : "quantities hidden" }
                                                  onMouseOut={() => setCountShowBar(false)}
                                                  onMouseMove={() => setCountShowBar(true)}

                                                  onClick={changeShowCount}
                                             >
                                                  <li className="quantity" data-count="0">{productDetailText['select_count']}</li>
                                                  <li className="quantity" data-count="6">6</li>
                                                  <li className="quantity" data-count="9">9</li>
                                                  <li className="quantity" data-count="12">12</li>
                                                  <li className="quantity" data-count="15">15</li>
                                             </ul>
                                        </li>
                                        
                                   </ul>
                                   <span className="select-dropdown" >
                                             <img src="../icons/triangle.svg" alt="" />
                                        </span>
                         </li>
                         <li className="show__parameter">
                              <ul className="show-type">
                                   <li className="grid" onClick={changeType} data-type="grid">
                                        <svg className="show-menu" viewBox="0 0 32 32"  data-type="grid">
                                             <g data-name="Square Menu" id="Square_Menu"  data-type="grid">
                                                  <path  data-type="grid" d="M12,15H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4h5a3,3,0,0,1,3,3v5A3,3,0,0,1,12,15Z"/>
                                                  <path  data-type="grid" d="M25,15H20a3,3,0,0,1-3-3V7a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,25,15Z"/>
                                                  <path  data-type="grid" d="M12,28H7a3,3,0,0,1-3-3V20a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,12,28Z"/>
                                                  <path  data-type="grid" d="M25,28H20a3,3,0,0,1-3-3V20a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,25,28Z"/>
                                             </g>
                                        </svg>
                                   </li>
                                   <li className="list" onClick={changeType} data-type="list">
                                        <svg className="show-menu"  viewBox="0 0 512 512" data-type="list">
                                        <path data-type="list" d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/>
                                        </svg>
                                   </li>
                                   
                              </ul>
                         </li>
                    </ul>
               </div>
          </div>
     )
}
export default ProductsDetailsList;
