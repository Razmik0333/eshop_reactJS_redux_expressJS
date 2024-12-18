import React from 'react'
import SearchInput from '../SearchProducts/SearchInput'
import SearchItems from '../SearchItems/SearchItems'
import { getIsFocused } from '../../../../redux/ducks/navigationDuck'
import { useDispatch } from 'react-redux'
import SearchCategoriesList from '../SearchCategoriesList/SearchCategoriesList'
export default function SearchPart() {
     const dispatch = useDispatch();

     const changeMouseOut = () => {
          dispatch(getIsFocused(false))
     }
  return (
          <div className="search__part">
               <div className="select__category">
                    <SearchCategoriesList />
               </div>
               <div className="search__products" onMouseLeave={changeMouseOut}/*onMouseOut={false}*/>
                    <SearchInput />
                    <SearchItems />
               </div>
          </div>
  )
}
