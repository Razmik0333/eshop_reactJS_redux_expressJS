import React from 'react'
import AdminMenu from '../AdminMenu/AdminMenu'
import ProductsFromList from './ProductsFromList'

export default function AdminAddProductsByList() {
     return (
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <ProductsFromList />
               </div>

     </div>
     )
}
