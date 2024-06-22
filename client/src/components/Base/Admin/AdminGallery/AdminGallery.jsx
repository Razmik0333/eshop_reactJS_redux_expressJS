import React from 'react'
import AdminMenu from '../AdminMenu/AdminMenu'
import AdminGalleryForm from './AdminGalleryForm/AdminGalleryForm'
export default function AdminGallery() {
  return (
     <div className="admin__panel">
          <div className="container admin__panel__container">
               <AdminMenu />
               <AdminGalleryForm />
          </div>
     </div>
  )
}
