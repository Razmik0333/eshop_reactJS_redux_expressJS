import { useEffect } from "react";
import LatestBlogItem from "./LatestBlogItem/LatestBlogItem";
import './styles/_latest-blog.scss';
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestReviews } from "../../../redux/ducks/reviewDuck";
import { getLatestReviewsSelector, getReviewIdSelector } from "../../../helpers/reduxSelectors";
import LatestBlogHeader from "./LatestBlogHeader/LatestBlogHeader";

function LatestBlog() {
     const dispatch = useDispatch()
     useEffect(() => {
          dispatch(fetchLatestReviews())
     }, []);
     const latestReviews = useSelector(getLatestReviewsSelector) 
     console.log("🚀 ~ file: LatestBlog.jsx:15 ~ LatestBlog ~ latestReviews:", latestReviews)
     const reviewId = useSelector(getReviewIdSelector)
     const start = (reviewId - 1) * 3;

     const filtered = latestReviews.filter((item, pos) => {
          return pos >= start && pos <= start + 2
     })
     return(
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
     )
}

export default LatestBlog;
