import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adminAllSubCategoriesListSelector, currentLanguageDataSelector, subCategoriesSelector } from '../../../../helpers/reduxSelectors';
import SubCategoriesInfoHeader from './SubCategoriesInfoHeader';
import SubCategoryCreate from './SubCategoryCreate';
import SubCategoriesInfoItem from './SubCategoriesInfoItem';
import { fetchAllSubCategories } from '../../../../redux/ducks/adminSubCategoryDuck';
import "./styles/_sub-category-info.scss";
import { fetchCategoriesList } from '../../../../redux/ducks/adminCategoryDuck';
export default function SubCategoriesInfo() {
    const  dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCategoriesList())
      dispatch(fetchAllSubCategories())

    }, []);
    const subCategories = useSelector(adminAllSubCategoriesListSelector);
    const categoriesInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.sub_category;
    return (
      <div className="sub__category__info__block">
          <div className="sub__categories__info__header">
                {categoriesInfoLangData?.all_sub_categories}
          </div>

      <div className="sub__categories__info">
                <SubCategoriesInfoHeader />
                <div className="sub__category__item__infos">
                {
                  subCategories.map((subCategory, pos) => {
                    
                          return <SubCategoriesInfoItem subCategory={subCategory} key={`subCategory_${pos}`}/>
                    })
                }
                </div>
          </div>
          <SubCategoryCreate />
      </div>
    )
}
