import { useDispatch, useSelector } from 'react-redux';
import './styles/_categories-filter-panel.scss';
import { fetchSubCatgories } from '../../../../redux/ducks/subCategoryDuck';
import { useEffect } from 'react';
import { currentCategoryIdSelector, currentSubCategorySelector, subCategoriesSelector } from '../../../../helpers/reduxSelectors';
import { clearCostValues, getSubCategory, getSubCategoryId } from '../../../../redux/ducks/configsDuck';
function CategoriesFilterContent(){
     const dispatch = useDispatch();

     const currentCategory = useSelector(currentCategoryIdSelector);
     const currentSubCategory = useSelector(currentSubCategorySelector)

     useEffect(() => {
          dispatch(fetchSubCatgories(currentCategory))
     }, [currentCategory]);

      useEffect(() => {
           dispatch(clearCostValues({}));
          //  dispatch(changeCountElements(6))
          //  dispatch(changeCountItemsOfPage(6))
     }, [currentSubCategory]);

     const subCategories = useSelector(subCategoriesSelector)
     const changeSubCategoryId = (e) => {
          console.log(e.target.dataset);
          dispatch(getSubCategoryId(e.target.dataset.id));
          dispatch(getSubCategory(e.target.dataset.sub_category));
     }
     return (
          <>
               <p className="categories__filters__header">
                     FILTER BY CATEGORIES
               </p>
               <div className="categories__filters__content">
                    <ul className="filters-items">
                         {
                              subCategories.map(item => {
                                   return   <li className={`filter-item ${+currentSubCategory ===  +item?.sub_category ?  `active` : ``}`} 
                                                  data-id ={item?.id}  key={`sub_${item?.id}`} 
                                                  data-category={item?.category}
                                                  data-sub_category = {item?.sub_category}
                                                  onClick={changeSubCategoryId}>
                                                  <span className="category__name" data-id ={item?.id}
                                                       data-category={item?.category}
                                                       data-sub_category = {item?.sub_category}
                                                  >
                                                       {
                                                            item?.arm_name
                                                       }
                                                  </span>
                                                  <span className="product-count" data-id ={item?.id}
                                                       data-category={item?.category}
                                                       data-sub_category={item?.sub_category}
                                                  >
                                                       {
                                                            item?.count
                                                       }
                                                  </span>
                                             </li>
                              })
                         }
                    </ul>
               </div>
          </>
     )
}

export default CategoriesFilterContent;
