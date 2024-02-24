export const  getArrFromField = (arr, field) =>  {
     return arr.reduce((acc, curr) => {
          acc.push(curr[field]);
          return acc
     }, [])
}
export const numInArray = (arr, id) => {
  return arr.filter(item => item === id).length === 0
}
export const summRating = (arr) => {
  return   arr.reduce((acc, curr) => {
          acc += +curr['rating'];
          return acc;
     }, 0) 
}
export const getUserOrdersFromArray = (arr) => {
     return arr.reduce((acc, curr) => {
               acc[curr?.id] = JSON.parse(curr?.user_order)
          return acc
     }, {})
}
export const getObjectFromSoldedOrders = (arr) => {
     return arr.reduce((acc, curr) => {
          for (const key in curr) {
               if (key in acc) {
                    acc[key] += +curr[key];
               }else{
                    acc[key] = 1;
               }
          }
          return acc
          
     }, {} )
}
export const getOrdersFromStatus = (arr, status) =>  {

     return +status === -1 ? arr : arr.filter(item => +item?.user_status === +status)
}

//
export const getCartSumm = (arr) => {
     return arr.reduce((acc, curr) => {
          acc += curr?.cost * ( 1 - curr?.discount/100 ) * +curr?.quantity;
          return acc
     }, 0);
}
export const getProductCount = (arr) => {
     
    const count = arr.length === 0 ? 0 :
     arr.reduce((acc, curr) => {
          acc += +curr?.quantity
          return acc;
     },0);
     return count
}
//
export const getMinMax = (arr, type) => {
     let variab = arr[0];
     arr.forEach((item) => {
          return variab =  type === 'max' ? 
          (+item > variab ? +item : variab) :
               (+item < variab ? +item : variab)
     })
     return +variab
}
export const generateArrayFromMaxMin = (arr) => {
     let newArr = []
    for (let i = arr[0]; i <= arr[1]; i++) {
          newArr.push(i)
     
    }
    return newArr
}
export const getPositiveNumber = (val) => {
     return  val <= 0 ? 0 : val;
}
export const getHigherStrValue = (str1, str2) => {
    return parseInt(str1) >= parseInt(str2) ? parseInt(str2) - 16 : parseInt(str1);
}

export const getCountCart = (obj) => {
    return Object.values(obj).reduce((acc, curr) => {
          acc += curr ;
          return acc;
     }, 0)
}
export const getSumCart = (cart, cartData) => {
     const values = Object.values(cart)
     return values.reduce((acc, curr, ind) => {
           acc += curr * cartData[ind]['cost']*(1 - cartData[ind]['discount'] / 100);
           return acc;
      }, 0)
 }
export const getNewCurrency = (val, price) => {
     switch (val) {
          case 'AMD':
               return {
                    value : price,
                    char : '֏'
               }
          case "RUB":
               return {
                    value : (+price / 6).toFixed(2),
                    char : '₽'
               }
          case "USD":
               return {
                    value : (+price / 410).toFixed(2),
                    char : '$'
               }
          default:
               break;
     }
 }

export const sortDesc = (arr) => {
    return arr.length <= 1 ? arr : arr.sort((a, b) => {
          return a.id - b.id
     })
}

 export const checkEmptyObject = (obj) => {
     return Object.keys(obj).length === 0;
   }
 export const getObjectSize = (obj) =>  {
     return Object.keys(obj).length;
   }
   export const getTotalPrice = (arr) => {
     return arr.reduce((acc, curr) => {
         return acc += +curr?.user_price
     }, 0)
   }
export const getStatus = (num) => {
     switch (num) {
          case 0:
               return {
                    title: 'Ընդունված',
                    status : 'accept' 
               }
          case 1:
               return {
                    title: 'Ուղարկված',
                    status : 'reached' 
               }
          case 2:
               return {
                    title: 'Հանձնված Փ/Բ',
                    status : 'delivered_PS' 
               }
          case 3:
               return {
                    title: 'Հանձնված',
                    status : 'delivered' 
               }     
          case 4:
               return {
                    title: 'Ավարտված',
                    status : 'finished' 
               }     
          default:
               break;
     }
}
export const getCategoryName = (num) => {
     switch (num) {
          case 1:
               return {
                    title: 'Փայտյա Իրեր',
                    
               }
          case 2:
               return {
                    title: 'Բաժակ',
                    
               }
          case 3:
               return {
                    title: 'Թոփփեր',
                    
               }     
          default:
               break;
     }
}
export const getMostestURL = (num) => {
     switch (num) {
          case "0":
               return {
                    url: `recent`
               }     
          case "1":
               return {
                    url: `sale`
               }     
          case "2":
               return {
                    url: `desired`
               }     
          case "3":
               return {
                    url: `rating`
               }     
          default:
               break;
     }
}

export const hasValueInObject = (val, arr) => {
     
    return arr.find((item, pos) => val in arr[pos]) ? true : false
}


export const getBestSellers = (obj) => {
     return Object.entries(obj).sort((a, b) => {
          return b[1] - a[1]
     }).filter((_, pos) => pos <= 3)
     .map(item => item[0])

}


export const getSortedArray = (orgArr, typeObj) => {          
          switch (typeObj.type && typeObj.time) {
               case 'price' && 'lowest':
                    return orgArr.sort((a, b) => {
                         return a.cost - b.cost
                    })
               case 'price' && 'highest':
                    return orgArr.sort((a, b) => {
                         return b.cost - a.cost
                    })
               case 'date' && 'lowest':
                    return orgArr.sort((a, b) => {
                         return a.time_add - b.time_add
                    })
               case 'date' && 'highest':
                    return orgArr.sort((a, b) => {
                         return b.time_add - a.time_add
                    })          
               default:
                    break;
          }
}
export const getWordInUpperFistLetter = (str) =>{
     return str.charAt(0).toUpperCase() + str.slice(1, str.length)
}

export function getArrayForChartByTime(arr, timeObj){ 
     let currentTime = 0;
     //console.log(arr);
     
     return arr.reduce((acc, item) => {
          currentTime = (timeObj?.month === undefined)?
          (new Date(+item?.time_add)).getMonth():
               (new Date(+item?.time_add)).getDate() ;
          if(currentTime in acc){
               acc[currentTime] = {
                    id : item?.id,
                    time: currentTime,
                    user_price: acc[currentTime]?.user_price + +item?.user_price
               }
          }else{
               acc[currentTime] = {
                    id : item?.id,
                    time: currentTime,
                    user_price: +item?.user_price
               }
          }
          return acc
     }, {})    
} 
export function getArrayForChartStatus(arr){  
     return arr.reduce((acc, item) => {
          if(item?.user_status in acc){
               acc[item?.user_status] = {
                    id : item?.id,
                    user_status: getStatus(+item?.user_status)?.title,
                    orderCount: acc[item?.user_status]?.orderCount + 1
               }
           }else{
                acc[item?.user_status] = {
                     id : item?.id,
                     user_status: getStatus(+item?.user_status)?.title,
                     orderCount: 1
                }
           }
          return acc
     }, {})    
} 
export const getArrayForChartRating = (arr) => {
     return arr.reduce((acc, item) => {
          if(item?.rating in acc){
               acc[item?.rating] = {
                    id : item?.id,
                    rating: +item?.rating,
                    productCount: +acc[item?.rating]?.productCount + 1
               }
           }else{
                acc[item?.rating] = {
                     id : item?.id,
                     rating: +item?.rating,
                     productCount: 1
                }
           }
          return acc
     }, {}) 
}
export const getArrayByOrderAndTime = (arr) => {
     return arr.reduce((acc, item) => {          
          acc[item?.time_add] = {
             id:  item?.id,
             user_order:JSON.parse(item?.user_order),
             time_add :+item?.time_add
          };
        return acc
     },{})
}
export const getFilteredArrayByMonth = (arr, timeObj) => {
     return arr.filter(item => {       
         return  (new Date(+item?.time_add).getFullYear() === +timeObj?.year) 
               
     })
}
export const getProductsListFromIdAndCategory = (arr) => {
     return arr.reduce((acc, item) => {
          acc[item?.id] = {
             id:  item?.id,
             category:JSON.parse(item?.category)
          };
        return acc
     },{})
}


export const getFilteredArrayByDay = (arr, timeObj) => {
     const monthForFinished = +timeObj?.month + 2 === 13 ? `01` : `${+timeObj?.month + 2}`
     const yearForFinished = +timeObj?.month + 2 === 13 ? `${+timeObj?.year + 1}` : `${+timeObj?.year}`
     const startedTime = Date.parse(`${+timeObj?.month + 1}.01.${timeObj?.year}`)
     const finishedTime = Date.parse(`${monthForFinished}.01.${yearForFinished}`)
     return arr.filter(item => {
         return  (+item?.time_add >= +startedTime) && (+item?.time_add <= +finishedTime) 
     })
}


export const anotherMethod = (ordersList, productsList) => {
     return ordersList.reduce((acc, curr) => {
          for (const key in curr?.user_order) {
               const category = getCategoryFromProductId(productsList,key)
             if (new Date(+curr?.time_add).getDate() in acc) {            
                    if (category in acc[new Date(+curr?.time_add).getDate()]) {
                         acc[new Date(+curr?.time_add).getDate()][category] = {
                              countItem: acc[new Date(+curr?.time_add).getDate()][category].countItem + +curr?.user_order[+key]
                         }
                    }else{
                        acc[new Date(+curr?.time_add).getDate()][category] = {
                             countItem: 1
                        }
                   }
              }else{
                    
                    acc[new Date(+curr?.time_add).getDate()] = {
                         [category] :{
                              countItem: 1

                         }
                    }
               }
          }
          return acc;
     },{})
}

export const getArrayForChartByCategories = (arr,ind) => {
     const counts = arr.map(item =>  item[ind]?.countItem !== undefined ? item[ind]?.countItem : 0).filter(item => item > 0);
     return {
          label: getCategoryName(ind)?.title,
          data: counts
     }
}
export const  getArrayOfDatasets = (arr, arrIndexes) => {
    return arrIndexes.map(item => getArrayForChartByCategories(arr, item))
}

export const getCategoryFromProductId = (arr, id) => {
     
     return arr[id]?.category
}

export const getTime = (time) => {
    return time < 10 ? `0${time}` : time
}

export const getMiddleRating = (obj) => {
     let sumRating = 0;
     let countRating = 0;
     for (const key in obj) {
          sumRating += +key * +obj[key]?.count;
          countRating += +obj[key]?.count;
          
     }
     
     return parseFloat(sumRating / countRating).toFixed(1);
}

export const getDataFromInterval = (data, params) => {
     return data.filter((item, pos) => {
          return pos >= params.start && pos <= params.start + params.count
     })
}
