import React from 'react'
// import "./_personal.scss"
import AdminMenu from '../../AdminMenu/AdminMenu'
import PersonalData from '../../../Personal/PersonalData'
export default function AdminPersonal() {
  return (
    <div className="container personal_container">
          <AdminMenu />
          <PersonalData />
    </div>
  )
}
