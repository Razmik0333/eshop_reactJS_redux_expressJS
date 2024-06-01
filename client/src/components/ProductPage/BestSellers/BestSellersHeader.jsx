import { useDispatch, useSelector } from "react-redux";
import { currentLanguageDataSelector, getBestSellerCircleIdSelector, verySoldedProductsSelector } from "../../../helpers/reduxSelectors";
import './styles/_newest-products-header.scss'
import { getBestSellerProductId } from "../../../redux/ducks/configsDuck";
export default function BestSellersHeader() {
     const dispatch = useDispatch();
     const langData = useSelector(currentLanguageDataSelector);
     const bestSellers = langData?.product_page;
     const ordersBestSellers = useSelector(verySoldedProductsSelector);
     const circleId = useSelector(getBestSellerCircleIdSelector);
     console.log("🚀 ~ BestSellersHeader ~ circleId:", circleId)

     const getBestSellerCircleId = (e) => {
          dispatch(getBestSellerProductId(e.target.dataset.circle));
     }
  return (
     
     <div className="newest__products__header">
          <div className="categories">
               <span>{bestSellers?.best_seller}</span>
          </div>
          <div className="category-line-circle">
               <div className="category-line"></div>
               <div className="circles">
                    {
                         ordersBestSellers.map((_, pos) => {
                            return  pos % 4 === 0 && <div className={`circle ${ +pos/4 === +circleId ? 'active' : ''} `} data-circle={`${pos/4}`} onClick={getBestSellerCircleId}></div>
                         })
                    }                    
               </div>
          </div>
     </div>
  )
}
