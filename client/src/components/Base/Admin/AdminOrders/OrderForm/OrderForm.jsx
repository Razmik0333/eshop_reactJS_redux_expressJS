import AdminMenu from "../../AdminMenu/AdminMenu";
import OrderUpdate from "../OrderUpdate/OrderUpdate";

function OrderForm() {
     return (
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <OrderUpdate />
               </div>

          </div>
     )
}
export default OrderForm;
