import { useEffect } from "react";
import LatestBlogItem from "./LatestBlogItem/LatestBlogItem";
import './styles/_latest-blog.scss';
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestReviews } from "../../../redux/ducks/reviewDuck";
import { getLatestReviewsSelector, getReviewIdSelector, modalReviewShowSelector } from "../../../helpers/reduxSelectors";
import LatestBlogHeader from "./LatestBlogHeader/LatestBlogHeader";
import { getDataFromInterval } from "../../../helpers/functions/functions";
import ModalReviewShow from "../../Base/Modal/ModalReviewShow";

function LatestBlog() {
     const dispatch = useDispatch();
     const reviewShow = useSelector(modalReviewShowSelector)

     useEffect(() => {
          dispatch(fetchLatestReviews())
     }, []);
     const latestReviews = useSelector(getLatestReviewsSelector) 
     const reviewId = useSelector(getReviewIdSelector)
     const start = (reviewId - 1) * 3;

     const filtered = getDataFromInterval(
          latestReviews,
          {
               start,
               count : 2
          }
     )
     return<>


          {
               
                    reviewShow ? <ModalReviewShow /> :<></>
               
     
          }
          <div className="latest__blog">
          <div className="container latest__blog__container">
               <LatestBlogHeader />
               <div className="latest__blog__content">
                    <div className="latest__blog__items">
                         {
                              filtered.map((item,pos) => {
                                   return  <LatestBlogItem key={`latest_blog_${pos}`} blog={item} />
                              })
                         }
                    </div>
               </div>
          </div>
     </div>
     </>
}

export default LatestBlog;
