import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchGallery } from "../../../../redux/ducks/productDuck";
import { getGallerySelector } from "../../../../helpers/reduxSelectors";
import { root } from "../../../../helpers/constants/constants";

function ProductsGallery() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchGallery());
     }, []);
     const galleryData = useSelector(getGallerySelector);
     const filtered = galleryData.filter((_, pos) => pos <= 4)
     return (
          <div className="products-gallery">
               <div className="products-gallery-header">
                    <p className="products-gallery-title">ԿԱՏԱՐՎԱԾ ԱՇԽԱՏԱՆՔՆԵՐ</p>
               </div>
               <div className="products-gallery-blocks">
               {
                    filtered.map((item) => {
                         return <>

                                        <div className="products-gallery-block">
                                             <img src={`${root}/images/gallery/${item?.id}.jpg`} alt="" />
                                        </div>
                                        
                              </>
                    })
               }
               </div>
               <div className="products-gallery-footer">
                    <NavLink to={'/gallery'} className="view-more">ԴԻՏԵԼ ԱՎԵԼԻՆ</NavLink>

               </div>
          </div>
     )
}

export default ProductsGallery;
