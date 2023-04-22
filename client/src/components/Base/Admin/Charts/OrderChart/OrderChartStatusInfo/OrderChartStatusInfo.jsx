import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {Chart as ChartJS} from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';


import { adminOrderSelector } from '../../../../../../helpers/reduxSelectors';
import { getArrayForChartStatus } from '../../../../../../helpers/functions/functions';

function OrderChartStatusInfo() {
     const ordersList = useSelector(adminOrderSelector);
     const ordersForChartStatus = getArrayForChartStatus(ordersList);
     const [orderData, setOrderData] = useState({
          labels: Object.values(ordersForChartStatus).map(item => item.user_status),
          datasets:[
               {
                    label: "Status",
                    data: Object.values(ordersForChartStatus).map(item => item.orderCount),
               }
          ]
          
     })

     const acceptedOrders = ordersList.filter(item => +item?.user_status === 0);
     useEffect(() => {
          setOrderData(
               {
                    labels: Object.values(ordersForChartStatus).map(item => item.user_status),
                    datasets:[
                         {
                              label: "Status",
                              data: Object.values(ordersForChartStatus).map(item => item.orderCount),
                         }
                    ]
                    
               }
          )
         
     }, [acceptedOrders.length]);

  
  return (
     <div className="orders_graph_content">
          {
               <Doughnut data={orderData} />
          }

     </div>
  )
}

export default OrderChartStatusInfo
