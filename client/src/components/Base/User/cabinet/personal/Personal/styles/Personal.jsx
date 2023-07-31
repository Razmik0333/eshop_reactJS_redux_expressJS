import React from 'react'
import MenuBar from '../../../menu-bar/MenuBar'
import PersonalData from '../../personal-data/PersonalData'
import "./_personal.scss"
export default function Personal() {
  return (
    <div className="container personal_container">
          <MenuBar />
          <PersonalData />
    </div>
  )
}
