import React from 'react';
import "./styles/_error-404.scss"
import { root } from '../../../helpers/constants/constants'
export default function Error404() {
  return (
    <div className="container page_not_found_container">
        <div className="error__content">
          <h2 className="error__content__header" >Page Not Found</h2>
          <img alt="error" src={`${root}/icons/config/404_error_icon.png`} />

        </div>
    </div>
  )
}
