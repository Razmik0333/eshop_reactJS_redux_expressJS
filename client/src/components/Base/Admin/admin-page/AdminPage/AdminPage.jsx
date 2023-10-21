import React from 'react'

import AdminMenu from '../../AdminMenu/AdminMenu'
import AdminData from '../AdminData/AdminData'
// import "./styles/_page.scss"
export default function AdminPage() {

  return (
    <div className="container page_container">
          <AdminMenu />
          <AdminData />
    </div>
  )
}
