import React from 'react'
import { useSelector } from 'react-redux';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';

export default function CategoriesInfoHeader() {
     const categoriesIsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.category;
     return (
          <>
               <div className="categories__info__titles">
                    <div className="category__title"><input type="checkbox"/></div>
                    {
                         categoriesIsInfoLangData?.header.map((item,pos) => {
                              return <div className="category__title" key={`product__title_${pos}`}>{item}</div>
                         })
                    }
               </div>
          </>
     )
}
