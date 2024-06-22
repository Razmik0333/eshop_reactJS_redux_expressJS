import React from 'react'
import RatingMapping from '../../../../Base/RatingMapping/RatingMapping'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCurrencySelector, getCurrentLanguageSelector } from '../../../../../helpers/reduxSelectors';
import { getNewCurrency } from '../../../../../helpers/functions/functions';
import { NavLink } from 'react-router-dom';
import { currentProduct } from '../../../../../redux/ducks/productDuck';
export default function MostestProduct({product}) {
     const dispatch =useDispatch();
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const currentLanguage = useSelector(getCurrentLanguageSelector);
     console.log(product);
     
     const discountedPrice = product?.cost *(1 - product?.discount / 100);
     console.log("🚀 ~ MostestProduct ~ discountedPrice:", product?.cost, product?.discount)
     const changeCurrentProduct = (e) => {
          dispatch(currentProduct(e.target.dataset.id));
     }
  return (
     <div className="offer-items">

          <div className="offer-prices">
               <p className="offer-price new-offer-price"> {`${getNewCurrency(currentCurrency, discountedPrice)?.value}
                              ${getNewCurrency(currentCurrency, discountedPrice)?.char}`}</p>
               <p className="offer-price old-offer-price"><del>{`${getNewCurrency(currentCurrency, product?.cost)?.value}
                                        ${getNewCurrency(currentCurrency, product?.cost )?.char}`}</del></p>
          </div>
          <div className="offer-content">
               <NavLink to={`/product/${product?.id}`}>
                    <p className="offer-title"
                         data-id={product?.id}
                         onClick={changeCurrentProduct}
                    >{
                        currentLanguage === 'am' ? product?.descr : 
                                   currentLanguage === 'en' ? product?.descr_en :
                                        product?.descr_ru
                    }</p>
               </NavLink>
               {
                    <RatingMapping rating={product?.rating}/>
               }
          </div>
     </div>
  )
}
