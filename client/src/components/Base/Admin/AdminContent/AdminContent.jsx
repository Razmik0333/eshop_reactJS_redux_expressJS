import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../../../helpers/reduxSelectors";
import { fetchUsersList } from "../../../../redux/ducks/adminUserDuck";
import ChartsContent from "../Charts/ChartsContent";
import OrdersInfo from "../OrdersInfo/OrdersInfo";
import TotalInfos from "../TotalInfos/TotalInfos";
import { fetchProductsList } from "../../../../redux/ducks/adminProductDuck";

function AdminContent() {
     const dispatch = useDispatch()
     const userId = useSelector(getUserId)
     useEffect(() => {
          dispatch(fetchUsersList());
          dispatch(fetchProductsList());
          

     }, []);
     console.log('jhjh');
     
     return (
          <div className="admin__content">
                    <TotalInfos />
                    <ChartsContent />
                    <OrdersInfo />

          </div>
     )
}

export default AdminContent;
