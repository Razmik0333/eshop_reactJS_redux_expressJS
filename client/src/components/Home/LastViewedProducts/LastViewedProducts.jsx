import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currentLanguageDataSelector, getViewedProductsDataSelector, getViewedProductsSelector } from "../../../helpers/reduxSelectors";
import { fetchViewedProducts } from "../../../redux/ducks/productDuck";
import Product from "../../Base/Product/Product";
import { root } from "../../../helpers/constants/constants";
import CategoryLineCircle from "../ProductsList/CategoryLineCircle/CategoryLineCircle";

function LastViewedProducts() {
     const dispatch = useDispatch();
     const viewedProducts =  useSelector(getViewedProductsSelector)
     useEffect(() => {
          dispatch(fetchViewedProducts(viewedProducts))
     }, [viewedProducts]);
     const viewedProductsData =  useSelector(getViewedProductsDataSelector)
     const lastViewedProductsData = viewedProductsData.filter((_, pos) => pos < 4 )
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;

     return(
          <div className="products__list">
               <div className="container product__list__container">
                    {
                         lastViewedProductsData.length > 0 &&
                         <>
                         <div className="categories">
                              <span className="viewed">VIEWED PRODUCTS
                                   <NavLink className="viewed-link" to={'/viewed'}>

                                        <img src={`${root}/icons/config/arrow_right.svg`} alt="" />
                                   </NavLink>
                              
                              </span>
                         </div>
                              <CategoryLineCircle />
                              <div className="products-list">
                                   {
                                   
                                        lastViewedProductsData.map(product => {
                                             return  <Product product={product} text={productItemText} key={product?.id} />
                                        })
                                   }
                              </div>
                         
                         </>
                    }
               </div>
          </div>
     )
}


export default LastViewedProducts;
