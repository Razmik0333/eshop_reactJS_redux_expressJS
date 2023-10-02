const fs = require('fs')
const fsPromises = require('fs/promises')

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

const getMostestProduct = (data, fieldName) => {
     return data.reduce((acc, curr) => {
          const productData = JSON.parse(curr[fieldName]);
          for (const key in productData) {                    
               if (!(key in acc)) {
                    acc[key] = {
                         count:+productData[key]
                    }
               }else{
                    acc[key] = {
                         count: +acc[key].count + +productData[key]
                    }
               }
          }
          return acc;
     }, {});
}
const getMostestMaxObject = (data) => {
     let max = 0;
     let maxObj = {}
     for (const key in data) {
          if (data[key].count > max) {
               max = data[key].count; 
               maxObj = {
                    product_id : key,
                    count: max,
                    rating: data[key].rating
               } 
          }
     }
     return maxObj;
}
const getMiddleRating = (arr) => {
     const summ = arr.reduce((acc, curr) => {
              return acc += curr.rating
     }, 0)
     return parseFloat(summ/arr.length).toFixed(2);
         
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
     getProductsFromOrdersList :getProductsFromOrdersList,
     mostestProduct: getMostestProduct,
     mostestMaxObject: getMostestMaxObject,
     middleRating : getMiddleRating,
}


