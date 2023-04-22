function LatestBlogItem() {
     return(
          <div className="latest__blog__item">
               <div className="latest__blog__item__picture">
                    {/* <!-- <img src="" alt=""> --> */}
                    <div className="latest__blog__item__title">
                         <span className="comments-count">
                              <img src="../icons/surprise.svg" alt="" />
                              15 JAN 2016
                         </span>
                         <span className="item-title-date">
                              <img src="../icons/comments.svg" alt="" />
                              4comments</span>
                    </div>
               </div>
               <div className="latest__blog__item__desc">
                    <div className="latest_blog_content">
                         <p className="item-desc-title">
                              Products That Fight Static 
                         </p>
                         <div className="item-desc-text">
                              Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget luctus nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in, ornare enim
                         </div>
                         <div className="latest-blog-footer">
                              <button className="latest_blog_button">Read More</button>
                         </div>
                    </div>
                    
               </div>
          </div>
     )
}

export default LatestBlogItem;
