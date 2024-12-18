import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import { currentProduct } from "../../../../redux/ducks/productDuck";


function SearchItem({item}) {
     const dispatch = useDispatch();
     const changeCurrentProduct = (e) => {
         dispatch(currentProduct(e.target.dataset.id))
     }
     return <li className="search__item"
                onClick={changeCurrentProduct}
                data-id={item.id} >
                <NavLink 
                    to={`/product/${item.id}`} 
                    key={item.id}
                    data-id={item.id}
               > {item.descr}</NavLink></li>

}

export default SearchItem
