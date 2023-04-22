import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currentCategoryIdSelector, currentSearchSelector } from "../../../../helpers/reduxSelectors";
import { clearCostValues } from "../../../../redux/ducks/configsDuck";
import { currentCategory, currentSearch, getCurrentCategoryId, isSearch } from "../../../../redux/ducks/navigationDuck";
import { clearProductsByCosts, clearSearchData } from "../../../../redux/ducks/productDuck";

function SearchInput() {
     const dispatch = useDispatch();
     const [searchValue, setSearchValue] = useState('');
     const categoryId = useSelector(currentCategoryIdSelector)
     useEffect(() => {
          const id = setTimeout(() => {
                dispatch(currentSearch(searchValue));
          }, 300);
          return () => {
               clearTimeout(id);
          };
     }, [searchValue]);
     useEffect(() => {
          
           dispatch(currentSearch(''));
           dispatch(clearSearchData([]));
           dispatch(clearProductsByCosts());
           dispatch(clearCostValues())
     }, [categoryId]);
     const changeSearchField = (e) => {
          setSearchValue(e.target.value)
           dispatch(isSearch(false));
          
     }
     const changeSearched = (e) => {

          dispatch(isSearch(true));
          
          
     }
     const searchWord = (useSelector(currentSearchSelector));
     return (
          <>
               <input 
                    type="text"
                    className="search-input"
                    name="" id="" 
                    placeholder="Search products..." 
                    value={searchValue}
                    onInput={changeSearchField}
                    onChange={() => {}}
               />
               <NavLink to={`/search/${searchWord}`} onClick={changeSearched}>
                    <button className="search-button">
                         
                    </button>

               </NavLink>
          </>
          
     )
}
export default SearchInput;
