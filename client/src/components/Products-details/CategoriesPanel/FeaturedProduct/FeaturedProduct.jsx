
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentProduct } from '../../../../redux/ducks/productDuck';
import './styles/_featured-products.scss';
import { root } from '../../../../helpers/constants/constants';
import RatingMapping from '../../../Base/RatingMapping/RatingMapping';
import { currentLanguageDataSelector, getCurrentCurrencySelector } from '../../../../helpers/reduxSelectors';
import { getNewCurrency } from '../../../../helpers/functions/functions';


function FeaturedProduct({recommendProduct}) {
     const dispatch = useDispatch();
     const discountedPrice = recommendProduct.cost *(1 - recommendProduct.discount / 100);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const featuredProducts = useSelector(currentLanguageDataSelector)?.recomend;

     const changeCurrentProduct = (e) => {
          dispatch( currentProduct(e.target.dataset.id))
     }
     return (
          <div className="featured__product">
               <div className="feateured__product__picture">
                    <img src={`${root}/images/${recommendProduct.id}.jpg`} alt="" />
               </div>
               <div className="feateured__product__desc">
                    <p className="product__title">
                    <NavLink to={`/product/${recommendProduct.id}`}
                         data-id={recommendProduct.id}
                         onClick={changeCurrentProduct}>
                         {recommendProduct.descr}
                    </NavLink>
                    </p>
                    <p className="product__price">
                    {`${getNewCurrency(currentCurrency, discountedPrice).value}
                              ${getNewCurrency(currentCurrency, discountedPrice).char}`}
                    </p>
                    <RatingMapping rating={recommendProduct.rating} />
                    <button className="add-cart">{featuredProducts?.add_to_cart}</button>
               </div>
          </div>
     )
}

export default FeaturedProduct;
