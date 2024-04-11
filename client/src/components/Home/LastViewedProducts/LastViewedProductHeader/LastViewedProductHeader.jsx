import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getViewedProductIdSelector, getViewedProductsSelector } from '../../../../helpers/reduxSelectors'
import { getViewedProductId } from '../../../../redux/ducks/configsDuck';

export default function LastViewedProductHeader() {
     const dispatch = useDispatch();
     const viewedProducts =  useSelector(getViewedProductsSelector);
     console.log("🚀 ~ LastViewedProductHeader ~ viewedProducts:", viewedProducts)
     
     const setViewId = (e) => {
          dispatch(getViewedProductId(+e.target.dataset.id))
     }
     const viewId = useSelector(getViewedProductIdSelector)
     console.log("🚀 ~ LastViewedProductHeader ~ viewId:", viewId)
  return (
     <div className="category-line-circle">
          <div className="category-line">

          </div>
          <div className="circles">
          {
               [viewedProducts].map((item,pos) => {

                    return (pos +  1 ) % 3 === 0 && 
                    
                         <div className={
                              `circle ${(+pos + 1)/3 === viewId ? `active` : ``}`
                         }
                              onClick={setViewId} 
                              data-id={`${(+pos + 1)/3}`}
                              key={`viewed_product_${pos}`}
                         >

                    </div>
               })
          }
          </div>
     </div>
  )
}
