

function FurnitureGallery() {
     return (
          <div className="furniture__gallery">
          <p className="furniture__gallery__header">FURNITURE GALLERY</p>
          <div className="furniture__gallery__content">
               <div className="offers-categories">
                    <ul className="offers-items">
                         <li className="offers-item active">FEATURED</li>
                         <li className="offers-item">TOP SELLER</li>
                         <li className="offers-item">SALE OFF</li>
                         <li className="offers-item">TOP RATED</li>
                    </ul>
               </div>
               <div className="offers-informations">
                    <div className="current-offer"></div>
                    <div className="offers-panels">
                         <div className="left-panel">
                              <div className="offer-button">
                                   <div className="offer-button-item">
                                        <button className="button-favorite"></button>
                                        <div className="add-cart-button">
                                             <button className="add-cart">Add To Cart</button>
                                             <span className="arrow-triangle"></span>
                                        </div>
                                   </div>
                              </div>
                              <div className="offer-button">
                                   <div className="offer-button-item">
                                        <button className="button-compare"></button>
                                        <div className="add-cart-button">
                                             <button className="add-cart">Add To Cart</button>
                                             <span className="arrow-triangle"></span>
                                        </div>
                                   </div>
                              </div>
                              <div className="offer-button">
                                   <div className="offer-button-item">
                                        <button className=" button-eyes"></button>
                                        <div className="add-cart-button">
                                             <button className="add-cart">Add To Cart</button>
                                             <span className="arrow-triangle"></span>
                                        </div>
                                   </div>
                              </div>
                              <div className="offer-button">
                                   <div className="offer-button-item">
                                        <button className="button-cart button-active"></button>
                                        <div className="add-cart-button">
                                             <button className="add-cart">Add To Cart</button>
                                             <span className="arrow-triangle"></span>
                                        </div>
                                   </div>
                              </div>                              
                         </div>
                         <div className="right-panel">
                              <div className="offer-items">
                                   <div className="offer-prices">
                                        <p className="offer-price new-offer-price">$120.00</p>
                                        <p className="offer-price old-offer-price"><del>$160.00</del></p>
                                   </div>
                                   <div className="offer-content">
                                        <a href="">
                                             <p className="offer-title">Aenean Ru Bristique</p>
                                        </a>
                                        <div className="offer-rating">
                                             <span className="star full"></span>
                                             <span className="star full"></span>
                                             <span className="star empty"></span>
                                             <span className="star empty"></span>
                                             <span className="star empty"></span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* <!-- <img src="" alt="" className="current-offer"> --> */}
               </div>
          </div>
          </div>
     )
}

export default FurnitureGallery;
