import React from 'react'

import { root } from '../../../../../../helpers/constants/constants'

import MenuBar from '../../menu-bar/MenuBar'
import UserData from '../user-data/UserData'
import "./styles/_page.scss"
export default function Page() {

  return (
    <div className="container page_container">
          <MenuBar />
          <UserData />
    </div>
  )
}
