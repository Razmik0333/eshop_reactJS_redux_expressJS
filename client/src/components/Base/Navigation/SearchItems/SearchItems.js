import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countElementsSelector, currentHintsData, currentSearchData, currentSearchSelector, isFocusedSelector } from "../../../../helpers/reduxSelectors";
import { changeCountElements } from "../../../../redux/ducks/configsDuck";
import { currentCategory, getIsFocused, isSearch } from "../../../../redux/ducks/navigationDuck";
import { clearHintsData, clearProductsByCosts, fetchSearchedData } from "../../../../redux/ducks/productDuck";
import SearchItem from "../SearchItem/SearchItem"
import HintsItem from "../HintsItem/HintsItem";

function SearchItems() {
     const [searchShow, setSearchShow] = useState(false);
     const [hintShow, setHintShow] = useState(false);
     const dispatch = useDispatch();
     const searchWord = useSelector(currentSearchSelector);
     const countsOfProducts = useSelector(countElementsSelector);
     const isFocused = useSelector(isFocusedSelector);
     useEffect(() => {
          setHintShow(false)
     }, []);
     useEffect(() => {
          setHintShow(isFocused)
     }, [isFocused]);
      useEffect(() => {
          const id = setTimeout(() => {
               if (searchWord.length > 0) {
                    dispatch(clearHintsData([]))
                    dispatch(fetchSearchedData(searchWord,countsOfProducts));
                    dispatch(changeCountElements(6));
                    dispatch(clearProductsByCosts());
                    setHintShow(false)          
                    setSearchShow(searchWord.length > 0);                    
                    dispatch(isSearch(false))
                    dispatch(currentCategory(null))
               }
          }, 200);
          return () => {
               clearTimeout(id)
          }
      }, [searchWord]);
      const getHintsShow = () => {
          setHintShow(true);
          getIsFocused(true)
      }
      const getHintsHide = () => {
          setHintShow(false);
          getIsFocused(false)
      }
      const getSearchShow = () => {
          setSearchShow(true);
          getIsFocused(true)
      }
      const getSearchHide = () => {
          setSearchShow(false);
          getIsFocused(false)
      }
     const searchData = useSelector(currentSearchData);
     const hintsData = useSelector(currentHintsData);     
     return (
          <>
          <ul 
               className={searchShow ? "search__items" : 'hidden'}
               style={{height: searchData?.length <= 3 ? searchData.length * 41 + 15 : (searchData?.length - 2) * 41 + 'px'}}
               onMouseOver={getSearchShow}
               onMouseOut={getSearchHide}
               onMouseMove={getSearchShow}
          >

               { 
                    searchShow ? searchData.map(item => {
                         return <SearchItem  item = {item} key={item.id}
                                             onMouseOver={getSearchShow}
                                             onMouseMove={getSearchShow}
                                             onMouseOut={getSearchHide}

                         />
                    }) :<></>
               }
          </ul>
          <ul 
               className={hintShow ? "search__items" : 'hidden'}
               style={{height: hintsData?.length <= 3 ? hintsData.length * 41 + 15 : (hintsData?.length - 2) * 41 + 'px'}}
               onMouseMove={getHintsShow} 
               onMouseOver={getHintsShow}

          >

               { 
                    hintsData && isFocused ? hintsData.map(item => {
                         return <HintsItem item={item} key={`hint_${item.id}` }  

                         onMouseOver={getHintsShow}
               onMouseMove={getHintsShow} 
               onMouseOut={getHintsHide}
             
/>
                    }) :<></>
               } 
          </ul>
          </>
     )
}

export default SearchItems;
