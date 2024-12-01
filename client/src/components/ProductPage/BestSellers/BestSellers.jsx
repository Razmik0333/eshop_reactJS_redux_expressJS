import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, getBestSellerCircleIdSelector, verySoldedProductsSelector } from "../../../helpers/reduxSelectors";
import { fetchVerySoldedProducts } from "../../../redux/ducks/productDuck";
import Product from "../../Base/Product/Product";
import './styles/_best-sellers.scss';
import BestSellersHeader from "./BestSellersHeader";
function BestSellers() {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchVerySoldedProducts());
     }, []);
     const langData = useSelector(currentLanguageDataSelector);
     const ordersBestSellers = useSelector(verySoldedProductsSelector);
     const productItemText = langData?.product_item;
     const circleId = useSelector(getBestSellerCircleIdSelector);
     console.log("🚀 ~ BestSellers ~ circleId:", circleId)
     const filtered = ordersBestSellers.filter((_, pos) => {
          return pos >= circleId * 4 && pos < (circleId + 1) * 4
     });
     console.log(filtered);
     return (
          <div className="newest__products">
          <div className="container newest__products__container">
               <BestSellersHeader />
               <div className="products-list">
                    {

                         filtered.map(item => {
                              return <Product product={item} key={`best_${item?.id}`} text={productItemText} />
                         })  
                    }
               </div>
          </div>
     </div>
     )
}
export default BestSellers;
