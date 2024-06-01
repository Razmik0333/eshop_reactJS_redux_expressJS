const fs = require('fs');
const fsPromises = require('fs/promises')
const realyze = require('../config').realyze;
const variables = require('../variables/variables');

const functions = require('../functions/functions');
const fs_functions = require('../functions/fs_functions');
const path = require('path')
const [
     getMaxSoldedProducts,
     getMaxSoldedProductIds
] = functions.solded
const getTokensForQuery = functions.query

const getMostestProductData = functions.mostestProduct;
const getMostestMaxObject = functions.mostestMaxObject;
const getMiddleRating = functions.middleRating;
const getCountsOffHighRating = functions.countsOffHighRating;
const getIdOffHighRatingProduct = functions.idOffHighRatingProduct;
module.exports.productsByCategory = async (req, res) => {
     const params = req.params.id;
     const cachesPath = variables.caches.product;
     try {
          if (typeof +params === 'number' && !isNaN(+params)) {
               const categories = await realyze("SELECT * FROM `category` ");             
               if(fs.existsSync(cachesPath + `products`)){
                    
                    if (fs.existsSync(`${cachesPath}/products/${[categories[params - 1]?.alias]}.json`)) {
                         fs.readFile( `${cachesPath}/products/${[categories[params -1]?.alias]}.json`,"utf-8",
                         async function(err, data) {
                              if (err) throw err;
                              else {                                   
                                   const [lastProductId] = await realyze("SELECT MAX(id) AS max FROM products WHERE category = ?", [params])
                                   if (JSON.parse(data)[0].id !== lastProductId.max) {
                                        const result = await realyze("SELECT * FROM `products` WHERE `category`= ?  ORDER BY id DESC LIMIT ?", [params, 12]);
                                        fs_functions.writeCacheFile(
                                             `${cachesPath}/products/${[categories[params - 1]?.alias]}.json`,
                                             result);
                                             
                                             res.send(result);
                                   }else{
                                        res.send(data);
                                   }
                              }
                         })
                    }else{
                         const result = await realyze("SELECT * FROM `products` WHERE `category`= ?  ORDER BY id DESC LIMIT ?", [params, 12]);
                         fs_functions.writeCacheFile(
                              `${cachesPath}/products/${[categories[params - 1]?.alias]}.json`,
                              result
                         )
                         res.send(result);
                    }
               }
          }else{
               res.send([]);
          }
          
     } catch (err) {
          throw err;
     }
}
module.exports.similarProducts = async (req, res) => {
     
     try {
          const catId = req.params.catid;
          const prodId = req.params.prodid;
          if (typeof +catId === 'number' && !isNaN(+catId)) {
               const cachesPath = variables.caches.product;    
               if (fs.existsSync(`${cachesPath}/similar/similar.json`)) {
                    fs.readFile(`${cachesPath}/similar/similar.json`, "utf-8",
                    async function(err, data) {
                         if (err) throw err;
                         else { 
                              const [lastProductId] = await realyze("SELECT MAX(id) AS max FROM products WHERE category = ?", [catId])
                              if (JSON.parse(data)[0].id < lastProductId.max) {
                                   const result = await realyze("SELECT * FROM `products` WHERE `category`= ? AND `id` != ? ORDER BY id DESC LIMIT ?", [catId, prodId, 8]);
                                   fs_functions.writeCacheFile(
                                        `${cachesPath}/similar/similar.json`,
                                        result);
                                   res.send(result);
                              }else{
                                   res.send(data);
                              }                             
                         }
                    })
               
               }else{
                    const result = await realyze("SELECT * FROM `products` WHERE `category`= ? AND `id` != ? ORDER BY id DESC LIMIT ?", [catId, prodId, 24]);
                    fs_functions.writeCacheFile(
                         `${cachesPath}/similar/similar.json`,
                         result
                    )
                    res.send(result)
               }
          }else{
               res.send([]);
          }
     } catch (err) {
          throw err;
     }
}
module.exports.productsByLargeDiscount = async (req, res) => {
     try {
          const cachesPath = variables.caches.product;
          if(fs.existsSync(cachesPath + `large_discount`)){
               if (fs.existsSync(`${cachesPath}/large_discount/large_discount.json`)) {
                    fs.readFile( `${cachesPath}/large_discount/large_discount.json`,"utf-8",
                    async function(err, data) {
                         if (err) throw err;
                         else { 
                              res.send(data);                          
                         }
                         
                    })
                    
               }else{
                    const discountedProducts = await realyze("SELECT * FROM `products`  ORDER BY discount DESC LIMIT ?", [3])
                    fs_functions.writeCacheFile(
                         `${cachesPath}/large_discount/large_discount.json`,
                         discountedProducts
                    )
                    res.send(discountedProducts);
               }
          }
     } catch (err) {
          throw err;
     }

}
module.exports.recommendedProducts = async (req, res) => {
     const cachesPath = variables.caches.product;
     try {
          if (fs.existsSync(`${cachesPath}/recomended/recomended.json`)) {
               fs.readFile( `${cachesPath}/recomended/recomended.json`,"utf-8",
                    async function(err, data) {
                         if (err) throw err;
                         else {                                   
                              const [lastProductId] = await realyze("SELECT MAX(id) AS max FROM products WHERE `is_recomended` = ? ORDER BY id DESC LIMIT ?", [1, 5])
                              if (JSON.parse(data)[0].id < lastProductId.max) {
                                   const result = await realyze("SELECT * FROM `products` WHERE `is_recomended` = ? ORDER BY id DESC LIMIT ?", [1, 5]);
                                   fs_functions.writeCacheFile(
                                        `${cachesPath}/recomended/recomended.json`,
                                        result);
                                   res.send(result);
                              }else{                                  
                                   res.send(data);
                              }
                         }
                    })
          } else {
               const result = await realyze("SELECT * FROM `products` WHERE `is_recomended` = ? ORDER BY id DESC LIMIT ?", [1, 5]);
              fs_functions.writeCacheFile(
                    `${cachesPath}/recomended/recomended.json`,
                    result
              ) 
              res.send(result)
          }
     } catch (err) {
          throw err;
     }


}
module.exports.filteredProducts = async (req, res) => {
     const cachesPath = variables.caches.product;    
     const params = req.params.id;
     try {
          if (typeof +params === 'number' && !isNaN(+params)) {
               const categories = await realyze("SELECT * FROM `category` ");
               if(fs.existsSync(cachesPath + `filtered_products`)){
                    if (fs.existsSync(`${cachesPath}/filtered_products/${[categories[params - 1]?.alias]}.json`)) {
                         fs.readFile( `${cachesPath}/filtered_products/${[categories[params -1]?.alias]}.json`,"utf-8",
                         async function(err, data) {
                              if (err) throw err;
                              else {                                   
                                   const [lastProductId] = await realyze("SELECT MAX(id) AS max FROM products WHERE category = ?", [params])
                                   if (JSON.parse(data)[0].id < lastProductId.max) {
                                        const result = await realyze("SELECT * FROM `products` WHERE `category` = ? ORDER BY id DESC ", [req.params.id]);
                                        fs_functions.writeCacheFile(
                                             `${cachesPath}/filtered_products/${[categories[params - 1]?.alias]}.json`,
                                             result);
                                        res.send(result);
                                   }else{
                                        res.send(data);
                                   }
                              }
                         })
                    }else{
                         const result = await realyze("SELECT * FROM `products` WHERE `category` = ? ORDER BY id DESC ", [req.params.id]);
                         fs_functions.writeCacheFile(
                              `${cachesPath}/filtered_products/${[categories[params - 1]?.alias]}.json`,
                              result
                         )
                    }
               }
          }else{
               res.send([]);
          }
          
     } catch (err) {
          throw err;
     }
    
}
module.exports.productById = async (req, res) => {
     try {
          
          const cachesPath = variables.caches.product;
          if(fs.existsSync(cachesPath + `large_discount`)){
               if (fs.existsSync(`${cachesPath}/product_page/products.json`)) {
                    fs.readFile( `${cachesPath}/product_page/products.json`,"utf-8",
                    async function(err, data) {
                         if (err) throw err;
                         else {
                              if (+JSON.parse(data)?.id !== +req.params.id) {                                  
                                   const [result] = await realyze("SELECT * FROM `products` WHERE `id` = ? ", [req.params.id]);
                                   result['url'] = `/images/products/${req.params.id}.jpg`;
                                   fs_functions.writeCacheFile(
                                        `${cachesPath}/product_page/products.json`,
                                        result
                                   )
                                   res.send(result);
                              } else {
                                   res.send(data);
                              }                                 
                         }
                    })
               }else{
                    const [result] = await realyze("SELECT * FROM `products` WHERE `id` = ? ", [req.params.id]);
                    result['url'] = `/images/products/${req.params.id}.jpg`;
                    fs_functions.writeCacheFile(
                         `${cachesPath}/product_page/products.json`,
                         result
                    )
                    res.send(result);
               }
          }
     } catch (err) {
          throw err;
     }
}

module.exports.productsByIds = async (req, res) => {
     try {
          const ids = req.body.ids;
          const userId = req.body.userId;
          const cachesPath = variables.caches.product;   
          if (!fs.existsSync(`${cachesPath}/viewed/${userId}`)) {
               fs.mkdir(`${cachesPath}/viewed/${userId}`,{recursive: true}, (err) => {
                    if (err) throw err
               });
          } 
          if (fs.existsSync(`${cachesPath}/viewed/${userId}/viewed.json`)) {
               fs.readFile( `${cachesPath}/viewed/${userId}/viewed.json`,"utf-8",
               async function(err, data) {
                    if (err) throw err;
                    else {                        
                         const arrOfCacheIds = JSON.parse(data).map(item => item.id);
                          if (ids.length !== arrOfCacheIds.length) {                                  
                              const result = await realyze(`SELECT * FROM products WHERE id IN (${ids})`, [ids]);
                              fs_functions.writeCacheFile(
                                   `${cachesPath}/viewed/${userId}/viewed.json`,
                                   result
                              )
                              res.send(result);
                         }else {
                              
                              res.send(data);
                         }                                 
                    }
               })
          } else {
               const result = await realyze(`SELECT * FROM products WHERE id IN (${ids})`, [ids]);
               fs_functions.writeCacheFile(
                    `${cachesPath}/viewed/${userId}/viewed.json`,
                    result
               )
               res.send(result);
          }
     } catch (err) {
          throw err;
     }
}
module.exports.viewed = async (req, res) => {
     const userId = req.body.userId;
     const product_id = req.body.product_id;
     const [viewedByUser] = await realyze("SELECT viewed FROM `user_interest` WHERE user_id = ? ", [userId])
     if (viewedByUser?.viewed === '') {
          await realyze("UPDATE `user_interest` SET viewed = ? WHERE user_id = ?", [product_id,userId]);
          res.send(JSON.stringify(product_id))
     } else {
          const viewedIds =  viewedByUser?.viewed.split('|');
          const filtered =  viewedIds.filter(item => item === product_id);
          if(filtered.length === 0){
             const newIds = `${viewedByUser?.viewed}|${product_id}`;

              await realyze("UPDATE `user_interest` SET viewed = ? WHERE user_id = ?", [newIds,userId])
              res.send(JSON.stringify(newIds.split('|')))
          }else{
               
               res.send(JSON.stringify(viewedIds))
        }
     }
     
}
module.exports.productsBetweenCosts = async (req, res) => {
     const start = req.query.start;
     const final = req.query.final;
     const currentQuery = req.query;
     if ('category' in req.query) {
          const category = currentQuery.category;
          const result = await realyze("SELECT * FROM products WHERE category = ? AND cost >= ? AND cost <= ? ", [category,start, final]);
          res.send(result)
     } else {
          const search = currentQuery.search;
          const result = await realyze("SELECT * FROM products WHERE  descr LIKE ? AND cost >= ? AND cost <= ? ", [`%${search}%`,start, final]);
          res.send(result)
          
     }
}
module.exports.search = async (req, res) => {
     const search = req.query.search;    
     const searched = await realyze("SELECT * FROM products WHERE main LIKE ? OR descr LIKE ?", [`%${search}%`,`%${search}%`]);
     res.send(searched)
}
module.exports.hintAdd = async (req, res) => {
     const userId = req.body.user_id;
     const hint = req.params.hint;
     if (userId) {
          const [currentSearched] = await realyze("SELECT search_items FROM user_interest WHERE user_id = ? ", [userId])
          const search_items = currentSearched.search_items;
          const newHint = `${search_items}|${hint}`;
          !search_items.includes(hint) &&
          await realyze("UPDATE `user_interest` SET `search_items` = ? WHERE `user_id`= ? ", [newHint,userId]);
          res.send(JSON.stringify(hint))
     }
}
module.exports.hint = async (req, res) => {
     const userId = req.body.user_id;
     if (userId) {
          const [currentSearched] = await realyze("SELECT search_items FROM user_interest WHERE user_id = ? ", [userId])
          const search_items = currentSearched.search_items;
          const hintArr = search_items
                              .split("|")
                              .map((item, pos) => {
                                   return {
                                   'id' : pos,
                                   'descr' : item,
                                   }
                              })
                              .sort((a, b) =>  b.id - a.id)
                              return res.send(hintArr)
     }
     return  res.send([]);
}
module.exports.sold = async (req, res) => {
     try {
          const cachesPath = variables.caches.product;  
          const user_orders = await realyze(`SELECT user_order FROM orders `);
          const productObj = getMaxSoldedProducts(user_orders);
          const productIds = getMaxSoldedProductIds(productObj);
          console.log("🚀 ~ module.exports.sold= ~ productIds:",getTokensForQuery(productIds) );
          
          if (fs.existsSync(`${cachesPath}/solded/solded.json`)) {
               fs.readFile(`${cachesPath}/solded/solded.json`, "utf-8",
               async function(err, data) {
                    if (err) throw err;
                    else { 
                         const productSortedIds = productIds.sort((a, b) => a - b)                                  
                        const newArr =  JSON.parse(data).filter((item, pos) => item['id'] === +productSortedIds[pos] );
                         if (newArr.length === 4) res.send(data)
                         else{
                              const tokens = getTokensForQuery(productIds)
                              const result = await realyze(`SELECT * FROM products WHERE id IN (${tokens}) `, productIds)
                              //const result = await realyze(`SELECT * FROM products WHERE id IN (? , ? , ?, ?)`, productIds);
                              fs_functions.writeCacheFile(
                                   `${cachesPath}/solded/solded.json`,
                                   result
                              )
                              res.send(result)
                         }
                    }
               })
          }else{
               const tokens = getTokensForQuery(productIds)
               const result = await realyze(`SELECT * FROM products WHERE id IN (${tokens}) `, productIds)
               fs_functions.writeCacheFile(
                    `${cachesPath}/solded/solded.json`,
                    result
               )
               res.send(result)
          }
     } catch (err) {
          throw err;
     }
}

module.exports.evaluateProducts = async( req, res) => {
     const {
          rating,
          review,
          user_name,
          product_id,
          user_id,
          order_id,
          user_email
     } = req.body;
     typeof product_id === "object" ? 
          product_id.forEach(async(item, pos) => {
               await realyze("INSERT INTO reviews (user_id,order_id, product_id, rating, review, user_name, user_email, time_add) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
               [user_id[0], order_id[0], item, rating[pos], review[pos], user_name, user_email, `${Math.floor(Date.now())}`]
               )
               
          }) :
          await realyze("INSERT INTO reviews (user_id,order_id, product_id, rating, review, user_name, user_email, time_add) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
               [user_id[0], order_id, product_id, rating, review, user_name, user_email, `${Math.floor(Date.now())}`]
          )
     await realyze("UPDATE `orders` SET `user_status` = ? WHERE id = ? ", [4, order_id[0]]);
     res.send(JSON.stringify('1'))
}
module.exports.productsRating = async( req, res) => {
     const productsIdsString = req.params.id;
     const productsIdsData = productsIdsString.trim("").split(',');
     productsIdsData.forEach(async(item, pos) => {
         const productItem =  await realyze("SELECT rating FROM reviews WHERE product_id = ? ", [item]);
          const current = getMiddleRating(productItem)
          await realyze("UPDATE products SET rating = ?  WHERE id = ? ", [current, item] )
     })

     res.send(JSON.stringify('1'))
}


module.exports.mostestRating = async (req, res) => {
     const cachesPath = variables.caches.product;
     const mostestData = await realyze("SELECT product_id, rating FROM reviews WHERE rating = ? ", [5]);
     const mostData = getCountsOffHighRating(mostestData)
     const objOffHighRatingProduct = getIdOffHighRatingProduct(mostData)
     if (fs.existsSync(`${cachesPath}/mosest/rating.json`)) {
          fs.readFile(`${cachesPath}/mosest/rating.json`,"utf-8",
          async function(err, data) {
               if (err) throw err;
               else {                    
                    if (JSON.parse(data)?.id === objOffHighRatingProduct.product_id) {
                         console.log('read');
                         res.send(data)
                    }
                    else{
                         const [maxRated] = await realyze("SELECT * FROM products WHERE id = ? ", [objOffHighRatingProduct.product_id])  
                         fs_functions.writeCacheFile(
                              `${cachesPath}/mosest/rating.json`,
                              maxRated
                         );
                         res.send(JSON.stringify(maxRated))

                    }
               }
          })
     } else {
          
          const [maxRated] = await realyze("SELECT * FROM products WHERE id = ? ", [objOffHighRatingProduct.product_id])  
          fs_functions.writeCacheFile(
               `${cachesPath}/mosest/rating.json`,
               maxRated
          )
          res.send(JSON.stringify(maxRated))
     }
    
}

module.exports.mostestSale = async(req, res) => {
     const cachesPath = variables.caches.product;
     const saleProducts = await realyze("SELECT user_order FROM orders WHERE user_status = 4 ", []);
     const productsCounts = getMostestProductData(saleProducts,"user_order")
     const maxObj = getMostestMaxObject(productsCounts);
     if (fs.existsSync(`${cachesPath}/mosest/sale.json`)) {
          fs.readFile(`${cachesPath}/mosest/sale.json`, "utf-8",
          async function(err, data) {
               if (err) throw err;
               else { 

                     if (JSON.parse(data)?.id === maxObj.product_id) {
                         console.log('read');
                         res.send(data)
                    }
                    else{
                         const [maxSaled] = await realyze("SELECT * FROM products WHERE id = ? ", [maxObj.product_id])

                         fs_functions.writeCacheFile(
                              `${cachesPath}/mosest/sale.json`,
                              maxSaled
                         )
                         res.send(JSON.stringify(maxSaled))
                    }
               }
          })
     } else {
          const [maxSaled] = await realyze("SELECT * FROM products WHERE id = ? ", [maxObj.product_id])

          fs_functions.writeCacheFile(
               `${cachesPath}/mosest/sale.json`,
               maxSaled
          )
          res.send(JSON.stringify(maxSaled))
     }

}

module.exports.mostestRecent = async(req, res) => {
     const cachesPath = variables.caches.product;  
     const [lastProductId] = await realyze("SELECT MAX(id) AS max FROM products ")

     if (fs.existsSync(`${cachesPath}/mosest/recent.json`)) {

          fs.readFile(`${cachesPath}/mosest/recent.json`, "utf8", 
          async function(err, data) {
               if (err) throw err;
               else { 
                    if (JSON.parse(data)?.id >= lastProductId.max) {
                         console.log('read');
                         res.send(data)
                    }
                    else{
                         const [recentAddedProduct] = await realyze("SELECT * FROM products WHERE id = ? ", [lastProductId.max]);                        
                         fs_functions.writeCacheFile(
                              `${cachesPath}/mosest/recent.json`,
                              recentAddedProduct
                         )
                         res.send(JSON.stringify(recentAddedProduct))
                    }
               }
          })
     } else {
          const [recentAddedProduct] = await realyze("SELECT * FROM products WHERE id = ? ", [lastProductId.max]);
          fs_functions.writeCacheFile(
               `${cachesPath}/mosest/recent.json`,
               recentAddedProduct
          )
          res.send(JSON.stringify(recentAddedProduct))
          
     }
}


module.exports.mostestDesired = async(req, res) => {
     const cachesPath = variables.caches.product;  
     const cartsByUsers = await realyze("SELECT cart FROM user_interest");
     const filteredCart = cartsByUsers.filter(item => Boolean(item.cart) === true);
     const desiredProducts = getMostestProductData(filteredCart,"cart")
     const maxObj = getMostestMaxObject(desiredProducts);
     if (fs.existsSync(`${cachesPath}/mosest/desired.json`)) {
          fs.readFile(`${cachesPath}/mosest/desired.json`,"utf-8",
          async function(err, data) {
               if (err) throw err;
               else { 
                    if (JSON.parse(data)?.id === maxObj.product_id) {
                         console.log('read');
                         res.send(data)
                    }
                    else{
                         const [maxDesired] = await realyze("SELECT * FROM products WHERE id = ? ", [maxObj.product_id])
                         fs_functions.writeCacheFile(
                              `${cachesPath}/mosest/desired.json`,
                              maxDesired
                         )
                         res.send(JSON.stringify(maxDesired))
                    }
               }
          })
     } else {
          
          const [maxDesired] = await realyze("SELECT * FROM products WHERE id = ? ", [maxObj.product_id])
          fs_functions.writeCacheFile(
               `${cachesPath}/mosest/desired.json`,
               maxDesired
          )
          res.send(JSON.stringify(maxDesired))
     }
     
}

module.exports.services = async (req, res) => {
     const services = await realyze("SELECT * FROM services");
     res.send(services)

}
