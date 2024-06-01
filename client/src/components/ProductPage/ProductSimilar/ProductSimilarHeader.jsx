import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentLanguageDataSelector, getSimilarCircleIdSelector, productsSimilarSelector } from '../../../helpers/reduxSelectors';
import './styles/_product-similar-header.scss';
import { getSimilarProductId } from '../../../redux/ducks/configsDuck';
export default function ProductSimilarHeader() {
     const dispatch = useDispatch()
     const langData = useSelector(currentLanguageDataSelector);
     const productSimilarLang = langData?.product_page;
     const productSimilar = useSelector(productsSimilarSelector);
     const getSimilarCircleId = (e) => {
          dispatch(getSimilarProductId(e.target.dataset.id))
     }
     const circleId = useSelector(getSimilarCircleIdSelector)
  return (
    <>
          <div className="categories">
               <span>{productSimilarLang?.similar}</span>
          </div>
          <div className="category-line-circle">
               <div className="category-line">

               </div>
               <div className="circles">
                    {
                         productSimilar.map((_, pos) => {
                              
                            return  pos % 8 === 0 &&
                               <div className={`circle ${  +pos / 8 === +circleId ? `active`:``}`} data-id={`${pos / 8}`} onClick={getSimilarCircleId}></div>
                         })
                    }
               </div>
          </div>
    </>
  )
}
