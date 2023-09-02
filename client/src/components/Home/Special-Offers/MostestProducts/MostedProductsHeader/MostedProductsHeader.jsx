import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector, mostestIndex } from '../../../../../helpers/reduxSelectors';
import { changeMostestIndex } from '../../../../../redux/ducks/configsDuck';

export default function FurnitureGaleryHeader() {
     const dispatch = useDispatch();
     const langData = useSelector(currentLanguageDataSelector)
     const mostest = langData?.home?.mostest;

     const mostestId = useSelector(mostestIndex);
     const changeMostestId = (e) => {
          dispatch(changeMostestIndex(e.target.dataset.id))
     }
     
  return <div className="offers-categories">
               <ul className="offers-items">
                    {
                         mostest?.map((item,pos) => {
                             return <li className={`offers-item ${+mostestId === +pos ? `active`:``}`}
                                  data-id={`${pos}`} 
                                  onClick={changeMostestId}
                                  key={`offers-item_${pos}`}>
                                  {item}
                              </li>

                         })
                    }
               </ul>
          </div>
}
