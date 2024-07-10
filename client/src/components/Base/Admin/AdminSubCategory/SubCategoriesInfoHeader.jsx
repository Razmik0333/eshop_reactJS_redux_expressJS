import React from 'react'
import { useSelector } from 'react-redux';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';

export default function SubCategoriesInfoHeader() {
     const subCategoriesIsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category;
     return (
          <>
               <div className="sub__categories__info__titles">
                    <div className="sub__category__title"><input type="checkbox"/></div>
                    {
                         subCategoriesIsInfoLangData?.header.map((item,pos) => {
                              return <div className="sub__category__title" key={`product__title_${pos}`}>{item}</div>
                         })
                    }
               </div>
          </>
     )
}
