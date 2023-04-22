import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDay, getHour, getMinute, getSecond } from "../../../../../helpers/functions/timerFunctions";
import { currentLanguageDataSelector, hotDealsTimerSelector } from "../../../../../helpers/reduxSelectors";
import { getHotDealsTimerSecond } from "../../../../../redux/ducks/configsDuck";
import  "./styles/_hot-deals-timer.scss";

function HotDealsTimer() {
     let date = new Date();
     const dispatch = useDispatch();
     const timeDeals = useSelector(hotDealsTimerSelector);
     const timeDealsTest = 5;
     const [second, setSecond] = useState(0);
  //   console.log("🚀 ~ file: HotDealsTimer.jsx ~ line 8 ~ HotDealsTimer ~ second", second)
     const [minute, setMinute] = useState(0);
     const [hour, setHour] = useState(0);
     const [day, setDay] = useState(2);
     const timerObj = useSelector(currentLanguageDataSelector)?.home?.hot_deals?.timer;

     const [isCounting, setIsCounting] = useState(true);
    // console.log(date.getSeconds()); 
     useEffect(() => {
          const id = setInterval(() => {
               let  currentSecond = Math.floor((Date.now() - date)/1000);
               //console.log(Date.now() - date);
               
               if (currentSecond === timeDeals)  setIsCounting(false);
               if (isCounting && Date.now() - date >= 1000   ) {
                    setSecond(getSecond(timeDeals - currentSecond));
                    setMinute(getMinute(timeDeals - currentSecond));
                    setHour(getHour(timeDeals - currentSecond))
                    setDay(getDay(timeDeals - currentSecond));
                   
               }
              // console.log(Math.floor((Date.now() - date)/1000));

              
          }, 1000);
          !isCounting && clearInterval(id) //!!!!!
          return () => clearInterval(id)
     }, [isCounting]);

     return (
          <div className="hot-deals-timer">
               <div className="timer-item day">
                    {day}
               <br/>{timerObj?.day}</div>
               {/*  */}
               <div className="timer-item hour">
                    {
                         hour < 10 ? `0${ hour}` :  hour
                    }
               <br/>{timerObj?.hour}</div>
               {/*  */}
               <div className="timer-item minute">{
                    minute < 10 ? `0${ minute}` :  minute
               }
               <br/>{timerObj?.minute}</div>
               {/*  */}
               <div className="timer-item second">{

               second < 10 ? `0${second}` : second

               }<br/>{timerObj?.second}</div>
               {/*  */}
          </div>
     )
}

export default HotDealsTimer;
