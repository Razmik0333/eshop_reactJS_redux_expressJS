import { lazy } from "react";
import ProductsDetailsList from "./ProductsDetailsList/ProductsDetailsList";

//import ProductsGrid from "./ProductsGrid/ProductsGrid";
//import ProductsList from "./ProductsList/ProductsList";
import RefreshButton from "./RefreshButton/RefreshButton";
const ProductsList = lazy(() => import('./ProductsList/ProductsList'));

function ProductsPanel(){
     return (
          
          <div className="products__panel">
               <ProductsDetailsList />
               <ProductsList /> 
               <RefreshButton /> 
          </div>

              
     )
}

export default ProductsPanel;
