import AdminMenu from "../../AdminMenu/AdminMenu"
import OrdersInfo from "../OrdersInfo/OrdersInfo"
import "../styles/_admin.scss";
function AdminOrders() {
     return (
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <OrdersInfo />
               </div>

     </div>
     )
}

export default AdminOrders
