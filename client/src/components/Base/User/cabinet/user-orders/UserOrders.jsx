import React from 'react'
import MenuBar from '../menu-bar/MenuBar'
import Orders from '../../../../Orders/Orders/Orders'
import "./styles/user-orders.scss"
export default function UserOrders() {
  return <>
     <div className="container user_orders_container">
          <MenuBar/>
          <Orders/>
     </div>
  </>   
}
