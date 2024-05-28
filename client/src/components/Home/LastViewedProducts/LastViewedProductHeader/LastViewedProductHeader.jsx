import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getViewedProductIdSelector, getViewedProductsSelector } from '../../../../helpers/reduxSelectors'
import { getViewedProductId } from '../../../../redux/ducks/configsDuck';

export default function LastViewedProductHeader() {
     const dispatch = useDispatch();
     const viewedProducts =  useSelector(getViewedProductsSelector);
     const wiewedFilteredProductsIds = viewedProducts.filter((_, pos) => pos < 12)
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
               wiewedFilteredProductsIds.map((_,pos) => {

                    return (pos +  1 ) % 4 === 0 && 
                    
                         <div className={
                              `circle ${(+pos + 1)/4 === viewId ? `active` : ``}`
                         }
                              onClick={setViewId} 
                              data-id={`${(+pos + 1)/4}`}
                              key={`viewed_product_${pos}`}
                         >

                    </div>
               })
          }
          </div>
     </div>
  )
}
