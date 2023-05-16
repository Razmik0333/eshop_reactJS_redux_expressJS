import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currentCategoryIdSelector, currentSearchSelector, getUserId } from "../../../../helpers/reduxSelectors";
import { clearCostValues } from "../../../../redux/ducks/configsDuck";
import { currentCategory, currentSearch, getCurrentCategoryId, getIsFocused, isFocused, isSearch } from "../../../../redux/ducks/navigationDuck";
import { clearHintsData, clearProductsByCosts, clearSearchData, fetchSearchedHints } from "../../../../redux/ducks/productDuck";

function SearchInput() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const [searchValue, setSearchValue] = useState('');
     console.log("🚀 ~ file: SearchInput.js:13 ~ SearchInput ~ searchValue:", searchValue)
     
     //const [isFocused, setIsFocused] = useState(false);
     const categoryId = useSelector(currentCategoryIdSelector)
     useEffect(() => {
          const id = setTimeout(() => {
                dispatch(currentSearch(searchValue));
          }, 500);
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
          dispatch(clearHintsData([]))
     }
     const changeSearched = (e) => {
          dispatch(isSearch(true));
     }
     const changeInput = (e) => {
          searchValue.length === 0 &&
          dispatch(getIsFocused(true));
          dispatch(fetchSearchedHints(userId));     
          dispatch(clearSearchData([]));

     }
     const changeMouseOut = (e) => {
          dispatch(getIsFocused(false))

          //console.log(e.target.value);
     }
     const searchWord = useSelector(currentSearchSelector);
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
                    onClick={changeInput}
                    onFocus={changeInput}
                    onBlur={changeMouseOut}
               />
               <NavLink to={`/search/${searchWord}`} onClick={changeSearched}>
                    <button className="search-button">
                         
                    </button>

               </NavLink>
          </>
          
     )
}
export default SearchInput;
