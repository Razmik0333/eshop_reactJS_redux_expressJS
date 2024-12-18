
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles/_navigation.scss';
import { 
     fetchCatgories, 
} from '../../../redux/ducks/navigationDuck';
import Categories from './Categories/Categories';
import SearchPart from './SearchPart/SearchPart';

function Navigation() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchCatgories());
     }, []);
     return (
          <nav>
               <div className="container navigation__container">
                    <div className="navigation__container__items">
                         <div className="nav__item search__area">
                              <SearchPart />
                         </div>
                         <div className="nav__item">
                              <Categories />
                         </div>

                    </div>
               </div>
          </nav>
     )
}

export default Navigation;
