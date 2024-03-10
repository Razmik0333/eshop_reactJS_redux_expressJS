import React from 'react'
import AdminMenu from '../../AdminMenu/AdminMenu'
import AdminReviewsInfo from '../AdminReviewsInfo/AdminReviewsInfo'

export default function AdminReviews() {
  return (
     <div className="admin__panel">
          <div className="container admin__panel__container">
               <AdminMenu />
               <AdminReviewsInfo />
          </div>
     </div>
  )
}
