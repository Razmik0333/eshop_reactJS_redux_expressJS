import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { currentLanguageDataSelector, getMostestProductSelector, mostestIndex } from "../../../../helpers/reduxSelectors";
import RatingMapping from "../../../Base/RatingMapping/RatingMapping";
import MostestProductsHeader from "./MostedProductsHeader/MostedProductsHeader";
import { fetchMostestProduct } from "../../../../redux/ducks/productDuck";
import MostestProduct from "./MostestProduct/MostestProduct";
import { root } from "../../../../helpers/constants/constants";
import OffersButton from "./OffersButtons/OffersButton";

function MostestProducts() {
     
     const dispatch = useDispatch()
     const mostestId = useSelector(mostestIndex);

     useEffect(() => {
          dispatch(fetchMostestProduct(mostestId))

     }, [mostestId]);
     const mostestRatingData = useSelector(getMostestProductSelector);
     const mostestProductsData = useSelector(currentLanguageDataSelector)?.home?.mostest_products;
     console.log("🚀 ~ file: MostestProducts.jsx:22 ~ MostestProducts ~ mostestProductsData:", mostestProductsData)

     return (
          <div className="furniture__gallery">
          <p className="furniture__gallery__header">{mostestProductsData?.mostest}</p>
          <div className="furniture__gallery__content">
               <MostestProductsHeader />
               <div className="offers-informations">
                    <div className="current-offer">
                    <img src={`${root}/images/products/${mostestRatingData?.id}.jpg`} alt="" className="current-offer" />

                    </div>
                    <div className="offers-panels">
                         <div className="left-panel">
                              <OffersButton /> 
                         </div>
                         <div className="right-panel">
                             <MostestProduct product={mostestRatingData}/>
                         </div>
                    </div>
                    {/* <!-- <img src="" alt="" className="current-offer"> --> */}
               </div>
          </div>
          </div>
     )
}

export default MostestProducts;
