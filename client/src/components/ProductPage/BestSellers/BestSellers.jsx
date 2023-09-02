import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, verySoldedProductsSelector } from "../../../helpers/reduxSelectors";
import { fetchVerySoldedProducts } from "../../../redux/ducks/productDuck";
import Product from "../../Base/Product/Product";
import './styles/_newest-products-header.scss';
function BestSellers() {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchVerySoldedProducts())
          
     }, []);
     const langData = useSelector(currentLanguageDataSelector);
     const ordersBestSellers = useSelector(verySoldedProductsSelector);
     console.log("🚀 ~ file: BestSellers.jsx:14 ~ BestSellers ~ ordersBestSellers:", ordersBestSellers)
     const bestSellers = langData?.product_page;
     const productItemText = langData?.product_item;

     return (
          <div className="newest__products">
          <div className="container newest__products__container">
               <div className="newest__products__header">
                    <div className="categories">
                         <span>{bestSellers?.best_seller}</span>
                         
                    </div>
                    <div className="category-line-circle">
                         <div className="category-line">
     
                         </div>
                         <div className="circles">
                              <div className="circle active"></div>
                              <div className="circle"></div>
                              <div className="circle"></div>
                         </div>
                    </div>
               </div>
               <div className="products-list">
                    {ordersBestSellers.map(item => {
                         return <Product product={item} key={`best_${item?.id}`} text={productItemText} />
                    })  }
               </div>
          </div>
     </div>
     )
}
export default BestSellers;
