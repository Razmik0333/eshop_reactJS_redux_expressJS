
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
 
 export const getDateTemplate = (num) => {
     
     const date = new Date(num).getDate() < 10 ? `0${new Date(num).getDate()}`:`${new Date(num).getDate()}`
     const month = new Date(num).getMonth() + 1 < 10 ? `0${new Date(num).getMonth() + 1}`:`${new Date(num).getMonth() + 1}`
     const year = new Date(num).getFullYear();
     const hour = new Date(num).getHours() < 10 ? `0${new Date(num).getHours()}`:`${new Date(num).getHours()}`
     const minute = new Date(num).getMinutes() < 10 ? `0${new Date(num).getMinutes()}`:`${new Date(num).getMinutes()}`;
    return `${date}-${month}-${year}, ${hour}:${minute}`
 }
 
 
 