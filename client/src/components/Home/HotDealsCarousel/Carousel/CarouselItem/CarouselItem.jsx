import React from 'react'
import { root } from '../../../../../helpers/constants/constants'
import { useSelector } from 'react-redux';
import { getCurrentLanguageSelector } from '../../../../../helpers/reduxSelectors';

export default function CarouselItem({service}) {
     const currentLanguage = useSelector(getCurrentLanguageSelector);

  return (
     <div className="carousel__body">
          <div className="carousel__picture">
               <img 
                    alt={
                         currentLanguage === 'am' ? service?.descr : 
                         currentLanguage === 'en' ? service?.descr_en :
                         service?.descr_ru
                    } 
                    title={currentLanguage === 'am' ? service?.descr : 
                         currentLanguage === 'en' ? service?.descr_en :
                         service?.descr_ru
                    }  
                    src={`${root}/${service?.image_path}`}/>
          </div>
     </div>
  )
}
