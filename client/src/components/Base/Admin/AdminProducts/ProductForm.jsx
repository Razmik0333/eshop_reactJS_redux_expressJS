import AdminMenu from "../AdminMenu/AdminMenu";
import ProductCreateUpdate from "./ProductCreateUpdate";

function ProductForm() {
     return(
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <ProductCreateUpdate />
               </div>

          </div>
         
     )
}

export default ProductForm;
