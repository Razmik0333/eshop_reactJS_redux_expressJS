import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {Chart as ChartJS} from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';


import { adminOrderSelector, adminProductsSelector } from '../../../../../../helpers/reduxSelectors';
import { getArrayForChartRating, getArrayForChartStatus } from '../../../../../../helpers/functions/functions';

function ProductRatingInfo() {
  const productsList = useSelector(adminProductsSelector);
     const productRatingChart = getArrayForChartRating(productsList);
     const [orderData, setOrderData] = useState({
          labels: Object.values(productRatingChart).map(item => item.rating),
          datasets:[
               {
                    label: "Status",
                    data: Object.values(productRatingChart).map(item => item.productCount),
               }
          ]
          
     })

     const acceptedOrders = productsList.filter(item => +item?.user_status === 0);
     useEffect(() => {
          setOrderData(
               {
                    labels: Object.values(productRatingChart).map(item => item.rating),
                    datasets:[
                         {
                              label: "Status",
                              data: Object.values(productRatingChart).map(item => item.productCount),
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

export default ProductRatingInfo
