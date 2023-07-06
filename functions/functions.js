const realyze = require('.././config').realyze;

const getMaxSoldedProducts = (arr) => {
     return arr
     .map(item => JSON.parse(item?.user_order))
     .reduce((acc, curr) => {
          for (const key in curr) {
               if (key in acc) {
                    acc[key] += +curr[key];
               }else{
                    acc[key] = 1;
               }
          }
          return acc
     },{})
}
const getMaxSoldedProductIds = (productObj) => {
     return  Object.entries(productObj).sort((a, b) => {
          return b[1] - a[1]
     }).filter((_, pos) => pos <= 3)
     .map(item => item[0])
}
const getTokensForQuery = (idArray) => {
     return new Array(idArray.length).fill('?').join(',')
}
const getIdsArray = (idsString) => {
     return idsString.split('|').join(',').split(',')
}
const getSummArray = (arr) => {
    return arr.reduce((acc, curr) => {
          return +acc + +curr
     }, 0)
}
const upload = () => {
     
     
}

const getProductsFromOrdersList = async (arr) => {
          return  await Promise.all(arr.map(async(item,pos) => {
          const user_order = JSON.parse(item?.user_order);
          const productsKeys = Object.keys(user_order);
          const productsValues = Object.values(user_order);
          
          const tokens = getTokensForQuery(productsKeys);
          let productIds = Object.keys(user_order);
          const result = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productIds);
          return await {
               ...item,
               user_order: result,
               quantities:productsValues
          }
     })) 
}

module.exports = {
     solded : [
          getMaxSoldedProducts,
          
          getMaxSoldedProductIds
     ],
     query :getTokensForQuery,
     idsArray :getIdsArray,
     summArray:getSummArray,
     uploadFile : upload,
     getProductsFromOrdersList :getProductsFromOrdersList

}

