const realyze = require('../config').realyze;
const functions = require('../functions/functions');

//const getTokensForQuery = functions.query;
const getProductsFromOrdersList = functions.getProductsFromOrdersList
module.exports.ordersByUser = async (req, res) => {
     const userId = req.params.id;
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? ", [userId]);
     res.send(orders)
}
module.exports.allOrdersByUser = async (req, res) => {
     const userId = req.params.id;
     const ordersByUser = await realyze("SELECT id, user_order, user_status, user_price FROM orders WHERE user_id = ? ", [userId]);
     const resArray = await getProductsFromOrdersList(ordersByUser)
     res.send(JSON.stringify(resArray, undefined, 2));
}
/*module.exports.getPackageProducts = async (req, res) => {
     const userId = req.params.id;
     const orders = await realyze(`SELECT * FROM orders WHERE user_id = ? `, [userId]);
     res.send(orders)
}*/
module.exports.ordersByStatus = async (req, res) => {
     const userId = req.params.id;
     const status = req.body.status
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [userId, status]);
     const resArray = await getProductsFromOrdersList(orders)
     res.send(JSON.stringify(resArray, undefined, 2));
}
module.exports.updateStatus = async (req, res) => {
     const id = req.params.id;
     const status = req.body.status;
     const userId = req.body.userId;
     console.log(req.body);
     
     await realyze("UPDATE orders SET user_status = ? WHERE id = ?", [status, id]);
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [userId, status]);
     console.log("🚀 ~ file: orders.js:35 ~ module.exports.updateStatus= ~ orders:", orders)
     const resArray = await getProductsFromOrdersList(orders)
     console.log("🚀 ~ file: orders.js:39 ~ module.exports.updateStatus= ~ resArray:", resArray)
     res.send(JSON.stringify(resArray, undefined, 2));
}
