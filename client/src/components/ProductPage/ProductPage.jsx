import PathPanelProductPage from "./PathPanelProductPage/PathPanelProductPage";
import ProductContent from "./ProductContent/ProductContent";
import ProductReview from "./ProductReview/ProductReview";
import BestSellers from "./BestSellers/BestSellers";
import NewsLetters from "../Products-details/NewsLetters/NewsLetters";
import ProductSimilar from "./ProductSimilar/ProductSimilar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeProductsRating } from "../../redux/ducks/productDuck";

function ProductPage() {
     const dispatch = useDispatch()
     useEffect(() => {
          dispatch(changeProductsRating());
 

     }, []);

     return(
          <div className="product-part">
               <PathPanelProductPage/>
               <ProductContent />
               <ProductReview />
               <ProductSimilar />
               <BestSellers />
               <NewsLetters />
          </div>
     )
}

export default ProductPage;
