
import { useState ,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles/_navigation.scss';
import { categoriesSelector,
         currentSearchData,
         currentSearchSelector,
         productsByCategoryLengthSelector, 
} from '../../../helpers/reduxSelectors';
import { 
     currentCategory, 
     currentSearch, 
     fetchCatgories, 
     fetchCurrentCatgory, 
     fetchSearchedData 
} from '../../../redux/ducks/navigationDuck';
import { clearSearchData, currentProduct } from '../../../redux/ducks/productDuck';
import SearchItem from './SearchItem/SearchItem';
import SearchItems from './SearchItems/SearchItems';
import SearchInput from './SearchProducts/SearchInput';
import { changeStepsCounts } from '../../../redux/ducks/productDuck';

import { root } from '../../../helpers/constants/constants';

function Navigation() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchCatgories());
     }, []);

     const changeCategory = (e) => {

         dispatch(currentCategory(e.target.dataset.id));
         dispatch(fetchCurrentCatgory(e.target.dataset.id))
         dispatch(clearSearchData([]))                  
         dispatch(currentSearch('')) 
     }

     

     // useEffect(() => {
     //      dispatch(fetchSearchedData(searchString));
     //      setSearchItems(searchData)
     //      setSearchShow(true);                      
     //      //setTimeout(() => {
     //           // if (searchString.length === 0) {
     //           //      setSearchString('');
     //           //      setSearchItems([])
     //           // }else{
     //           //      dispatch(fetchSearchedData(searchString));
     //           //      setSearchItems(searchData)
     //           //      setSearchShow(true);                    
     //           // }
     //     // }, 1000);
     // }, [searchWord]);
    
     const categories = useSelector(categoriesSelector);
     
     return (
          <nav>
               <div className="container navigation__container">
                    <div className="nav__item">
                         <div className="search__part">
                              <div className="select__category">
                                   <span className="select-icon">
                                        <img src={`${root}/icons/config/menu.svg`} alt="" />
                                   </span>
                                   <span className="select-text">Select a category</span>
                                   <span className="select-dropdown">
                                        <img src={`${root}/icons/config/triangle.svg`} alt="" />
                                   </span>
                              </div>
                              <div className="search__products" /*onMouseOut={false}*/>
                                   <SearchInput />
                                   <SearchItems />
                              </div>
                         </div>
                    </div>
                    <div className="nav__item">
                         <div className="navigation__part">
                              <ul className="category__list">
                                   
                                   {
                                   
                                        categories.map(item => {
                                             return  <li className="category__item"
                                                       key={item.id} 
                                                       onClick = {changeCategory} >
                                                       <NavLink to={`/category/${item.id}`} data-id={item.id}>
                                                            {item.arm_name}
                                                       </NavLink>
                                                  </li>
                                        })
                                       
                                   }
                              </ul>
                         </div>
                    </div>
               </div>
          </nav>
     )
}

export default Navigation;
