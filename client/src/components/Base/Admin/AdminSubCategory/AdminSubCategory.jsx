import React from 'react'
import AdminMenu from '../AdminMenu/AdminMenu'
import SubCategoriesInfo from './SubCategoriesInfo'

export default function AdminSubCategory() {
  return (
     <div className="admin__panel">
          <div className="container admin__panel__container">
               <AdminMenu />
               <SubCategoriesInfo />
          </div>

     </div>
  )
}
