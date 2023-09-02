import React from 'react'
import RatingMapping from '../../../../Base/RatingMapping/RatingMapping'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCurrencySelector } from '../../../../../helpers/reduxSelectors';
import { getNewCurrency } from '../../../../../helpers/functions/functions';
import { root } from '../../../../../helpers/constants/constants';
import { NavLink } from 'react-router-dom';
import { currentProduct } from '../../../../../redux/ducks/productDuck';
export default function MostestProduct({product}) {
     const dispatch =useDispatch();
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const discountedPrice = product.cost *(1 - product.discount / 100);
     const changeCurrentProduct = (e) => {
          dispatch(currentProduct(e.target.dataset.id));
     }
  return (
     <div className="offer-items">

          <div className="offer-prices">
               <p className="offer-price new-offer-price"> {`${getNewCurrency(currentCurrency, discountedPrice).value}
                              ${getNewCurrency(currentCurrency, discountedPrice).char}`}</p>
               <p className="offer-price old-offer-price"><del>{`${getNewCurrency(currentCurrency, product?.cost).value}
                                        ${getNewCurrency(currentCurrency, product?.cost ).char}`}</del></p>
          </div>
          <div className="offer-content">
               <NavLink to={`/product/${product?.id}`}>
                    <p className="offer-title"
                         data-id={product?.id}
                         onClick={changeCurrentProduct}
                    >{product?.descr}</p>
               </NavLink>
               {
                    <RatingMapping rating={product?.rating}/>
               }
          </div>
     </div>
  )
}
