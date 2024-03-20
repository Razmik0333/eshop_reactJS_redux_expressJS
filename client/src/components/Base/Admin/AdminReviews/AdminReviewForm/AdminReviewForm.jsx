import React from 'react'
import AdminMenu from '../../AdminMenu/AdminMenu'
import ReviewReply from '../ReviewReply/ReviewReply'


export default function AdminReviewForm() {
  return (
     
          <div className="admin__panel">
               <div className="container admin__panel__container">
                    <AdminMenu />
                    <ReviewReply />
               </div>
          </div>
  )
}
