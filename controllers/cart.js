const fs = require('fs');
const path = require('path');

const realyze = require('../config').realyze;
const functions = require('../functions/functions')
const fs_functions = require('../functions/fs_functions');
const variables = require('../variables/variables');
const getSummArray = functions.summArray;
const getTokensForQuery = functions.query;
const getProductsWithCounts = functions.productsWithCounts;
module.exports.cartById = async (req, res) => {
     try {
          const userId = req.params.user_id;
          const [cartByUser] = await realyze("SELECT cart FROM `user_interest` WHERE `user_id`= ? ", [userId]); 
          if (cartByUser === undefined) {
               await realyze("INSERT INTO `user_interest`(user_id, wish, cart) VALUES ( ?, ?, ?)  ", [userId, '', ''])
          }
          else if (!cartByUser.cart) {
               res.send([]);     
          }else{
               const cachesPath = variables.caches.interest;
               const cart = JSON.parse(cartByUser.cart);
               const product_ids =  Object.keys(cart)
               const quantities =  Object.values(cart)
               const tokens = getTokensForQuery(product_ids);
               if (!fs.existsSync(`${cachesPath}/cart/${userId}`)) {
                    fs.mkdir(`${cachesPath}/cart/${userId}`,{recursive: true}, (err) => {
                         if (err) throw err
                    });
               }
               if (fs.existsSync(`${cachesPath}/cart/${userId}/cart.json`)) {
                    fs.readFile(`${cachesPath}/cart/${userId}/cart.json`, 'utf-8',
                         async function(err, data) {
                              if (err) throw err;
                              else { 
                                   const productSortedIds = product_ids.sort((a, b) => a - b)                                  
                                   const newArr =  JSON.parse(data).filter((item, pos) => item['id'] === +productSortedIds[pos] );
                                   if (newArr.length === JSON.parse(data).length) 
                                   {
                                        console.log('read');
                                        
                                        res.send(data);
                                   }
                                   else{
                                        const products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, product_ids);
                                        const productsWithCounts = getProductsWithCounts(products, quantities);
                                        fs_functions.writeCacheFile(
                                             `${cachesPath}/cart/${userId}/cart.json`,
                                             productsWithCounts
                                        )
                                        res.send(productsWithCounts)
                                   }
                              }
                         }
                    )
               } else {
                    const products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, product_ids);
                    const productsWithCounts = getProductsWithCounts(products, quantities);
                    fs_functions.writeCacheFile(
                         `${cachesPath}/cart/${userId}/cart.json`,
                         productsWithCounts
                    )
                    res.send(productsWithCounts)
               }
     
               
          }
          
     } catch (err) {
          throw err;
     }
}
module.exports.addToCartById = async (req, res) => {
     let cart = {};
     const cachesPath = variables.caches.interest;

     const userId = req.params.user_id;
     const productId = req.body.product_id;
     const productQuantity = req.body.quantity; 
     const [cartByUser] = await realyze("SELECT cart FROM `user_interest` WHERE `user_id`= ? ", [userId]); 
     if (!cartByUser) {   
          cart = JSON.stringify({
               [productId]: productQuantity
          });
          await realyze("INSERT INTO user_interest (user_id, wish, cart) VALUES ( ?, ? , ?) ", [userId, '', cart]); 
     }else{
          
          if(cartByUser.cart) {
               cart = JSON.parse(cartByUser.cart);

               cart[productId] = (productId in cart) ? +cart[productId] + +productQuantity : productQuantity;

               
               cart = JSON.stringify(cart)
               //await realyze("UPDATE `user_interest` SET cart = ? WHERE `user_id`= ? ", [cart,userId]);  
          }else{
                 cart = JSON.stringify({
                      [productId]: productQuantity
                    });
               }
          await realyze("UPDATE `user_interest` SET cart = ? WHERE `user_id`= ? ", [cart,userId]);  
     }
    
     const product_ids =  Object.keys(JSON.parse(cart));
     const quantities =  Object.values(JSON.parse(cart));
     const tokens = getTokensForQuery(product_ids);
     let products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, product_ids);
     const productsWithCounts = getProductsWithCounts(products,quantities)
     fs_functions.writeCacheFile(
          `${cachesPath}/cart/${userId}/cart.json`,
          productsWithCounts
     )
     res.send(productsWithCounts)

} 
module.exports.removeProductFromCart = async (req, res) => {
     const cachesPath = variables.caches.interest;

     const userId = req.body.user_id;
     const productId = req.params.product_id;
     const [cartByUser] = await realyze("SELECT cart FROM `user_interest` WHERE `user_id`= ? ", [userId]); 
     const currentCart = JSON.parse(cartByUser.cart);
     delete currentCart[productId];
     const updatedValue = Object.keys(currentCart).length === 0 ? '' : JSON.stringify(currentCart);
     await realyze("UPDATE `user_interest` SET cart = ? WHERE `user_id`= ? ", [updatedValue,userId]);
     if (Object.keys(currentCart).length === 0) {
          res.send([]);
     }else{
          const cartKeys = Object.keys(currentCart);
          const cartValues = Object.values(currentCart);
          const tokens = getTokensForQuery(cartKeys);
          let products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, cartKeys);

          const productsWithCounts = getProductsWithCounts(products,cartValues)
          fs_functions.writeCacheFile(
               `${cachesPath}/cart/${userId}/cart.json`,
               productsWithCounts
          )
          res.send(productsWithCounts);
     }
     
}

module.exports.buy = async (req, res) => {
     const order = req.body;
     const user_id = req.params.user_id;

     const bool = 
       await realyze("INSERT INTO `orders` (user_id, user_name, user_phone, user_comment, user_order, user_price, user_status, time_add) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?) ",
       [order.user_id, order.user_name, order.user_phone,order.user_comment,order.user_order,order.user_price,order.user_status, Date.now()]);
       await realyze("UPDATE `user_interest` SET cart = ? WHERE `user_id`= ? ", ['',user_id]);
     res.send([])
}
