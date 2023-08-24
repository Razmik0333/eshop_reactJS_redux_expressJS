import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { root } from '../../../../helpers/constants/constants';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import './styles/_carousel.scss';


function Carousel() {
     const carouselRef= useRef(null);
     const [leftVal, setLeftVal] = useState(0);
     const shopNow = useSelector(currentLanguageDataSelector)?.home?.carousel?.shop_now;
     const arrowRight = () => {
          leftVal <  -carouselRef.current?.clientWidth ? setLeftVal(0) :
          setLeftVal(leftVal - carouselRef.current?.clientWidth);
          
     }
     const arrowLeft = () => {
          leftVal === 0 ?  setLeftVal(leftVal - 2 * carouselRef.current?.clientWidth) : 
          setLeftVal(leftVal + carouselRef.current?.clientWidth)          
     }
     useEffect(() => {
          const id = setInterval(arrowRight, 10000)
          return () => {
               clearInterval(id)
          };
     }, []);
     
     return (
          <div className="carousel" ref={carouselRef}>
               <div className="pictures__block" style={{left:leftVal}}>
                    <div className="carousel__body">
                         <div className="carousel__picture">
                              <img alt='carousel_item_1'  src={`${root}/icons/carusel/carousel_1.jpg`}/>
                         </div>
                         <div className="carousel__content">
                              <h1 className="carousel-body-header">
                                   INDOOR <span>FURNITURE</span>
                              </h1>
                              <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                         </div>
                    </div>
                    <div className="carousel__body">
                         <div className="carousel__picture">
                              <img alt='carousel_item_1'  src={`${root}/icons/carusel/carousel_1.jpg`}/>
                         </div>
                         <div className="carousel__content">
                              <h1 className="carousel-body-header">
                                   INDOOR <span>FURNITURE</span>
                              </h1>
                              <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                         </div>
                    </div>
                    <div className="carousel__body">
                         <div className="carousel__picture">
                              <img alt='carousel_item_1'  src={`${root}/icons/carusel/carousel_1.jpg`}/>
                         </div>
                         <div className="carousel__content">
                              <h1 className="carousel-body-header">
                                   INDOOR <span>FURNITURE</span>
                              </h1>
                              <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                         </div>
                    </div>
                     

               </div>
               <button type="button" className="shop-now">{shopNow}</button>
               <div className="carousel__buttons">
                    <button className="carousel-button arrow-left"
                    onClick={arrowLeft}
                    >
                         <img src={`${root}/icons/config/arrow_left.svg`} alt="" />
                    </button>
                    <button 
                         className="carousel-button arrow-right"
                         onClick={arrowRight}
                    >
                         <img src={`${root}/icons/config/arrow_right.svg`} alt="" />
                    </button>
               </div>
          </div>
     )
}
export default Carousel;
