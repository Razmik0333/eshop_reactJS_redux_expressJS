import { memo, useState } from "react";
import { getTime } from "../../../../helpers/functions/functions";
import RatingMapping from "../../../Base/RatingMapping/RatingMapping";
import { root } from "../../../../helpers/constants/constants";
import { useRef } from "react";

function LatestBlogItem({blog}) {
     const imgRef = useRef(null);
     const [leftVal, setLeftVal] = useState(0)
     const date = blog?.time_add
     const year = new Date(+date).getFullYear() 
     const month = getTime(new Date(+date).getMonth()+1)
     const day = getTime(new Date(+date).getDate());

     const arrowLeft = () => {
          leftVal === 0 ?  setLeftVal(-(blog?.productPictures.length - 1) * 381) : 
          setLeftVal(leftVal + 381)          
     }
     const arrowRight = () => {
          leftVal <= -(blog?.productPictures.length - 1) * 381  ?  setLeftVal(0) : 
          setLeftVal(leftVal - 381)          
     }

     return(
          <div className="latest__blog__item">
               <div className="latest__blog__item__pictures"
                    style={{
                         width : blog?.productPictures.length * 381,
                         left:leftVal}}
                    ref={imgRef}
               >
                    {
                         blog?.productPictures.map((item,pos) => {
                              return <div className="latest__blog__item__picture" key={`productPictures_${pos}`}>
                                        <img src={`${root}/images/reviews/${blog?.user_id}/${blog?.order_id}/${blog?.product_id}/${item}`} alt="" />

                              </div>

                         })
                    }
               </div>
               <div className="arrows">
                    <div className="arrow-left" onClick={arrowLeft}>
                         <img src={`${root}/icons/config/arrow_left.svg`} alt="" />
                    </div>
                    <div className="arrow-right" onClick={arrowRight}>
                         <img src={`${root}/icons/config/arrow_right.svg`} alt="" />

                    </div>
               </div>
               <div className="latest__blog__item__title">
                    <span className="comments-count">
                         <img src="../icons/surprise.svg" alt="" />
                              {
                              `${day} ${month} ${year}`
                         }
                    </span>
                         <span className="item-title-date">
                              {
                                   <RatingMapping rating={blog?.rating}/>
                              }
                         </span>
               </div>
               <div className="latest_blog_content">
                    <p className="item-desc-title">
                         {
                              blog?.product?.descr
                         } 
                    </p>
                    <div className="item-desc-text">
                         {
                              blog?.review
                         }
                    </div>
                    <div className="latest-blog-footer">
                         <button className="latest_blog_button">Read More</button>
                    </div>
               </div>
          </div>
     )
}

export default memo(LatestBlogItem);
