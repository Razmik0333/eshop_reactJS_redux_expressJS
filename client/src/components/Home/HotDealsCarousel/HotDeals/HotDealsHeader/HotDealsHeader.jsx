import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { currentLanguageDataSelector, maxDiscountDataSelector } from "../../../../../helpers/reduxSelectors";
import { getHotDealsId } from "../../../../../redux/ducks/configsDuck"
import "./styles/_hot-deals-header.scss"
function HotDealsHeader() {
     const dispatch = useDispatch();
     const [hotDealsIndex,setHotDealsIndex] = useState(0) 
     const  maxDiscountData= useSelector(maxDiscountDataSelector);
     const changeHotDealsId = (e) => {
          setHotDealsIndex(+e.target.dataset.id)
          dispatch(getHotDealsId(e.target.dataset.id))
     }
     const hotDeals = useSelector(currentLanguageDataSelector)?.home?.hot_deals?.header;

     return (
          <div className="hot__deals_header">
               <h4> {hotDeals}</h4> 
               {/* am -> թեժ առաջարկ, en -> hot deals , ru -> Горячие скидки */}
               {/* am -> թեժ առաջարկ, en -> hot deals , ru -> Горячие скидки */}
               <div className="circles">
                    {
                         maxDiscountData.map((_,pos) => {
                              return  <div 
                                        className={+hotDealsIndex === pos ? "circle active" : "circle" }
                                        data-id={pos}
                                        key={`hotDeals_${pos}`}
                                        onClick={changeHotDealsId}
                                   ></div>
                         })
                    }
                   
                   
               </div>
          </div>
     )
}

export default HotDealsHeader
