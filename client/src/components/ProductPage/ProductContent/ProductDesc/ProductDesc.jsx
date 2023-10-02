import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { summRating } from '../../../../helpers/functions/functions';
import { allSoldedProductsSelector, currentLanguageDataSelector, getCurrentCurrencySelector, getReviewsByProductSelector } from '../../../../helpers/reduxSelectors';
import { getCartItem, getCountOfCart, getTotalPriceValue } from '../../../../redux/ducks/cartDuck';
import RatingMapping from '../../../Base/RatingMapping/RatingMapping';
import { getNewCurrency } from '../../../../helpers/functions/functions';
import './styles/_product-desc.scss';
function ProductDesc({currentProduct}) {
     const [countOfProducts, setCountOfProducts] = useState(1) //or 1
     const reviewsByProduct = useSelector(getReviewsByProductSelector);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const product_page_content = useSelector(currentLanguageDataSelector)?.product_page?.content;
     
     const discountedPrice = currentProduct.cost *(1 - currentProduct.discount / 100);


     const rating = Math.floor(summRating(reviewsByProduct)/ reviewsByProduct.length)
     
     const dispatch = useDispatch();
     const addProductToCart = (e) => {
          
          e.stopPropagation()
          dispatch(getCartItem({
                    [e.target.dataset.id] : countOfProducts 
               }
          ))
          const val = (currentProduct.cost *(1 - currentProduct.discount / 100)) * countOfProducts
          dispatch(getCountOfCart(countOfProducts));
          dispatch(getTotalPriceValue(val));
     }
     const clickForChangeCountProducts = (e) => {
          let count = countOfProducts;
          const target = e.target;
          const action = target.dataset.action;
          count =  action === 'add' ? ++count : --count;
          count <= 1 ?  setCountOfProducts(1) :  setCountOfProducts(count)          
     }
     const changeCountProducts =(e) => {
          const target = e.target;
          setCountOfProducts(+target.value)

     }
     const allOrderedProducts = useSelector(allSoldedProductsSelector)

     return (
          <div className="product__desc">
               <div className="product__title">
                    {currentProduct.descr}
               </div>
               <div className="product__feedback">
                    <div className="product stars">
                         <RatingMapping rating = {rating} />
                     </div>
                    <span className="reviews__desc">
                         <span className="reviews__count">{reviewsByProduct.length} {reviewsByProduct.length <= 1 ? product_page_content?.review : product_page_content?.reviews }</span> {/* 0 ->  */}
                         <a href="/">{product_page_content?.add_review}</a>
                    </span>
               </div>
               <div className="product__price">
                    {currentProduct.discount > 0 ? 
                    
                    <p className="product-price old-price">
                    <del>{`${getNewCurrency(currentCurrency, currentProduct.cost).value}
                         ${getNewCurrency(currentCurrency, currentProduct.cost ).char}`}</del>
                    </p> : '' }
                    <p className="product-price new-price">
                         {currentProduct.discount > 0 ? 

                         `${getNewCurrency(currentCurrency, discountedPrice).value}
                              ${getNewCurrency(currentCurrency, discountedPrice).char}`
                         :`${getNewCurrency(currentCurrency, currentProduct.cost).value}
                              ${getNewCurrency(currentCurrency, currentProduct.cost).char}` }
                        
                    </p>
               </div>
               <div className="product__buttons">
                    <button 
                         className="add-to-cart" 
                         onClick={addProductToCart} 
                         data-id={currentProduct.id}>
                         <img src="../icons/cart.svg" alt="" /> {product_page_content?.add_to_cart}
                    </button>
                    <button className="product-button button-favorite"></button>
                    <button className="product-button button-compare"></button>
                    <button className="product-button button-mail"></button>
               </div>
               <div className="order__quantity">
                    {product_page_content?.quantity}: <input className="order-quantity" value={countOfProducts} type="text" onChange={changeCountProducts} />
                    <input className="sub-quantity" defaultValue="-" type="button" data-action="sub" onClick={clickForChangeCountProducts}/>
                    <input className="add-quantity" defaultValue="+" type="button" data-action="add" onClick={clickForChangeCountProducts}/>
               </div>
               <div className="quick__overview">
               {product_page_content?.name}: {currentProduct.main}
               </div>
               <div className="product__info">
                    <p>{product_page_content?.availability} : <span className="availability">
                    {+currentProduct.availability === 1 ? `Առկա է` : `Առկա չէ`}
                    </span></p>
                    <p>{product_page_content?.category} : <span className="category">{currentProduct.arm_name}</span></p>
                    <p>{product_page_content?.sold} : <span className="sold">{allOrderedProducts[currentProduct.id] ? `${allOrderedProducts[currentProduct.id]} ` : `${0} ` }{product_page_content?.pcs}</span></p>
               </div>
               <div className="social__networks">
                    <a href="/">
                         <button className="social__network facebook">
                              <span>
                                   
                                   <svg  height="512px" id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="512px">
                                        <path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z"/>
                                   </svg>
                              </span>
                              <span className="social__network__text">
                                   Share
                              </span>
                         </button>

                    </a>
                    <a href="/">
                         <button className="social__network google">
                              <span>
                                   
                                   <svg height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px">
                                        <g>
                                             <path d="M52.218,25.852h-7.512v-7.51c0-0.573-0.465-1.039-1.037-1.039H41.53c-0.576,0-1.041,0.466-1.041,1.039v7.51h-7.512   c-0.572,0-1.039,0.467-1.039,1.041v2.139c0,0.574,0.467,1.039,1.039,1.039h7.512v7.514c0,0.574,0.465,1.039,1.041,1.039h2.139   c0.572,0,1.037-0.465,1.037-1.039V30.07h7.512c0.572,0,1.039-0.465,1.039-1.039v-2.139C53.257,26.318,52.79,25.852,52.218,25.852z"/>
                                             <path d="M26.974,32.438c-1.58-1.119-3.016-2.76-3.041-3.264c0-0.918,0.082-1.357,2.141-2.961c2.662-2.084,4.128-4.824,4.128-7.719   c0-2.625-0.802-4.957-2.167-6.595h1.059c0.219,0,0.434-0.068,0.609-0.196l2.955-2.141c0.367-0.263,0.521-0.732,0.381-1.161   c-0.141-0.428-0.537-0.72-0.988-0.72H18.835c-1.446,0-2.915,0.255-4.357,0.751c-4.816,1.661-8.184,5.765-8.184,9.978   c0,5.969,4.624,10.493,10.805,10.635c-0.121,0.473-0.182,0.939-0.182,1.396c0,0.92,0.233,1.791,0.713,2.633c-0.056,0-0.11,0-0.17,0   c-5.892,0-11.21,2.891-13.229,7.193c-0.526,1.119-0.794,2.25-0.794,3.367c0,1.086,0.279,2.131,0.826,3.113   c1.269,2.27,3.994,4.031,7.677,4.961c1.901,0.48,3.944,0.725,6.065,0.725c1.906,0,3.723-0.246,5.403-0.732   c5.238-1.521,8.625-5.377,8.625-9.828C32.032,37.602,30.659,35.045,26.974,32.438z M10.283,42.215c0-3.107,3.947-5.832,8.446-5.832   h0.121c0.979,0.012,1.934,0.156,2.834,0.432c0.309,0.213,0.607,0.416,0.893,0.611c2.084,1.42,3.461,2.357,3.844,3.861   c0.09,0.379,0.135,0.758,0.135,1.125c0,3.869-2.885,5.83-8.578,5.83C13.663,48.242,10.283,45.596,10.283,42.215z M14.377,12.858   c0.703-0.803,1.624-1.227,2.658-1.227l0.117,0.002c2.921,0.086,5.716,3.341,6.23,7.256c0.289,2.192-0.199,4.253-1.301,5.509   c-0.705,0.805-1.613,1.229-2.689,1.229c0,0,0,0-0.002,0h-0.047c-2.861-0.088-5.716-3.467-6.227-7.377   C12.829,16.064,13.289,14.099,14.377,12.858z"/>
                                        </g>
                                   </svg>
                              </span>
                              <span>
                                   Google+
                              </span>
                         </button>
                    </a>
                    <a href="/">
                         <button className="social__network twitter">
                                   <span>
                                   
                                   <svg id="twiter" version="1.1" viewBox="0 0 211.4051 175.0664">
                                        <path d="M209.6471,20.4551c-1.416-0.959-3.291-0.9102-4.6582,0.123c-1.7949,1.3613-4.7168,2.4414-7.8613,3.2734  c8.1895-9.1758,8.3652-15.3027,8.2773-16.7129c-0.0918-1.4551-0.9688-2.7461-2.2891-3.3672  c-1.3242-0.625-2.875-0.4727-4.0547,0.3828c-9.2109,6.6953-18.3867,8.1094-23.8438,8.252C166.8424,4.3926,155.9635,0,144.3893,0  C119.6061,0,99.444,20.4316,99.444,45.5449c0,2.1582,0.1504,4.3164,0.4512,6.4512C56.944,51.5098,22.0651,10.3555,21.7057,9.9258  c-0.8379-1.002-2.1133-1.5371-3.416-1.4219c-1.3027,0.1133-2.4688,0.8535-3.1211,1.9863  c-12.3613,21.4434-4.0898,40.2773,3.4707,51.0605c-1.3379-0.7129-2.4219-1.416-3.0684-1.8926  c-1.2012-0.8945-2.8047-1.043-4.1543-0.3809c-1.3477,0.6641-2.209,2.0234-2.2344,3.5254  c-0.334,20.4316,9.502,32.1367,18.748,38.6074c-1.2324-0.1172-2.4844,0.3418-3.3398,1.2715  c-0.9609,1.0449-1.2988,2.5195-0.8848,3.877c6.3867,20.9082,22.0723,28.0117,32.0527,30.4219  c-20.5215,15.9746-50.7188,10.834-51.0527,10.7754c-1.8223-0.3223-3.625,0.6367-4.3672,2.3281  c-0.7422,1.6895-0.2344,3.6699,1.2344,4.7891c21.6602,16.5312,47.5664,20.1934,66.2812,20.1934  c14.1543-0.002,24.1992-2.0977,25.1602-2.3066c94.791-22.4629,97.459-109.291,97.2422-123.5215  c17.7949-16.5488,20.5762-22.8516,21.0059-24.4102C211.7154,23.1738,211.067,21.416,209.6471,20.4551z" />
                                   </svg>
                              </span>
                              <span>
                                   Twetter
                              </span>
                         </button>
                    </a>
                    <a href="/">
                         <button className="social__network pinterest">
                                   <span>
                                        
                                        <svg height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px">
                                             <path d="M30.374,4.622c-13.586,0-20.437,9.74-20.437,17.864c0,4.918,1.862,9.293,5.855,10.922c0.655,0.27,1.242,0.01,1.432-0.715  c0.132-0.5,0.445-1.766,0.584-2.295c0.191-0.717,0.117-0.967-0.412-1.594c-1.151-1.357-1.888-3.115-1.888-5.607  c0-7.226,5.407-13.695,14.079-13.695c7.679,0,11.898,4.692,11.898,10.957c0,8.246-3.649,15.205-9.065,15.205  c-2.992,0-5.23-2.473-4.514-5.508c0.859-3.623,2.524-7.531,2.524-10.148c0-2.34-1.257-4.292-3.856-4.292  c-3.058,0-5.515,3.164-5.515,7.401c0,2.699,0.912,4.525,0.912,4.525s-3.129,13.26-3.678,15.582  c-1.092,4.625-0.164,10.293-0.085,10.865c0.046,0.34,0.482,0.422,0.68,0.166c0.281-0.369,3.925-4.865,5.162-9.359  c0.351-1.271,2.011-7.859,2.011-7.859c0.994,1.896,3.898,3.562,6.986,3.562c9.191,0,15.428-8.379,15.428-19.595  C48.476,12.521,41.292,4.622,30.374,4.622z"/>
                                        </svg>
                                   </span>
                                   <span>
                                        Pinterest
                                   </span>
                              </button>
                         </a>

                    <a href="/">
                         <button className="social__network linkedin">
                              <span>
                                   
                                   <svg className="footer__bottom__icon__item" version="1.1" viewBox="0 0 100 100">
                                        <g id="Layer_3"/>
                                        <g id="Layer_1">
                                             <path d="M66.8,75.4v-22c0,0-1.2-4.6-5.6-4.4c-4.4,0.2-5.8,0.9-7.8,3.3v23.1H42.1V40.5h11.2v5.1c0,0,3.6-7.1,11.2-6.6   c6.9,0.5,12.1,4.7,13.2,13.9H78v22.5H66.8z M28.7,36c-3.7,0-6.7-3-6.7-6.8c0-3.7,3-6.8,6.7-6.8s6.7,3,6.7,6.8   C35.4,32.9,32.4,36,28.7,36z M34.3,75.4H23.1V40.5h11.2V75.4z" id="linkedin"/>
                                        </g>
                                   </svg>
                              </span>
                              <span>
                                   Linkedin
                              </span>
                         </button>
                    </a>
                    </div>
          </div>
     )

}

export default ProductDesc;
