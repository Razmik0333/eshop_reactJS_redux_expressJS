import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersList } from "../../../../redux/ducks/adminUserDuck";
import ChartsContent from "../Charts/ChartsContent";
import OrdersInfo from "../OrdersInfo/OrdersInfo";
import TotalInfos from "../TotalInfos/TotalInfos";
import { fetchProductsList } from "../../../../redux/ducks/adminProductDuck";

function AdminContent() {
     const dispatch = useDispatch()
     useEffect(() => {
          dispatch(fetchUsersList());
          dispatch(fetchProductsList());
          

     }, []);
    
     return (
          <div className="admin__content">
                    <TotalInfos />
                    <ChartsContent />
                    <OrdersInfo />

          </div>
     )
}

export default AdminContent;
