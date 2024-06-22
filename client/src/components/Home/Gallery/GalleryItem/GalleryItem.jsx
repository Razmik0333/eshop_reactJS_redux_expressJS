import React from 'react'
import { root } from '../../../../helpers/constants/constants'
export default function GalleryItem({gallery}) {
  return (
     <div className="gallery-item">
          <img src={`${root}/images/gallery/${gallery?.id}.jpg`} alt="" />
     </div>
  )
}
