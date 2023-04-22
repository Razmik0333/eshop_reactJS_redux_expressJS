import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import {Line, Bar} from 'react-chartjs-2';
import { getArrayForChartByTime, getFilteredArrayByDay, getFilteredArrayByMonth } from '../../../../../../helpers/functions/functions';
import { adminOrderSelector, adminTimeObjectSelector } from '../../../../../../helpers/reduxSelectors';
import {Chart as ChartJS} from 'chart.js/auto';
import { months } from '../../../../../../helpers/constants/constants';

function OrdersGraphContent() {
     const ordersList = useSelector(adminOrderSelector);
     const timeObj = useSelector(adminTimeObjectSelector);
     const filteredArrayByTime = timeObj?.month === undefined ? getFilteredArrayByMonth(ordersList, timeObj)
      : getFilteredArrayByDay(ordersList, timeObj)
     const ordersForChartMonth = getArrayForChartByTime(filteredArrayByTime,timeObj);
     const [orderData, setOrderData] = useState({
          labels: Object.values(ordersForChartMonth).map(item => {
             return  timeObj?.month === undefined ? months[item?.time] : item.time
          }),
          datasets:[
          {
               label: "Orders",
               data: Object.values(ordersForChartMonth).map(item => item?.user_price),
          }
     ]
  });
     useEffect(() => {
          setOrderData({
               labels: Object.values(ordersForChartMonth).map(item => {
                    return  timeObj?.month === undefined ? months[item?.time] : item?.time

               }),
               datasets:[
               {
                    label: "Orders",
                    data: Object.values(ordersForChartMonth).map(item => item?.user_price),
               }
          ]
       })
          
     }, [timeObj.year, timeObj.month]);
  return (
     <div className="orders_graph_content">
          {
               timeObj.month ?   <Line data={orderData} />: <Bar data={orderData}  /> 
          }

     </div>
  )
}

export default OrdersGraphContent
