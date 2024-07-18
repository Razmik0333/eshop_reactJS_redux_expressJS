import React from 'react'
import { root } from '../../../../helpers/constants/constants';
export default function ProductsGalleryItem({gallery}) {
  return (

     <div className="products-gallery-block">
          <img src={`${root}/images/gallery/${gallery?.id}.jpg`} alt="" />
     </div>
          

  )
}
