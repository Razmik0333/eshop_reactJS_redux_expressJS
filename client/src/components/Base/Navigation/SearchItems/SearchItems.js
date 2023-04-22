import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useHistory } from "react-router-dom";
import { countElementsSelector, currentSearchData, currentSearchSelector, isSearchSelector } from "../../../../helpers/reduxSelectors";
import { changeCountElements } from "../../../../redux/ducks/configsDuck";
import { clearSearchData, currentCategory, currentSearch, isSearch } from "../../../../redux/ducks/navigationDuck";
import { clearProductsByCosts, fetchSearchedData } from "../../../../redux/ducks/productDuck";
import SearchItem from "../SearchItem/SearchItem"

function SearchItems() {
     const [searchShow, setSearchShow] = useState(false);
     const dispatch = useDispatch();
     const searchWord = (useSelector(currentSearchSelector));
     const countsOfProducts = useSelector(countElementsSelector);
     const isSearching = useSelector(isSearchSelector);
     // const goHome = () =>  {
     //      navigate('/')
     // }
      useEffect(() => {
               const id = setTimeout(() => {
                    if (searchWord.length >= 2) {
                         dispatch(fetchSearchedData(searchWord,countsOfProducts))      
                         dispatch(changeCountElements(6));
                         dispatch(clearProductsByCosts())            
                         setSearchShow(true);                    
                         dispatch(isSearch(false))
                         dispatch(currentCategory(null))
                    }
               }, 200);
               return () => {
                    clearTimeout(id)
               }
      }, [searchWord]);
     const searchData = useSelector(currentSearchData);
     return (
          <ul 
               className={searchShow ? "search__items" : 'hidden'}
               style={{height: searchData?.length <= 3 ? searchData.length * 41 + 15 : (searchData?.length - 2) * 41 + 'px'}}
               onMouseOver={() => setSearchShow(true)}
               onMouseOut={() => setSearchShow(false)}
          >
               {
                    searchShow ? searchData.map(item => {
                         return <SearchItem  item = {item} key={item.id}/>
                    }) :false
               }
          </ul>
     )
}

export default SearchItems;
