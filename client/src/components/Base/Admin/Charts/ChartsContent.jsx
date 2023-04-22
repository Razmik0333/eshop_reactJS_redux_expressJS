import React from 'react'
import OrderChart from './OrderChart/OrderChart'
import ProductChart from './ProductChart/ProductChart'

function ChartsContent() {
  return (
     <div className="charts__block">
          <OrderChart />
          <ProductChart />
     </div>
  )
}

export default ChartsContent
