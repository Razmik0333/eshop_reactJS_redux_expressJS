import AdminMenu from "../AdminMenu/AdminMenu"
import ProductsInfo from "./ProductsInfo"

function AdminProducts() {
     return (
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <ProductsInfo />
               </div>

     </div>
     )
}

export default AdminProducts
