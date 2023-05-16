import { useDispatch } from 'react-redux';
import { currentProduct } from '../../../../redux/ducks/productDuck';

export default function HintsItem({item}) {
     const dispatch = useDispatch();
     const changeCurrentProduct = (e) => {
         dispatch(currentProduct(e.target.dataset.id))
     }
     return <li className="search__item"
                onClick={changeCurrentProduct}
                data-id={item.id} >
                <p 
                    key={item.id}
                    data-id={item.id}
               >  {item.descr}</p></li>
}
