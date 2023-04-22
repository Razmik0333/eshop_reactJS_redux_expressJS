import LatestBlogItem from "./LatestBlogItem/LatestBlogItem";
import './styles/_latest-blog.scss';
function LatestBlog() {
     return(
          <div className="latest__blog">
          <div className="container latest__blog__container">
               <div className="latest__blog__header">
                    <p className="latest-blog-header">
                         LATEST BLOG
                    </p>
                    
                    <div className="latest__blog_line__circles">
                         <div className="latest__blog__line">
     
                         </div>
                         <div className="circles">
                              <div className="circle active"></div>
                              <div className="circle"></div>
                              <div className="circle"></div>
                         </div>
                    </div>
               </div>
               <div className="latest__blog__content">
                    <div className="latest__blog__items">
                         <LatestBlogItem />
                         <LatestBlogItem />
                         <LatestBlogItem />
                    </div>
               </div>
          </div>
     </div>
     )
}

export default LatestBlog;
