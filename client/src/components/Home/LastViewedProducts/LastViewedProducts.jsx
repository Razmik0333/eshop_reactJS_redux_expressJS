import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currentLanguageDataSelector, getViewedProductIdSelector, getViewedProductsDataSelector, getViewedProductsSelector } from "../../../helpers/reduxSelectors";
import { fetchViewedProducts } from "../../../redux/ducks/productDuck";
import Product from "../../Base/Product/Product";
import { root } from "../../../helpers/constants/constants";
import CategoryLineCircle from "../ProductsList/CategoryLineCircle/CategoryLineCircle";
import LastViewedProductHeader from "./LastViewedProductHeader/LastViewedProductHeader";
import './LastViewedProductHeader/styles/_last-viewed-product-header.scss'
import { getDataFromInterval } from "../../../helpers/functions/functions";
function LastViewedProducts() {
     const dispatch = useDispatch();
     const viewedProducts =  useSelector(getViewedProductsSelector)
     console.log("🚀 ~ LastViewedProducts ~ viewedProducts:", viewedProducts)
     useEffect(() => {
          dispatch(fetchViewedProducts(viewedProducts))
     }, [viewedProducts]);
     const viewedProductsData =  useSelector(getViewedProductsDataSelector)
     //console.log("🚀 ~ LastViewedProducts ~ viewedProductsData:", viewedProductsData)
     const lastViewedProductsData = viewedProductsData.filter((_, pos) => pos < 4 )
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;
     const viewedProductsText = useSelector(currentLanguageDataSelector)?.home;
     const viewId = useSelector(getViewedProductIdSelector)// || 1
     console.log("🚀 ~ LastViewedProducts ~ viewId:", viewId)

     const start = (viewId - 1) * 4; //id 1, start 0

     const filtered = getDataFromInterval(
          viewedProductsData,
          {
               start  ,
               count : 3
          }
     )
     
     return(
          <div className="products__list">
               <div className="container product__list__container">
                    {
                         lastViewedProductsData.length > 0 &&
                         <>
                         <div className="categories">
                              <span className="viewed">{viewedProductsText?.viewed}
                                   <NavLink className="viewed-link" to={'/viewed'}>
                                        <img src={`${root}/icons/config/arrow_right.svg`} alt="" />
                                   </NavLink>
                              
                              </span>
                         </div>
                               <LastViewedProductHeader />
                              
                              <div className="products-list">
                                   {
                                   
                                        filtered.map((product,pos) => {
                                             return pos <= 11 && <Product product={product} text={productItemText} key={product?.id} />
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
