import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currentCategoryIdSelector, currentSearchSelector, getUserId } from "../../../../helpers/reduxSelectors";
import { clearCostValues } from "../../../../redux/ducks/configsDuck";
import {  currentSearch,  getIsFocused,  isSearch } from "../../../../redux/ducks/navigationDuck";
import { changeHints, clearHintsData, clearProductsByCosts, clearSearchData, fetchSearchedHints } from "../../../../redux/ducks/productDuck";

function SearchInput() {
     const dispatch = useDispatch();
     const searchWord = useSelector(currentSearchSelector);
     const [searchValue, setSearchValue] = useState('');
     console.log("🚀 ~ file: SearchInput.js:13 ~ SearchInput ~ searchValue:", searchValue)
     const userId = useSelector(getUserId);
     const categoryId = useSelector(currentCategoryIdSelector)
     useEffect(() => {
          const id = setTimeout(() => {
               dispatch(currentSearch(''));
               setSearchValue(searchWord)
               
                dispatch(currentSearch(searchWord));
          }, 500);
          return () => {
               clearTimeout(id);
          };
     }, [searchWord]);

     useEffect(() => {
          
           dispatch(currentSearch(''));
           dispatch(clearSearchData([]));
           dispatch(clearProductsByCosts());
           dispatch(clearCostValues())
     }, [categoryId]);
     const changeSearchField = (e) => {
          dispatch(currentSearch(e.target.value))
          setSearchValue( e.target.value)
           dispatch(isSearch(false));
          dispatch(clearHintsData([]))
     }
     const changeSearched = (e) => {
          dispatch(isSearch(true));
          dispatch(changeHints(userId,searchValue))
     }
     const changeInput = (e) => {
          
          if(searchValue.length === 0) {
               dispatch(getIsFocused(true));
               dispatch(fetchSearchedHints(userId));     
               dispatch(clearSearchData([]));

          }else{
               dispatch(currentSearch(e.target.value));
          }

     }

     return (
          <>
               <input 
                    type="text"
                    className="search-input"
                    name="" id="" 
                    placeholder="Search products..." 
                    value={searchValue} 
                    onInput={changeSearchField}
                    onBlur={changeInput}
                    onClick={changeInput}
                    onMouseOver={()=> {
                         dispatch(clearHintsData([]))
                         dispatch(getIsFocused(false));

                    }}
               />
               <NavLink to={`/search/${searchWord}`} onClick={changeSearched}>
                    <button className="search-button">
                         
                    </button>

               </NavLink>
          </>
          
     )
}
export default SearchInput;
