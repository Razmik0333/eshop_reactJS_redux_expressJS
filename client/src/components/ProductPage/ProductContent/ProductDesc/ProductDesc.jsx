import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { numInArray, summRating } from '../../../../helpers/functions/functions';
import { allSoldedProductsSelector, currentLanguageDataSelector, getCurrentCurrencySelector, getCurrentLanguageSelector, getReviewsByProductSelector, getUserId, getWishListDataSelector } from '../../../../helpers/reduxSelectors';
import { fetchAddCart, getCartItem, getCountOfCart, getTotalPriceValue } from '../../../../redux/ducks/cartDuck';
import RatingMapping from '../../../Base/RatingMapping/RatingMapping';
import { getNewCurrency } from '../../../../helpers/functions/functions';
import './styles/_product-desc.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { deleteWishListItem, fetchAddWishList } from '../../../../redux/ducks/wishListDuck';
function ProductDesc({currentProduct}) {
     const navigate = useNavigate();

     const [countOfProducts, setCountOfProducts] = useState(1) //or 1
     const reviewsByProduct = useSelector(getReviewsByProductSelector);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const product_page_content = useSelector(currentLanguageDataSelector)?.product_page?.content;
     const currentLanguage = useSelector(getCurrentLanguageSelector);
     const userId = useSelector(getUserId)
     const discountedPrice = currentProduct.cost *(1 - currentProduct.discount / 100);
     const wishListData = useSelector(getWishListDataSelector);
     const wishListIds = wishListData.map(item => item?.id);
     const rating = Math.floor(summRating(reviewsByProduct)/ reviewsByProduct.length)
     
     const dispatch = useDispatch();
          const addProductToCart = (e) => {
          userId ? 
          dispatch(fetchAddCart(userId ,{
               [e.target.dataset.id] :countOfProducts
          }))
          : navigate('/login')
     }
     const addProductToWishList = (e) => {
          const target = e.target; 
          userId ? 
          (numInArray(wishListIds,+target.dataset.id) ? 
               dispatch(fetchAddWishList(userId, +target.dataset.id)):
                    dispatch(deleteWishListItem(userId, +target.dataset.id)))
          : navigate('/login')

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
               {
                    currentLanguage === 'am' ? currentProduct?.descr : 
                         currentLanguage === 'en' ? currentProduct?.descr_en :
                              currentProduct?.descr_ru}
               </div>
               <div className="product__feedback">
                    <div className="product stars">
                         <RatingMapping rating = {rating} />
                     </div>
                    <span className="reviews__desc">
                         <span className="reviews__count">{reviewsByProduct.length} {reviewsByProduct.length <= 1 ? product_page_content?.review : product_page_content?.reviews }</span> {/* 0 ->  */}
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

                    <button className={`product-button  ${numInArray(wishListIds,currentProduct?.id) ? 'button-favorite' : 'button-favorite-full' }`} 
                                             data-id={`${currentProduct?.id}`}
                    onClick={addProductToWishList}
                    >


                    </button>
                    <button className="product-button button-compare"></button>
                    <button className="product-button button-mail"></button>
               </div>
               <div className="order__quantity">
                    {product_page_content?.quantity}: <input className="order-quantity" value={countOfProducts} type="text" onChange={changeCountProducts} />
                    <input className="sub-quantity" defaultValue="-" type="button" data-action="sub" onClick={clickForChangeCountProducts}/>
                    <input className="add-quantity" defaultValue="+" type="button" data-action="add" onClick={clickForChangeCountProducts}/>
               </div>
               <div className="quick__overview">
               {product_page_content?.description}: {currentProduct.main}
               </div>
               <div className="product__info">
                    <p>{product_page_content?.availability} : 
                    <span className="availability">
                    {
                         +currentProduct.availability === 1 ? 
                              product_page_content?.available : product_page_content?.not_available
                    }
                    </span>
                    </p>
                    <p>{product_page_content?.category} : <span className="category">
                    {
                         currentLanguage === "am" ? currentProduct?.arm_name : `${currentProduct?.alias}`.toUpperCase()}
                    </span></p>
                    <p>{product_page_content?.sold} : <span className="sold">{allOrderedProducts[currentProduct.id] ? `${allOrderedProducts[currentProduct.id]} ` : `${0} ` }{product_page_content?.pcs}</span></p>
               </div>
               <div className="social__networks">
                    <a href="https://www.facebook.com/mprintservice">
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
                    <a href="https://www.instagram.com/mprintservice">
                         <button className="social__network instagram">
                              <span>
                                   
                                   <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z"/><path class="cls-1" d="M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z"/><path class="cls-1" d="M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z"/></svg>
                              </span>
                              <span>
                                   <b>Instagram</b>
                              </span>
                         </button>
                    </a>
                    <a href="https://wa.me/37441016006">
                         <button className="social__network whatsapp">
                              <span>
                                   <svg height="60px" version="1.1" viewBox="0 0 60 60" width="60px">
                                        <g  fill-rule="evenodd" id="black" stroke="none" stroke-width="1">
                                             <g id="whatsapp"><path d="M30,60 C46.5685433,60 60,46.5685433 60,30 C60,13.4314567 46.5685433,0 30,0 C13.4314567,0 0,13.4314567 0,30 C0,46.5685433 13.4314567,60 30,60 Z" fill="#0bce73"/>
                                                  <path d="M30.0712615,46.2210462 C27.2108308,46.2210462 24.5235692,45.4899692 22.1856,44.2068923 L13.1538462,47.0769231 L16.0980923,38.3918769 C14.6130462,35.9523692 13.7575385,33.0915692 13.7575385,30.0336 C13.7575385,21.0934154 21.0612923,13.8461538 30.0716308,13.8461538 C39.0808615,13.8461538 46.3846154,21.0934154 46.3846154,30.0336 C46.3846154,38.9737846 39.0812308,46.2210462 30.0712615,46.2210462 Z M30.0712615,16.4241231 C22.5079385,16.4241231 16.3558154,22.5293538 16.3558154,30.0336 C16.3558154,33.0114462 17.3265231,35.7692308 18.9681231,38.0130462 L17.2548923,43.0670769 L22.5252923,41.3918769 C24.6912,42.8137846 27.2854154,43.6430769 30.0712615,43.6430769 C37.6334769,43.6430769 43.7867077,37.5382154 43.7867077,30.0339692 C43.7867077,22.5297231 37.6334769,16.4241231 30.0712615,16.4241231 L30.0712615,16.4241231 Z M38.3088,33.7617231 C38.2083692,33.5966769 37.9417846,33.4969846 37.5426462,33.2987077 C37.1424,33.1004308 35.1758769,32.1400615 34.8099692,32.0082462 C34.4429538,31.8760615 34.176,31.8092308 33.9097846,32.2065231 C33.6435692,32.6038154 32.8770462,33.4969846 32.6433231,33.7617231 C32.4099692,34.0268308 32.1769846,34.0600615 31.7771077,33.8614154 C31.3776,33.6631385 30.0889846,33.2440615 28.5611077,31.8923077 C27.3725538,30.8407385 26.5698462,29.5425231 26.3368615,29.1448615 C26.1035077,28.7479385 26.3121231,28.5334154 26.5122462,28.3358769 C26.6920615,28.1579077 26.9121231,27.8724923 27.1122462,27.6409846 C27.3123692,27.4091077 27.3788308,27.2440615 27.5117538,26.9789538 C27.6454154,26.7142154 27.5785846,26.4827077 27.4785231,26.2836923 C27.3784615,26.0854154 26.5783385,24.1329231 26.2452923,23.3383385 C25.9122462,22.5444923 25.5795692,22.6766769 25.3458462,22.6766769 C25.1124923,22.6766769 24.8459077,22.6434462 24.5793231,22.6434462 C24.3127385,22.6434462 23.8792615,22.7427692 23.5126154,23.1396923 C23.1463385,23.5369846 22.1136,24.4969846 22.1136,26.4491077 C22.1136,28.4016 23.5458462,30.288 23.7463385,30.5523692 C23.9460923,30.8167385 26.5118769,34.9536 30.5767385,36.5424 C34.6430769,38.1308308 34.6430769,37.6009846 35.3763692,37.5348923 C36.1085538,37.4688 37.7412923,36.5752615 38.0754462,35.6488615 C38.4081231,34.7217231 38.4081231,33.9271385 38.3088,33.7617231 L38.3088,33.7617231 Z" fill="#FFFFFF"/>
                                             </g>
                                        </g>
                                   </svg>
                              </span>
                              <span>
                                   Whatsapp
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

                    <a href="viber://chat?number=+37441016006/">
                         <button className="social__network linkedin">
                              <span>
                                   
                                   <svg role="img" viewBox="0 0 24 24" >
                                        <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01 6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199 3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.732 2-6.172 1.957-1.77 5.475-2.01 7.11-2.02zm.36 2.6a.299.299 0 0 0-.3.299.3.3 0 0 0 .3.3 5.631 5.631 0 0 1 4.03 1.59c1.09 1.06 1.621 2.48 1.641 4.34a.3.3 0 0 0 .3.3v-.009a.3.3 0 0 0 .3-.3 6.451 6.451 0 0 0-1.81-4.76c-1.19-1.16-2.692-1.76-4.462-1.76zm-3.954.69a.955.955 0 0 0-.615.12h-.012c-.41.24-.788.54-1.148.94-.27.32-.421.639-.461.949a1.24 1.24 0 0 0 .05.541l.02.01a13.722 13.722 0 0 0 1.2 2.6 15.383 15.383 0 0 0 2.32 3.171l.03.04.04.03.03.03.03.03a15.603 15.603 0 0 0 3.18 2.33c1.32.72 2.122 1.06 2.602 1.2v.01c.14.04.268.06.398.06a1.84 1.84 0 0 0 1.102-.472c.39-.35.7-.738.93-1.148v-.01c.23-.43.15-.841-.18-1.121a13.632 13.632 0 0 0-2.15-1.54c-.51-.28-1.03-.11-1.24.17l-.45.569c-.23.28-.65.24-.65.24l-.012.01c-3.12-.8-3.95-3.959-3.95-3.959s-.04-.43.25-.65l.56-.45c.27-.22.46-.74.17-1.25a13.522 13.522 0 0 0-1.54-2.15.843.843 0 0 0-.504-.3zm4.473.89a.3.3 0 0 0 .002.6 3.78 3.78 0 0 1 2.65 1.15 3.5 3.5 0 0 1 .9 2.57.3.3 0 0 0 .3.299l.01.012a.3.3 0 0 0 .3-.301c.03-1.19-.34-2.19-1.07-2.99-.73-.8-1.75-1.25-3.05-1.34a.3.3 0 0 0-.042 0zm.49 1.619a.305.305 0 0 0-.018.611c.99.05 1.47.55 1.53 1.58a.3.3 0 0 0 .3.29h.01a.3.3 0 0 0 .29-.32c-.07-1.34-.8-2.091-2.1-2.161a.305.305 0 0 0-.012 0z"/>
                                   </svg>
                              </span>
                              <span>
                                   Viber
                              </span>
                         </button>
                    </a>
                    </div>
          </div>
     )

}

export default ProductDesc;
