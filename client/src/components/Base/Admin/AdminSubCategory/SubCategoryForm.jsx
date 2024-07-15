import React from 'react'
import AdminMenu from '../AdminMenu/AdminMenu'
import SubCategoryCreateUpdate from './SubCategoryCreateUpdate'

export default function SubCategoryForm() {
     return(
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <SubCategoryCreateUpdate />
               </div>

          </div>
         
     )
}
