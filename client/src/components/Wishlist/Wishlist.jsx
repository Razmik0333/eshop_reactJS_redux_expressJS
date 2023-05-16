import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, getUserId, getWishListDataSelector, getWishListIdsSelector } from "../../helpers/reduxSelectors";
import { fetchWishList } from "../../redux/ducks/wishListDuck";
import Product from "../Base/Product/Product";
import  "./styles/wishlist.scss";
import { useNavigate } from "react-router-dom";

function Wishlist() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const navigate = useNavigate()

     const wishListIds = useSelector(getWishListIdsSelector)
     const wishList = useSelector(currentLanguageDataSelector)?.wishlist;
     const productItem = useSelector(currentLanguageDataSelector)?.product_item;
     useEffect(() => {
          !userId && navigate('/login') 
     }, []);
     useEffect(() => {
          
          dispatch(fetchWishList(userId))     
     }, [userId]);
     const wishListData = useSelector(getWishListDataSelector)
     return (
          <div className="products__list">
               <div className="container product__list__container">
                    {
                         wishListData.length > 0 ?  
                         
                         <>
                              <p className="wishlist__header">{wishList?.header}</p>
                              <div className="products-list">
                              {     
                                   wishListData.map(item => {
                                        return <Product product={item} key={`wish_${item?.id}`} text={productItem} />
                                   })
                                   
                              }

                              </div>
                         </> 
                         : <p className="wishlist__empty">{wishList?.empty}</p>
                    }
               </div>
          </div>
     )
}

export default Wishlist;
