import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector } from '../../../../helpers/reduxSelectors';
import { NavLink } from 'react-router-dom';
import { currentCategory, currentSearch, fetchCurrentCatgory } from '../../../../redux/ducks/navigationDuck';
import { clearSearchData } from '../../../../redux/ducks/productDuck';

export default function Categories() {
     const dispatch = useDispatch()
     const categories = useSelector(categoriesSelector);
     
     const changeCategory = (e) => {
          dispatch(currentCategory(e.target.dataset.id));
          dispatch(fetchCurrentCatgory(e.target.dataset.id));
          dispatch(clearSearchData([]));
          dispatch(currentSearch(''));
      }
  return (
    <>
          <div className="navigation__part">
               <ul className="category__list">
                    
                    {
                    
                         categories.map(item => {
                              return  <li className="category__item"
                                        key={item.id} 
                                        onClick = {changeCategory} >
                                        <NavLink to={`/category/${item.id}`} data-id={item.id}>
                                             {item.arm_name}
                                        </NavLink>
                                   </li>
                         })
                         
                    }
               </ul>
          </div>
    </>
  )
}
