import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import{ getReviewFilter, getReviewSortType} from "../../../../redux/ducks/reviewDuck"

import { getReviewFilterSelector, getReviewSortTypeSelector } from '../../../../helpers/reduxSelectors';

export default function ProductReviewSort() {
     const dispatch = useDispatch();
     const [isFilter, setIsFilter] = useState(false)
     const typeHandle = (e) => {
          e.preventDefault();          
          dispatch(getReviewSortType({
               type :e.target.dataset.type,
               name : e.target.dataset.name
          }))
     }
     const filterHandle = (e) => {
          dispatch(getReviewFilter(e.target.checked))
          setIsFilter(!isFilter)
     }
     const sortType = useSelector(getReviewSortTypeSelector);
  return (
     <div className="actions">
          <div className="sort">
               <div className="type-head">
                    <span className="type-icon">
                         <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"/></svg>
                         <span>{sortType?.name}</span>
                    </span>
                    <ul className="sorting-types">
                         <li className="sorting-type" data-type="newest"  data-name="Նորերը" onClick={typeHandle}>Նորերը</li>
                         <li className="sorting-type" data-type="oldest" data-name="Հները" onClick={typeHandle}>Հները</li>
                         <li className="sorting-type" data-type="rating-high"  data-name="Բարձր Գնահատականով" onClick={typeHandle}>Բարձր Գնահատականով</li>
                         <li className="sorting-type" data-type="rating-low" data-name="Ցածր Գնահատականով" onClick={typeHandle}>Ցածր Գնահատականով</li>
                    </ul>
               </div>
          </div>
          <div className="filter">
               <label htmlFor="filter">
                    <input type="checkbox" id="filter" checked={isFilter} onChange={filterHandle} />
                    <span>Ցուցադրել նկարով կարծիքները</span>
               </label>
          </div>

     </div>
  )
}
