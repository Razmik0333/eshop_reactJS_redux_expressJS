import { useSelector } from "react-redux";
import { currentLanguageDataSelector } from "../../../../helpers/reduxSelectors";

function OrdersInfoHeader() {
     const ordersInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.orders;

     return (
          <>
               <div className="orders__info__titles">
                    <div className="order__title"><input type="checkbox"/></div>
                    {
                         ordersInfoLangData?.header.map((item, pos) => {
                              return <div className="order__title" key={`order__title__${pos}`}>{item}</div>
                         })
                    }
               </div>
          </>
     )
}

export default OrdersInfoHeader;
