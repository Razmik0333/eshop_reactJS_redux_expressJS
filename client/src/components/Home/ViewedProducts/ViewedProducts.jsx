import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, getViewedProductsDataSelector, getViewedProductsSelector } from "../../../helpers/reduxSelectors";
import { fetchViewedProducts } from "../../../redux/ducks/productDuck";
import Product from "../../Base/Product/Product";
import './styles/viewed-products.scss'

function ViewedProducts() {
     const dispatch = useDispatch();
     const viewedProducts =  useSelector(getViewedProductsSelector)
      useEffect(() => {
           dispatch(fetchViewedProducts(viewedProducts))
      }, [viewedProducts]);
     const viewedProductsData =  useSelector(getViewedProductsDataSelector)
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;
     const viewedProductsText = useSelector(currentLanguageDataSelector)?.home;
     console.log("🚀 ~ file: ViewedProducts.jsx:17 ~ ViewedProducts ~ viewedProductsText:", viewedProductsText)

     return(
          <div className="products__list">
               <div className="container product__list__container">
                    {
                         viewedProducts.length > 0 &&
                         <>
                         
                              <div className="viewed-products">{viewedProductsText?.viewed}</div>
                              <div className="products-list">
                                   {
                                   
                                        viewedProductsData.map(product => {
                                             return  <Product product={product} text={productItemText} key={product.id} />
                                        })
                                   }
                              </div>
                         </>
                    }
               </div>
          </div>
     )
}


export default ViewedProducts;
