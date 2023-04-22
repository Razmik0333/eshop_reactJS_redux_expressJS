import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, currentLanguageDataSelector, idProductsFromStartSelector } from '../../../../helpers/reduxSelectors';
import { getIdProductsFromStartingPage } from '../../../../redux/ducks/configsDuck';
import { fetchCatgories } from '../../../../redux/ducks/navigationDuck';
import './styles/_categories.scss';

function Categories() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchCatgories());
     }, []);
     const categories = useSelector(categoriesSelector);
     const changeIdProducts = (e) => {
          dispatch(getIdProductsFromStartingPage(+e.target.dataset.id))
     }
     const idProductsFromStart = useSelector(idProductsFromStartSelector)
     const newestProducts = useSelector(currentLanguageDataSelector)?.home?.newest;

     return (
          <div className="categories">
          <span className="newest">{newestProducts}</span>
               <ul className="category-list">
          {
               categories.map((item,pos) => {
                    return  <li className={
                         idProductsFromStart === pos + 1? "category active" : "category"
                     } key={`cat_${pos}}`} data-id={`${pos + 1 }`}
                    onClick={changeIdProducts}
                    >{item?.arm_name}</li>
               })
          }
          </ul>

          <div className="empty">
               
          </div>
     </div>
     )
}
export default Categories;
