import React from 'react'
import AdminMenu from '../AdminMenu/AdminMenu'
import CategoriesInfo from './CategoriesInfo'

export default function AdminCategory() {
  return (
     <div className="admin__panel">
          <div className="container admin__panel__container">
               <AdminMenu />
               <CategoriesInfo />
          </div>

          </div>
  )
}
