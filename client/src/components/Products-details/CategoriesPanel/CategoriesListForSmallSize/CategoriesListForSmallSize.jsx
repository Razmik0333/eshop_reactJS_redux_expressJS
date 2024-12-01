import React from 'react'
import "./styles/_categories__small__size.scss";
import { useDispatch } from 'react-redux';
import { showSubCategoriesSmallSize } from '../../../../redux/ducks/configsDuck';
import CategoriesFilterContent from '../CategoriesFilterContent/CategoriesFilterContent';
import CategoriesFilterPrice from '../CategoriesFilterPrice/CategoriesFilterPrice';
import CategoriesFilterColor from '../CategoriesFilterColor/CategoriesFilterColor';
import CategoriesFilterSize from '../CategoriesFilterSize/CategoriesFilterSize';
export default function CategoriesListForSmallSize() {
     const dispatch = useDispatch();
     const showSubCatForSmallSize = () => {
          dispatch(showSubCategoriesSmallSize(false))

     }
  return (
    <div className="categories__container" onClick={showSubCatForSmallSize}>
          <div className="empty-div" onClick={showSubCatForSmallSize}></div>
          <div className="categories__container__block">
               <div className="categories__filters">
                    <button className="close_navbar" onClick={showSubCatForSmallSize}>
                         
                    </button>
                    <CategoriesFilterContent /> 
                    <CategoriesFilterPrice /> 
                    <CategoriesFilterColor />
                    <CategoriesFilterSize />
               </div>          
          </div>
    </div>
  )
}
