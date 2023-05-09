const realyze = require('../config').realyze;
const functions = require('../functions/functions')
const getSummArray = functions.summArray;
const getTokensForQuery = functions.query;


module.exports.cartById = async (req, res) => {
     const userId = req.params.user_id;
     const productCount = req.params.count;     
     const [cartByUser] = await realyze("SELECT cart FROM `user_interest` WHERE `user_id`= ? ", [userId]); 
     console.log("🚀 ~ file: cart.js:12 ~ module.exports.cartById= ~ cartByUser:", cartByUser)
     if (cartByUser === undefined) {
          await realyze("INSERT INTO `user_interest`(user_id, wish, cart) VALUES ( ?, ?, ?)  ", [userId, '', ''])
     }
     else if (!cartByUser.cart) {
          res.send([]);     
     }else{

          const cart = JSON.parse(cartByUser.cart);
          const product_ids =  Object.keys(cart)
          const quantities =  Object.values(cart)
          const tokens = getTokensForQuery(product_ids);
          let products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, product_ids);
          const productsWithCounts = products.reduce((acc, curr, pos) => {
               acc.push({
                    ...curr,
                    quantity: quantities[pos]
               });
               return acc;
          },[])
          res.send(productsWithCounts)
     }
}
module.exports.addToCartById = async (req, res) => {
     let cart = {};
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
               cart[productId] = (productId in cart) ?
                     +cart[productId] + +productQuantity : productQuantity;
               await realyze("UPDATE `user_interest` SET cart = ? WHERE `user_id`= ? ", [JSON.stringify(cart),userId]);  
            }else{
               cart = JSON.stringify({
                    [productId]: productQuantity
               });
               await realyze("UPDATE `user_interest` SET cart = ? WHERE `user_id`= ? ", [cart,userId]);  
          }
     }
     const product_ids =  Object.keys(cart)
     const quantities =  Object.values(cart)
     const tokens = getTokensForQuery(product_ids);
     let products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, product_ids);
     const productsWithCounts = products.reduce((acc, curr, pos) => {
          acc.push({
               ...curr,
               quantity: quantities[pos]
          });
          return acc;
     },[])
     res.send(productsWithCounts)

} 
module.exports.removeProductFromCart = async (req, res) => {
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
          const productsWithCounts = products.reduce((acc, curr, pos) => {
               acc.push({
                    ...curr,
                    quantity: cartValues[pos]
               });
               return acc;
          },[])
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
