import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, idProductsFromStartSelector } from '../../../../helpers/reduxSelectors';
import { getIdProductsFromStartingPage } from '../../../../redux/ducks/configsDuck';
import './styles/_category-line-circle.scss';
function CategoryLineCircle() {
     const dispatch = useDispatch();
     const idProductsFromStart = useSelector(idProductsFromStartSelector)

     const categories = useSelector(categoriesSelector);
     const changeIdProducts = (e) => {
          dispatch(getIdProductsFromStartingPage(+e.target.dataset.id))
     }
     return(
          <div className="category-line-circle">
               <div className="category-line">

               </div>
               <div className="circles">
                    {
                         categories.map((_,pos) => {
                              return  <div className={
                                   idProductsFromStart === pos + 1? "circle active" : "circle"
                              } key={`circle_${pos}`} data-id={`${pos+1}`} onClick={changeIdProducts}></div>
                         })
                    }
               </div>
          </div>
     )
}

export default CategoryLineCircle;
