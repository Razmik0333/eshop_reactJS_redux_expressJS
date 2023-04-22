import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, getWishListDataSelector, getWishListIdsSelector } from "../../helpers/reduxSelectors";
import { fetchWishList } from "../../redux/ducks/wishListDuck";
import Product from "../Base/Product/Product";
import  "./styles/wishlist.scss";

function Wishlist() {
     const dispatch = useDispatch();

     const wishListIds = useSelector(getWishListIdsSelector)
     const wishList = useSelector(currentLanguageDataSelector)?.wishlist;
     const productItem = useSelector(currentLanguageDataSelector)?.product_item;

     useEffect(() => {
          
          dispatch(fetchWishList(wishListIds))     
     }, [wishListIds]);
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
                                        return <Product product={item} key={`wish_${item}`} text={productItem} />
                                   })
                                   
                              }

                              </div>
                         </> 
                         : <>{wishList?.empty}</>
                    }
               </div>
          </div>
     )
}

export default Wishlist;
