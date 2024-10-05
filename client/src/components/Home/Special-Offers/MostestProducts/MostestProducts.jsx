import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { currentLanguageDataSelector, getMostestProductSelector, mostestIndex } from "../../../../helpers/reduxSelectors";
import MostestProductsHeader from "./MostedProductsHeader/MostedProductsHeader";
import { fetchMostestProduct } from "../../../../redux/ducks/productDuck";
import MostestProduct from "./MostestProduct/MostestProduct";
import OffersButton from "./OffersButtons/OffersButton";
import { root } from "../../../../helpers/constants/constants";

function MostestProducts() {
     
     const dispatch = useDispatch()
     const mostestId = useSelector(mostestIndex);

     useEffect(() => {
          dispatch(fetchMostestProduct(mostestId))
     }, [mostestId]);
     const mostestRatingData = useSelector(getMostestProductSelector);
     const mostestProductsData = useSelector(currentLanguageDataSelector)?.home?.mostest_products;
     return (
          <div className="furniture__gallery">
          <p className="furniture__gallery__header">{mostestProductsData?.mostest}</p>
          <div className="furniture__gallery__content">
               <MostestProductsHeader />
               <div className="offers-informations">
                    <div className="current-offer">
                    <img src={`${root}/images/products/${mostestRatingData?.id}.jpg`} alt="" className="current-offer-picture" />

                    </div>
                    <div className="offers-panels">
                         <div className="left-panel">
                              <OffersButton /> 
                         </div>
                         <div className="right-panel">
                             <MostestProduct product={mostestRatingData}/>
                         </div>
                    </div>
               </div>
          </div>
          </div>
     )
}

export default MostestProducts;
