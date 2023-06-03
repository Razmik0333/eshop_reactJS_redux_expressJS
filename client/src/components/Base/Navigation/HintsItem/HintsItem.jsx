import { useDispatch } from 'react-redux';
import { currentSearch } from '../../../../redux/ducks/navigationDuck';

export default function HintsItem({item}) {
     const dispatch = useDispatch();
     const changeSearchWord = (e) => {
        dispatch(currentSearch(e.target.dataset.hint))
     }
     return <li className="search__item"
                data-id={item.id} >
                <p className="hints_item"
                    key={item.id}
                    data-hint={`${item.descr}`}
                    onClick={changeSearchWord}
                >
                {item.descr}
               </p>
            </li>
}
