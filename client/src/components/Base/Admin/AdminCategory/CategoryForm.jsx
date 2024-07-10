import React from 'react'
import AdminMenu from '../AdminMenu/AdminMenu'
import CategoryCreateUpdate from './CategoryCreateUpdate'

export default function CategoryForm() {
     return(
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <CategoryCreateUpdate />
               </div>

          </div>
         
     )
}
