import React from 'react'
import ProductChartHeader from './ProductChartHeader/ProductChartHeader'
import ProductGraphContent from './ProductGraphContent/ProductGraphContent'
import ProductRatingInfo from './ProductRatingInfo/ProductRatingInfo'

function ProductChart() {
  return (
     <div className="chart__block">
     <div className="orders_graph">
         <ProductChartHeader />
         <ProductGraphContent />
     </div>
     <div className="orders_status">
         <ProductRatingInfo /> 
     </div>

 </div>
  )
}

export default ProductChart
