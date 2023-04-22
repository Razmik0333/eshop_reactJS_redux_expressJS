
import OrderChartHeader from './OrderChartHeader/OrderChartHeader';
import OrderChartStatusInfo from './OrderChartStatusInfo/OrderChartStatusInfo';
import OrdersGraphContent from './OrdersGraphContent/OrdersGraphContent';
import './styles/chart-block.scss';
function OrderChart() {
  
  return (
    
        <div className="chart__block">
            <div className="orders_graph">
                <OrderChartHeader />
                <OrdersGraphContent />
            </div>
            <div className="orders_status">
                <OrderChartStatusInfo /> 
            </div>

        </div>
        
      

  )
}

export default OrderChart
