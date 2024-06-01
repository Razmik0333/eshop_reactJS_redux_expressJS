const fs = require('fs');
const realyze = require('../config').realyze;
const variables = require('../variables/variables')
const functions = require('../functions/functions');
const fs_functions = require('../functions/fs_functions');
const getTokensForQuery = functions.query;
const getIdsArray = functions.idsArray;


module.exports.wishListByUserId = async (req, res) => {
     try {
          const cachesPath = variables.caches.interest;

          const userId = req.params.user_id;
          const [wishByUser] = await realyze("SELECT `wish` FROM `user_interest` WHERE `user_id`= ? ", [userId]);
          if (wishByUser === undefined) {
               await realyze("INSERT INTO `user_interest`(user_id, wish, cart) VALUES ( ?, ?, ?)  ", [userId, '', ''])
          }
          else if (!wishByUser.wish) {
               res.send([]);     
          }else{
               const productsIds = getIdsArray(wishByUser.wish);
               const tokens = getTokensForQuery(productsIds);
               //const products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productsIds);
               if (!fs.existsSync(`${cachesPath}/wishlist/${userId}`)) {
                    fs.mkdir(`${cachesPath}/wishlist/${userId}`,{recursive: true}, (err) => {
                         if (err) throw err
                    });
               }
               if (fs.existsSync(`${cachesPath}/wishlist/${userId}/wishlist.json`)) {
                    fs.readFile(`${cachesPath}/wishlist/${userId}/wishlist.json`, 'utf-8',
                         async function(err, data) {
                              if (err) throw err;
                              else { 
                                   const productSortedIds = productsIds.sort((a, b) => a - b)                                  
                                   const newArr =  JSON.parse(data).filter((item, pos) => item['id'] === +productSortedIds[pos] );
                                   if (newArr.length === JSON.parse(data).length) 
                                   {
                                        console.log('read');
                                        res.send(data);
                                   }
                                   else{
                                        const products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productsIds);
                                        //const productsWithCounts = getProductsWithCounts(products, quantities);
                                        fs_functions.writeCacheFile(
                                             `${cachesPath}/wishlist/${userId}/wishlist.json`,
                                             products
                                        )
                                        res.send(products)
                                   }
                              }
                         }
                    )
               } else {
                    const products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productsIds);
                    fs_functions.writeCacheFile(
                         `${cachesPath}/wishlist/${userId}/wishlist.json`,
                         products
                    )
                    res.send(products)
               }
     
              // res.send(products);
          }
          
     } catch (error) {
          throw error
     }
}

module.exports.addToWishlist = async (req, res) => {
     const cachesPath = variables.caches.interest;
     let productsIds = [];
     let products = [];
     let tokens = '';
     const userId = req.body.user_id;
     const productId = req.params.product_id;
     const [wishByUser] = await realyze("SELECT wish FROM `user_interest` WHERE `user_id`= ? ", [userId]); 
      if(!wishByUser){
           await realyze("INSERT INTO wish (user_id, wish, cart) VALUES ( ?, ? , ? ) ", [userId, productId, null]); 
           products = await realyze(`SELECT * FROM products WHERE id = ?`, [productId]);
      }else{
          const availableId =  wishByUser?.wish.split('|').filter(item => item === productId );
          if(availableId.length === 0){
               const newWish = wishByUser?.wish === '' 
                    ? `${productId}`:`${wishByUser?.wish}|${productId}`;
               await realyze("UPDATE `user_interest` SET wish = ? WHERE `user_id`= ? ", [newWish,userId]);  
               productsIds = getIdsArray(newWish);
          }else{
               productsIds = getIdsArray(wishByUser.wish);
          }
          tokens = getTokensForQuery(productsIds);
          products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productsIds);
          fs_functions.writeCacheFile(
               `${cachesPath}/wishlist/${userId}/wishlist.json`,
               products
          )
      }     
      res.send(products);
}

module.exports.removeFromWishlist = async (req, res) => {
     const cachesPath = variables.caches.interest;
     const userId = req.body.user_id;
     const productsId = req.params.id;
     const [wishByUser] = await realyze("SELECT wish FROM `user_interest` WHERE `user_id`= ? ", [userId]); 
     const idsArray = wishByUser.wish.split('|').filter(item => item !== productsId );
     const newWish = idsArray.join('|') ;
     await realyze("UPDATE `user_interest` SET wish = ? WHERE `user_id`= ? ", [newWish,userId]);  
     if(newWish === ""){
          res.send([])
     }else{
          const tokens = getTokensForQuery(idsArray);
          const products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, idsArray);
          fs_functions.writeCacheFile(
               `${cachesPath}/wishlist/${userId}/wishlist.json`,
               products
          )
          res.send(products);

     }
}
