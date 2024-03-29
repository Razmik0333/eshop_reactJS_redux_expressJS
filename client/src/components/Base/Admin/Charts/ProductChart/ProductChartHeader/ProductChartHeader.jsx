import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generateArrayFromMaxMin, getMinMax } from '../../../../../../helpers/functions/functions';
import { adminOrderSelector, currentLanguageDataSelector } from '../../../../../../helpers/reduxSelectors';
import { months_eng, root } from '../../../../../../helpers/constants/constants';
import { createMonth, createYear, resetTimeObject } from '../../../../../../redux/ducks/adminProductDuck';
function ProductChartHeader() {
     const dispatch = useDispatch();
     const [currentYear, setCurrentYear] = useState(null);
     const [currentMonth, setCurrentMonth] = useState(null);
     const ordersList = useSelector(adminOrderSelector);
     const productsChartsLangData = useSelector(currentLanguageDataSelector)?.admin?.charts;
     const ordersYears = ordersList.map(item => +item.time_add);

      const min = (new Date(getMinMax(ordersYears, 'min'))).getFullYear()
      const max = (new Date(getMinMax(ordersYears, 'max'))).getFullYear()
      const minMaxArr = generateArrayFromMaxMin([min, max]);

      const changeMonth = (e) => {
          setCurrentMonth(e.target.innerText)
          dispatch(createMonth({
               'month' : e.target.dataset.month
          }))          
      }
      const changeYear = (e) => {
          setCurrentYear(e.target.innerText)
          setCurrentMonth('Month')
          dispatch(resetTimeObject());
          dispatch(createYear({
               'year' : e.target.dataset.year
          }));
          
      }
  return (
    <>

    
     <p className="">{productsChartsLangData?.products?.header}</p>
     <div className="orders_graph_header">
     <div className="graf_for_time">
       <ul className="grafs_time">
           <li className="graf_time">
               <span className="years_head">
               {
                    currentYear ? currentYear : productsChartsLangData?.time?.year
               }
                   <img src={`${root}/template/images/icons/triangle.svg`} alt="" />
               </span>
               <ul className="years" onClick={changeYear}>
                    {
                        minMaxArr.map((item) => {
                            return <li className="years_item" key={`year_${item}`} data-year={`${item}`}>{item}</li>
                        })    
                    }
               </ul>
               
           </li>
           <li className="graf_time active">
               <span className="months_head">
                    {
                         currentMonth? currentMonth : productsChartsLangData?.time?.month
                    }  
                   <img src={`${root}/template/images/icons/triangle.svg`} alt="" />
               </span>
               <ul className="months" onClick={changeMonth}>
                   {
                        months_eng.map((item, pos) => {
                            return  <li key={`month_${pos}`} className="month_item" data-month={`${pos}`}>{item}</li>
                        })
                   }
               </ul>
           </li>

           {/* <li className="graf_time">
               <span className="days_head">Day</span>
               <div className="day">
                   <input type="text" name="" id="" />
               </div>
           </li> */}

       </ul>

     </div>
     <div className="sales">
       
       <ul className="sale_items">
         <li className="sale_item">{productsChartsLangData?.products?.product} </li>
       </ul>
     </div>
   </div>
   </>
  )
}

export default ProductChartHeader
