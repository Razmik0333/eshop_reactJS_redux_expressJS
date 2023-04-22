import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../../../helpers/reduxSelectors";
import { fetchOrdersList } from "../../../../redux/ducks/adminOrderDuck";
import { fetchProductsList } from "../../../../redux/ducks/adminProductDuck";
import { fetchUsersList } from "../../../../redux/ducks/adminUserDuck";
import ChartsContent from "../Charts/ChartsContent";
import OrderChart from "../Charts/OrderChart/OrderChart";
import OrdersInfo from "../OrdersInfo/OrdersInfo";
import TotalInfos from "../TotalInfos/TotalInfos";

function AdminContent() {
     const dispatch = useDispatch()
     const userId = useSelector(getUserId)
     useEffect(() => {
          dispatch(fetchUsersList(userId));
          dispatch(fetchProductsList(userId));
          dispatch(fetchOrdersList(userId));

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
