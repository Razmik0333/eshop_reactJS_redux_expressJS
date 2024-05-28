const realyze = require('.././config').realyze;
const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
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
const getProductsWithCounts = (data, quantities) => {
    return data.reduce((acc, curr, pos) => {
          acc.push({
               ...curr,
               quantity: quantities[pos]
          });
          return acc;
     },[]);
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

const getSizeOfObject = (obj) => {
     return Object.keys(obj).length;
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
                    product_id : +key,
                    count: max
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
const getStatus = (num) => {
     switch (num) {
          case 0:
               return {
                    title: 'Ընդունված',
                    status : 'accept',
                    message: 'ընդունվել է'
               }
          case 1:
               return {
                    title: 'Ուղարկված',
                    status : 'reached',
                    message: 'ուղարկվել է'
               }
          case 2:
               return {
                    title: 'Հանձնված Փ/Բ',
                    status : 'delivered_PS',
                    message: 'հանձնվել է ՓԲ'
               }
          case 3:
               return {
                    title: 'Հանձնված',
                    status : 'delivered',
                    message: 'հանձնվել է'
               }     
          case 4:
               return {
                    title: 'Ավարտված',
                    status : 'finished',
                    message: 'Ավարտվել է'
               }     
          default:
               break;
     }
}

const getReviewsFromProducts = async(data) => {
    return await Promise.all(data.map(async(item) => {
          const avatarUrl = `public/images/users/${item.user_id}`;
          const productUrl = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`;
          const productId = item.product_id;

          const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);

          const avatarFiles = fs.existsSync(avatarUrl) ?  await fsPromises.readdir(avatarUrl) : [];
          const productPictures = fs.existsSync(productUrl) ? await fsPromises.readdir(productUrl) : [];
          return await {
               ...item,
               product: productItem,
               productPictures: productPictures,
               avatarPicture: avatarFiles[0],
          }
     }))
}

const getAdminCurrentOrderData = async(data) => {
     const currentOrder = JSON.parse(data.user_order);
     const productIds = Object.keys(currentOrder)
     const productCounts = Object.values(currentOrder)
     const tokens = getTokensForQuery(productIds)
     const productsList = await realyze(`SELECT * FROM products WHERE id IN (${tokens}) `, productIds)
     const productData =  await productsList.reduce((acc, curr,pos) => {
          acc.push({
               ...curr,
               quantity:productCounts[pos]
          });
          return acc;
     },[]);

     return await {
          ...data,
          products: productData
     }
}



const getReviewsByUser = async (data) => {
     return await Promise.all(data.map(async(item) => {
          const productId = item.product_id;
          const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);
          const url = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`
          const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []
          return await {
               ...item,
               product: productItem,
               pictures: files,
          }
     }));
}
const getReviewListFromProduct = async (data) => {
     const urlReview = path.resolve() + `/public/images/reviews`;
     const urlUsers = path.resolve() + `/public/images/users`;

     return await Promise.all(data.map(async(item) => {
               
          const url = `${urlReview}/${item.user_id}/${item.order_id}/${item.product_id}`;
          const urlOfUserAvatar = `${urlUsers}/${item.user_id}`
          const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []
          const fileOfAvatar = fs.existsSync(urlOfUserAvatar) ? await fsPromises.readdir(urlOfUserAvatar) : []
          return await {
               ...item,
               pictures: files,
               avatar: fileOfAvatar
          }
     }))
}

const getRatingCounts = (data) => {    
     return data.reduce((acc, curr) => {
          if (!(curr.rating in acc)) {
               acc[curr.rating] = {
                    count : 1
               }
          }else{
               acc[curr.rating] = {
                    count : +acc[curr.rating].count + 1
               }
          }
          return acc
     },{})
}


const getMessageObjectStatusChange = (to, statusIndex,orderId) => {
     const subject = `Ձեր պատվերը ${getStatus(+statusIndex).message}`;
     const text = `Շնորհավորում ենք ։ Ձեր ${orderId} պատվերը ${getStatus(+statusIndex).message}`;
     const html = `<b>${text}</b>`
     return {
          to, subject, text , html
     };
}
const getMessageObjectAuth = (to, type) => {
     const subject = type === "login" ? 
          `Դուք մուտք եք գործել համակարգ` :
                `Դուք գրանցվել եք համակարգում`
     const text = type === "login" ?
           `Շնորհավորում ենք Դուք մուտք եք գործել համակարգ` :
                `Շնորհավորում ենք Դուք գրանցվել եք համակարգում`;
     const html = `<b>${text}</b>`
     return {
          to, subject, text , html
     };
}

const getCountsOffHighRating = (mostestData) => {
    return mostestData.reduce((acc, curr) => {
          if(!(curr.product_id in acc) ){
               acc[curr.product_id] = {
                    rating : curr.rating,
                    count : 1
               }
          }else {
               acc[curr.product_id] = {
                    ...acc[curr.product_id],
                    count : ++acc[curr.product_id].count
               }
          }
          return acc;
     },{})
}

const getIdOffHighRatingProduct = (mostData) => {
     let max = 0;
     let maxObj = {}
     for (const key in mostData) {
          if (mostData[key].count > max) {
               max = mostData[key].count; 
               maxObj = {
                    product_id : +key,
                    count: max,
                    rating: mostData[key].rating
               } 
          }
     }
     return maxObj;
}


module.exports = {
     solded : [
          getMaxSoldedProducts,
          
          getMaxSoldedProductIds
     ],
     query :getTokensForQuery,
     idsArray :getIdsArray,
     summArray:getSummArray,
     sizeOfObject: getSizeOfObject,
     adminOrderCurrentData:getAdminCurrentOrderData,
     getProductsFromOrdersList :getProductsFromOrdersList,
     mostestProduct: getMostestProduct,
     mostestMaxObject: getMostestMaxObject,
     middleRating : getMiddleRating,
     productsWithCounts:getProductsWithCounts,
     statusIndex : getStatus,
     messageObjectStatusChange: getMessageObjectStatusChange,
     messageObjectAuth: getMessageObjectAuth,
     reviewsFromProducts:getReviewsFromProducts,
     reviewsByUser:getReviewsByUser,
     reviewsByProduct:getReviewListFromProduct,
     ratingCounts : getRatingCounts,
     countsOffHighRating: getCountsOffHighRating,
     idOffHighRatingProduct : getIdOffHighRatingProduct
}


