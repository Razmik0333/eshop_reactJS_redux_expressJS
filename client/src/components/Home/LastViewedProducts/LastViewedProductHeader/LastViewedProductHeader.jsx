import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getViewedProductIdSelector, getViewedProductsSelector } from '../../../../helpers/reduxSelectors'
import { getViewedProductId } from '../../../../redux/ducks/configsDuck';

export default function LastViewedProductHeader() {
     const dispatch = useDispatch();
     const numberProductsInBlock = 4;

     const viewedProducts =  useSelector(getViewedProductsSelector);
     const viewedFilteredProductsIds = viewedProducts
     .split("|")
     .filter((_, pos) => pos < 12)
     .filter((_, pos) => pos % numberProductsInBlock === 0)
     const setViewId = (e) => {
          dispatch(getViewedProductId(+e.target.dataset.id))
     }
     const viewId = useSelector(getViewedProductIdSelector)
  return (
     <div className="category-line-circle">
          <div className="category-line">

          </div>
          <div className="circles">
          {
                    viewedFilteredProductsIds.map((_,pos) => {
                    return  <div className={
                              `circle ${(pos + 1) === viewId ? `active` : ``}`
                         }
                              onClick={setViewId} 
                              data-id={`${(+pos + 1)}`}
                              key={`viewed_product_${pos}`}
                         >

                    </div>
               })
          }
          </div>
     </div>
  )
}
