
export const  getSecond = (second) =>  {
     return second % 60;
 } 
 
export const  getMinute = (second) =>  {
     const secondOfOneHour = 3600;
     const hours = Math.floor(second / secondOfOneHour)
   return  second >= 60  ? Math.floor((second - (hours * secondOfOneHour)) / 60)
         : 0;
   
 } 
 
export const  getHour = (second) =>  {
     const secondOfOneDay = 3600 * 24;
     const days = getDay(second);
    return  second >= 3600 ? Math.floor((second - (days * secondOfOneDay)) / 3600) : 0;
     
 } 
export const  getDay = (second) =>  {
     return  second >= 3600 * 24 ? Math.floor(second / (3600 * 24)) : 0
     
 } 
 
 
 
 
 /*
     
     if(second > secondInDay) {
          if (second -  Math.floor(second / (secondInDay)) * (secondInDay) >= 3600 ) {
               
          }
          
     }

     
     
    
     
     Math.floor((second - (3600 * 24)) / 3600) : second > 3600 ? 

                               
                                
                                        Math.floor((second - 3600) / 3600):
                                            Math.floor(second / 3600)*/

