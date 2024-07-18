import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery } from '../../../redux/ducks/productDuck';
import { getGallerySelector } from '../../../helpers/reduxSelectors';
import './styles/_gallery.scss';
import GalleryItem from './GalleryItem/GalleryItem';
export default function Gallery() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchGallery());
     }, []);
     const galleryData = useSelector(getGallerySelector)
  return (
     <div className="container gallery__container">
          {
               galleryData.map((item,pos) => {

                    return <GalleryItem gallery={item} key={`gallery_${pos}`} />

               })
          }
     </div>
  )
}
