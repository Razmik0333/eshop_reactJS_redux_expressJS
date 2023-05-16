import React, { useEffect, useState } from 'react'
import {Chart as ChartJS} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { anotherMethod, getArrayByOrderAndTime, getArrayOfDatasets, getFilteredArrayByDay, getProductsListFromIdAndCategory } from '../../../../../../helpers/functions/functions';
import { adminOrderSelector, adminTimeObjectProductSelector } from '../../../../../../helpers/reduxSelectors';
import {adminProductsSelector} from '../../../../../../helpers/reduxSelectors.js';
import { dates } from '../../../../../../helpers/constants/constants';

function ProductGraphContent() {
  const ordersList = useSelector(adminOrderSelector);
  const arrByOrderAndTime = getArrayByOrderAndTime(ordersList);
  const productsList = useSelector(adminProductsSelector);
  const productsListFromIdAndCategory = getProductsListFromIdAndCategory(productsList)
  const timeObj = useSelector(adminTimeObjectProductSelector);
  const filteredByTime = getFilteredArrayByDay(Object.values(arrByOrderAndTime),timeObj)
  const result = anotherMethod(filteredByTime,productsListFromIdAndCategory);
  const [orderData, setOrderData] = useState({
    labels: Object.keys(result).map(item =>  +item),
    datasets:getArrayOfDatasets(Object.values(result),[1,2,3])
});
useEffect(() => {
  setOrderData({
       labels: Object.keys(result).map(item => +item),
       datasets:getArrayOfDatasets(Object.values(result),[1,2,3])
})
  

}, [timeObj.year, timeObj.month]);
return (
<div className="orders_graph_content">
  {
    <Line data={orderData} />
  }

</div>
)
}

export default ProductGraphContent
