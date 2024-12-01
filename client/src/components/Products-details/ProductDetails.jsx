import AdsBannerPanel from "./AdsBannerPanel/AdsBannerPanel";
import PathPanel from "./PathPanel/PathPanel";
import ProductsPanel from "./ProductsPanel/ProductsPanel";
import CategoriesPanel from "./CategoriesPanel/CategoriesPanel";
import NewsLetters from "./NewsLetters/NewsLetters";
import './ProductsPanel/styles/_details_products_list.scss';
import { useEffect, useRef } from "react";

function ProductDetails() {

     return(
          <>
               <AdsBannerPanel />
               <PathPanel />
               <div className="details__products__list" >
                    <div className="container details__products__container">
                         <ProductsPanel />
                         <CategoriesPanel  />
                    </div>
                    <NewsLetters /> 
               </div>
          </>
     )
}

export default ProductDetails;
