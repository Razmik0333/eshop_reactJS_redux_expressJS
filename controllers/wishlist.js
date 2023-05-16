
const realyze = require('../config').realyze;

const functions = require('../functions/functions');
const getTokensForQuery = functions.query;
const getIdsArray = functions.idsArray;

module.exports.wishListByUserId = async (req, res) => {
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
          const products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productsIds);
          res.send(products);
     }
}

module.exports.addToWishlist = async (req, res) => {
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
               tokens = getTokensForQuery(productsIds);
               products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productsIds);
          }else{
               productsIds = getIdsArray(wishByUser.wish);
               tokens = getTokensForQuery(productsIds);
               products = await realyze(`SELECT * FROM products WHERE id IN (${tokens})`, productsIds);
          }
      }     
      res.send(products);
}

module.exports.removeFromWishlist = async (req, res) => {
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
          res.send(products);

     }
}
