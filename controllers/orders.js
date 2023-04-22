const realyze = require('../config').realyze;
const functions = require('../functions/functions');

const getTokensForQuery = functions.query
module.exports.ordersByUser = async (req, res) => {
     const userId = req.params.id;
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? ", [userId]);
     res.send(orders)
}
module.exports.allOrdersByUser = async (req, res) => {
     const userId = req.params.id;
     const ordersByUser = await realyze("SELECT id, user_order, user_status, user_price FROM orders WHERE user_id = ? ", [userId]);
     const resArray = await Promise.all(ordersByUser.map(async(item,pos) => {
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
     res.send(JSON.stringify(resArray, undefined, 2));
}
/*module.exports.getPackageProducts = async (req, res) => {
     const userId = req.params.id;
     const orders = await realyze(`SELECT * FROM orders WHERE user_id = ? `, [userId]);
     res.send(orders)
}*/
module.exports.ordersByStatus = async (req, res) => {
     const userId = req.params.id;
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [userId, 3]);
     res.send(orders)
}
