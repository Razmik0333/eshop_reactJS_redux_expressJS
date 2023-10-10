
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentProduct } from '../../../../redux/ducks/productDuck';
import RatingMapping from '../../../Base/RatingMapping/RatingMapping';
import { currentLanguageDataSelector, getCurrentCurrencySelector, getUserId } from '../../../../helpers/reduxSelectors';
import { getNewCurrency } from '../../../../helpers/functions/functions';
import { fetchAddCart } from '../../../../redux/ducks/cartDuck';
import './styles/_featured-products.scss';
import { root } from '../../../../helpers/constants/constants';


function FeaturedProduct({recommendProduct}) {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const userId = useSelector(getUserId)
     const discountedPrice = recommendProduct.cost *(1 - recommendProduct.discount / 100);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const featuredProducts = useSelector(currentLanguageDataSelector)?.recomend;

     const changeCurrentProduct = (e) => {
          dispatch( currentProduct(e.target.dataset.id))
     }
     const addProductToCart = (e) => {
          userId ? 
          dispatch(fetchAddCart(userId ,{
               [e.target.dataset.id] : 1
          }))
          : navigate('/login')
     }
     return (
          <div className="featured__product">
               <div className="feateured__product__picture">
                    <img src={`${root}/images/products/${recommendProduct.id}.jpg`} alt="" />
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
                    <button className="add-cart"
                                             data-id={recommendProduct?.id}
                                             onClick={addProductToCart}

                    >{featuredProducts?.add_to_cart}</button>
               </div>
          </div>
     )
}

export default FeaturedProduct;
