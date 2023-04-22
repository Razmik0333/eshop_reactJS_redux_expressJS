import PathPanelProductPage from "./PathPanelProductPage/PathPanelProductPage";
import ProductContent from "./ProductContent/ProductContent";
import ProductReview from "./ProductReview/ProductReview";
import BestSellers from "./BestSellers/BestSellers";
import NewsLetters from "../Products-details/NewsLetters/NewsLetters";

function ProductPage() {
     return(
          <div className="product-part">
               <PathPanelProductPage/>
               <ProductContent />
               <ProductReview />
               <BestSellers />
               <NewsLetters />
          </div>
     )
}

export default ProductPage;
