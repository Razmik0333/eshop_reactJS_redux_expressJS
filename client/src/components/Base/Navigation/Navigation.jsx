
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/_navigation.scss';
import { 
     fetchCatgories, 
     getIsFocused
} from '../../../redux/ducks/navigationDuck';
import SearchItems from './SearchItems/SearchItems';
import SearchInput from './SearchProducts/SearchInput';

import { root } from '../../../helpers/constants/constants';
import Categories from './Categories/Categories';
import { currentLanguageDataSelector } from '../../../helpers/reduxSelectors';

function Navigation() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchCatgories());
     }, []);
     const headerLangData = useSelector(currentLanguageDataSelector)?.navigation;

     const changeMouseOut = () => {
          dispatch(getIsFocused(false))
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
     return (
          <nav>
               <div className="container navigation__container">
                    <div className="nav__item">
                         <div className="search__part">
                              <div className="select__category">
                                   <span className="select-icon">
                                        <img src={`${root}/icons/config/menu.svg`} alt="" />
                                   </span>
                                   <span className="select-text">{headerLangData?.select}</span>
                                   <span className="select-dropdown">
                                        <img src={`${root}/icons/config/triangle.svg`} alt="" />
                                   </span>
                              </div>
                              <div className="search__products" onMouseLeave={changeMouseOut}/*onMouseOut={false}*/>
                                   <SearchInput />
                                   <SearchItems />
                              </div>
                         </div>
                    </div>
                    <div className="nav__item">
                         <Categories />
                    </div>
               </div>
          </nav>
     )
}

export default Navigation;
