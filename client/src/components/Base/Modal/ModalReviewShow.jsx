import { useDispatch, useSelector } from "react-redux";
import { changePopup, getPopupItemId, getReviewShow } from "../../../redux/ducks/configsDuck";
import { root } from "../../../helpers/constants/constants";
import { getCurrentLanguageSelector, getCurrentReviewIdSelector, getLatestReviewsSelector, popupItemIdSelector } from "../../../helpers/reduxSelectors";
import "./styles/_modal.scss";
import "./styles/_modal_review.scss";
import { getTime } from "../../../helpers/functions/functions";
import { useRef, useState } from "react";


function ModalReviewShow() {
     const dispatch = useDispatch();
     const [leftVal, setLeftVal] = useState(0)
     //const [imgHeight, setImgHeight] = useState(485)
     const imgRef = useRef(null);
     const imgHeightRef = useRef(null);
     const textRef = useRef(null);
     //dispatch(getReviewShow(false))

     const picturePath = `${root}/images/reviews` // 
     const avatarPath = `${root}/images/users` // 
     const latestReviews = useSelector(getLatestReviewsSelector) 
     const currentLanguage = useSelector(getCurrentLanguageSelector);

     const currentReviewId = useSelector(getCurrentReviewIdSelector);
     const [currentReviewData] = latestReviews.filter(item => +item?.id === +currentReviewId);
     
     const date = currentReviewData?.time_add
     const year = new Date(+date).getFullYear() 
     const month = getTime(new Date(+date).getMonth()+1)
     const day = getTime(new Date(+date).getDate());
     const arrowLeft = () => {
          leftVal === 0 ?  setLeftVal(-(currentReviewData?.productPictures.length - 1) * 509) : 
          setLeftVal(leftVal + 509)          
     }
     const arrowRight = () => {
          leftVal <= -(currentReviewData?.productPictures.length - 1) * 509  ?  setLeftVal(0) : 
          setLeftVal(leftVal - 509)       
          console.log("🚀 ~ ModalReviewShow ~ textRef:", textRef.current.innerHeight)
   
     }

     return <div className="modal container">
          <div className=" modal__popup" >
               <div className="review-main">
                    <div className="picture-block">
                         <div className="picture-block-img"
                                   style={{
                                   width : currentReviewData?.productPictures.length === 0 ? 509 : currentReviewData?.productPictures.length * 509,
                                   left:leftVal
                                   }}
                              ref={imgRef}
                         >
                         {
                              currentReviewData?.productPictures.length > 0 ?  
                                   currentReviewData?.productPictures.map((item,pos) => {
                                        return <div className="review__item__picture" key={`productPictures_${pos}`}>
                                             {
                                                  <img src={`${picturePath}/${currentReviewData?.user_id}/${currentReviewData?.order_id}/${currentReviewData?.product_id}/${item}`} 
                                                       alt=""  ref={imgHeightRef}
                                                  />
                                             }
                                        </div>
                                   })
                              :
                              <div className="latest__blog__item__picture" >
                                   {
                                        <img src={`${avatarPath}/no-image.png`} 
                                             alt=""
                                        />
                                   }
                              </div>
                          
                    }                         
                    </div>
                         {
                              currentReviewData?.productPictures.length > 1 &&

                              <div className="arrows">
                                   <div className="arrow-left" onClick={arrowLeft}>
                                        <img src={`${root}/icons/config/arrow_left.svg`} alt="" />
                                   </div>
                                   <div className="arrow-right" onClick={arrowRight}>
                                        <img src={`${root}/icons/config/arrow_right.svg`} alt="" />
                                   </div>
                              </div>
                         }
                    </div>
                    <div className="review-content">
                         <div className="user__info">
                              <div className="user__avatar">
                                   <img src={`${avatarPath}/${currentReviewData?.user_id}/${currentReviewData?.avatarPicture}`} alt="" />

                                   <span className="user__name">
                                        <p>{currentReviewData?.user_name}</p>
                                        <p className="time_add">{`${day} ${month} ${year}`}</p>

                                   </span>
                              </div>
                         </div>
                         <div className="product__title">{
                              currentLanguage === 'am' ?  currentReviewData?.product?.descr : 
                                   currentLanguage === 'en' ?  currentReviewData?.product?.descr_en :
                                   currentReviewData?.product?.descr_ru
                         }</div>
                         <div className="review__body" ref={textRef}>
                              <p>
                              {
                                   currentReviewData?.review
                              }
                              </p>
                         </div>
                    </div>

               </div>
               <div className="button-block">
                    <button className="modal__resize" type="button"
                         onClick={() =>  {
                              dispatch(getReviewShow(false))
                              dispatch(getPopupItemId(null));

                              document.body.style.overflow = "initial";
                         }}
                    ></button>
               </div>
          </div>
     </div>
}

export default ModalReviewShow;
